const notes = require('./notes.js');
// lodash??
// lodash is one of the most used thing by developers where lots of inbuilt functions are available
var _ = require('lodash');
// underscore kyu dia??
// depends on you if you want to keep any variable name
// kuch cheezein bani banayi chalti aa rahi hai and we are using it 
// in maths whenever we assume something, the instant assumption we make is  example: "let the required no. be x"
// similarly, while using lodash we assume it as underscore 

var age = notes.age;
var result = notes.addNumber(age,4);
console.log(age);
console.log('result is ' + result);

// use of lodash
// we have added repetion of values in the data array
// now we have filtered it using lodash "uniq" function
var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];
var filter = _.uniq(data);
console.log(filter);