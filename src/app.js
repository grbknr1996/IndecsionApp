// import {square} from './utils.js';
// import substract from './utils.js'
// import {add} from './utils.js';
// import {isAdult} from './person';
// import {canDrink} from './person';
// import isSenior from './person';
// console.log('app.js is running!!!');
// console.log(square(4));
// console.log(add(3,4));
// console.log(isAdult(21));
// console.log(canDrink(3));
// console.log(substract(199,1));
// console.log(isSenior(65));

//import validator from 'validator';
//console.log(validator.isEmail('test@gmail.com'))

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css';
import './styles/styles.scss';
// const Layout=(props)=>{
//     return (
//     <div>
//     <p>header</p>
//     {props.children}
//     <p>footer</p>
//     </div>
// );
// }

// ReactDOM.render(<Layout>
//     <div>
//     <h1>Page TIlr</h1>
//     <p>this is my page</p>
//     </div>
//     </Layout>, document.getElementById('app'));

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));










class OldSyntax{
    constructor(){
        this.name='Mike';
        this.getGreeting=this.getGreeting.bind(this)
    }
    getGreeting(){
        return `My name is ${this.name}`;
    }
}
const oldSyntax=new OldSyntax();
const getGreeting=oldSyntax.getGreeting;
console.log(getGreeting());
//new 
class NewSyntax{
    name='Jen';
    getGreeting=()=>{
        return `My name is ${this.name}`
    }
}
const newSyntax=new NewSyntax();
const getGreetingNewSyntax=newSyntax.getGreeting;
console.log(getGreetingNewSyntax());