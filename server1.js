var fs = require('fs');
var os = require('os');
// these are fs and os module available in nodejs documentation
// there are many in built functions

var user = os.userInfo();
console.log(user);
fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n',()=>{
    console.log('file is created');
})