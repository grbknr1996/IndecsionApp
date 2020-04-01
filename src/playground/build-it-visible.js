// const toggle=()=>{
//     visibility=!visibility;
//     render();
// }
// let visibility=false;
// const render=()=>{
//     const template=(
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}> 
//             {visibility?'Hide Details':'Show details'}
//         </button>
//         {visibility&&(
//             <div>
//             <p>Hey. These are some details</p>
//             </div>
//         )}
//         </div>
//         );
//     const appRoot=document.getElementById("app");
//     ReactDOM.render(template,appRoot);
// }
// render();
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state={
            visibility:false
        };
    }
    handleToggleVisibility(){
        this.setState((prevstate)=>{        
            return  {
                visibility: !prevstate.visibility
            }       
        })
    }
    render(){
        return(
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility?'Hide Visibility':'Show Visibility'}
                </button>
                {
                    this.state.visibility && (
                        <div>
                        <p>Hey. These are some details</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))