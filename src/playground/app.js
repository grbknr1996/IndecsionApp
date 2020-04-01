//stateless functional component



class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []//props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
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
    //handleDeleteOptions
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption(optionToRemove){
        console.log('delete singular',optionToRemove);
        this.setState((prevState)=>{
            return {options:prevState.options.filter((option)=>{
                                return optionToRemove!==option;
                    })}
        })
    }
    //handlePick-pass down to Action and setup onClick -bind here
    //randomly pick
    handlePick() {

        let arr = this.state.options;
        alert(arr[Math.floor(Math.random() * arr.length)]);
        return arr[Math.floor(Math.random() * arr.length)];
    }
    handleAddOption(option) {
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
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     }
        // })
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer ';
        return (
            <div>
                <Header  subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}
// IndecisionApp.defaultProps={
//     options:[]
// }
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle&&<h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps={
    title:'Indecision'
}
// class Header extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    )
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length===0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}/>

                ))
            }
        </div>
    )
}
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//                 <Option />

//             </div>
//         );
//     }
// }
const Option=(props)=>{
    return (
        <div>
                {props.optionText}
                <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}>
                Remove</button>
            </div>
    )
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error:error}));
        if(!error){
            e.target.elements.option.value='';
        }
        // this.setState(() => {
        //     return {
        //         error: error
        //     }
        // })
    }
    render() {
        return (

            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
// const User = (props) => {
//     return (
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Age:{props.age}</p>
//         </div>
//     )
// }
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
