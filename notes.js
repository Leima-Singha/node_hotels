//here in backend, files are linked with server.js js file 
// notes.js is linked to server2.js file
//now for our understanding let us link the notes.js with server1.js file
console.log("Notes pages loaded");

//when we write in terminal node server2.js and enter
// we get the output written inside the console.log of notes.js

// now in the below example of age we have to export it properly then only we get the output
var age = 23;
const addNumber = function(a, b){
    return a + b;
}
module.exports = {
    age,
    addNumber
}