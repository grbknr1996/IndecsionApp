import React from 'react';
import AddOptions from './AddOption';
import Header from './Header'; 
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
    state = {
        options: [],//props.options
        selectedOption:undefined
    }
     //handleDeleteOptions
     handleDeleteOptions=()=> {
      
        this.setState(()=>({options:[]}))
    }
    handleClearSelectedOption=()=>{
        this.setState(()=>({selectedOption:undefined}))
    }
    handleDeleteOption=(optionToRemove)=>{
        console.log('delete singular',optionToRemove);
        this.setState((prevState)=>{
            return {options:prevState.options.filter((option)=>{
                                return optionToRemove!==option;
                    })}
        })
    }
    
    handlePick=()=> {

        let arr = this.state.options;
        //alert(arr[Math.floor(Math.random() * arr.length)]);
        const option= arr[Math.floor(Math.random() * arr.length)];
        this.setState(()=>{
            return{
            selectedOption: option
            }
        })
    }
    handleAddOption=(option)=> {
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        console.log(option);
        this.setState((prevState)=>({
            options:prevState.options.concat([option])
        }))
        
    }
    //lifecycle
    componentDidMount(){
      //  console.log('fetching Data')
      try {
        const json=localStorage.getItem('options');
        const options=JSON.parse(json);
        if(options){
          this.setState(()=>({options:options}));
        }
      } catch (e) {
          //
      }
      
     
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!=this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
            console.log('Saving data')
        }
       
    }
    componentWillUnmount(){
        console.log('Unmounted')
    }
   
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer ';
        return (
            <div >
                <Header  subtitle={subtitle} />
                <div className="container">
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <div className="widget">
                <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions
                handleAddOption={this.handleAddOption} />
                </div>
            <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}/>
                </div>
              
                    </div>
        )
    }
}
