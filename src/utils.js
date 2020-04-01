console.log('utils .js is running');
// module.exports.square=(x)=>{
//     return x*x;
// }
const add= (a,b)=>a+b;
const square=(x) => x*x;
const substract=(a,b)=>a-b;
//export default substract;
// expprt default (a,b)=>a-b
export{
    square,
    add,
    substract as default
}

