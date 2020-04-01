console.log('App is running')
// //JSX -javascript XML
//if statements
//ternary
//logical and operator

//only render the subtitle and p tag if subtitle exist--&&
//render new p tag - if options.length>0 "here are your options" else "no options"
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
}
const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    //console.log('form submitted')
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
}
const onremoveAll=()=>{
    app.options=[];
    render();
}
const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    alert(option);
}
//create remove All button above list
//on click -> wipe the array ->rerender

//console.log(templateTwo);
const appRoot = document.getElementById("app");

const render=()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle)&&(<p>{app.subtitle}</p>)}
            <p>{app.options.length>0?'here are your options':'No options'}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onremoveAll}>Remove All</button>
            <ol>
               {app.options.map((option)=>{
                   return <li key={option}>{option}</li>
               })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();
