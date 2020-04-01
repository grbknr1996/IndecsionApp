"use strict";

const square = function square(x) { };
//module.exports.handler = (event)=> {};

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

const user = {
    name: 'gourab',
    cities: ['burdwan', 'kolkata', 'durgapur'],
    printPlacesLived () {
        console.log(this.name);
        console.log(this.cities);
        const cityMessages=this.cities.map((city)=>{
            return this.name+' has lived in '+ city;
        })
        return cityMessages;
        // this.cities.forEach( (city)=> {
        //     console.log(this.name + ' has lived in '  + city)
        // })
    }
}
console.log(user.printPlacesLived());
//chllenge
const multiplier={
    numbers:[1,2,3],
    multiplyBy:2,
    multiply(){
        return this.numbers.map((number)=>{return number*this.multiplyBy});
    }
}
console.log(multiplier.multiply());