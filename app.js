var add = require('./Addition.js');
console.log(add.AddNumber(1,2));


var localTutor=require('./NodeTutorial.js');
//localTutor.NodeTutorial();
 
var tut = new localTutor.NodeTutorial();  // Create and save object
tut.pTutor();  // Call function on object

