// this is completely based on learning for javascript
// functions like callback
// refer server1.js file for learning fs and os modules

// function add(a,b){
//     return (a + b);
// }

// var add = function(a,b){
//     return a+ b;
// }

// var add = (a,b)=>{
//     return a+b;
// }
// var add =(a,b) =>a+b;
// var result = add(2,9);
// console.log(result);

// (function(){
//     console.log("leima");
// })();

// callback function
// function callback(){
//     console.log('I have called a callback function now');
// }
// const add = function(a,b,callback){
//     var result = a+ b;
//     console.log('result: ' +result);
//     callback();
// }
// add(3,4,callback)

// OR we can also do this way in short
const add = function(a,b,leima){
    var result = a+ b;
    console.log('result: ' +result);
    leima();
}
// add(2, 6, function(){
//     console.log('successfully called callback function');
// });

// we generally use this one as it is handy to use
add(2,8, ()=>console.log('sucessfully called callback function'));