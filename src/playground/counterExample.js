// console.log('App is running')
// // //JSX -javascript XML
// //if statements
// //ternary
// //logical and operator

// //only render the subtitle and p tag if subtitle exist--&&
// //render new p tag - if options.length>0 "here are your options" else "no options"
// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of a computer',
//     options:['one','two']
// }

// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {(app.subtitle)&&(<p>{app.subtitle}</p>)}
//         <p>{app.options.length>0?'here are your options':'No options'}</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//     </div>
// );
// let count=0;
// //className is for css class
// const addOne=()=>{
//     count++;
//     renderCounterApp();
// }
// const minusOne=()=>{
//     count--;
//     renderCounterApp();
// }
// const reset=()=>{
//     count=0;
//     renderCounterApp();
// }

// //console.log(templateTwo);
// const appRoot = document.getElementById("app");




// const renderCounterApp=()=>{
//     const templateTwo=(
//         <div>
//         <h1>Count:{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>

//     );
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();










class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state={
            count:0//props.count,
           // name:'Julie'
        };
    }
    componentDidMount(){
        const stringCount=localStorage.getItem('count');
        const count =parseInt(stringCount,10);
        if(!isNaN(count)){
            this.setState(()=>{
                return{
                    count: count
                }
            })
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Update');
        if(prevState.count!==this.state.count)
        {
            localStorage.setItem("count",this.state.count)
        }
    }
    handleAddOne() {
      this.setState((prevState)=>{
          return {
              count: prevState.count+1
          }
      });

    }
    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            }
        });
    }
    handleReset() {
        this.setState(()=>{
            return {
                count: 0
            }
        });
        // this.setState((prevState)=>{
        //     return {
        //         count: prevState.count+1
        //     }
        // });
        // this.setState({
        //     count:0
        // });
        // this.setState({
        //     count:this.state.count+1
        // })
    }
    render() {
        return (
            <div>
            {this .state.name}
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
//create three method
// Counter.defaultProps={
//     count:0
// }

ReactDOM.render(<Counter/>, document.getElementById('app'));

