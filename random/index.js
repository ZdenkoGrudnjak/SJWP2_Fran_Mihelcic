import randomColor from 'randomcolor';
import names from 'starwars-names';

var randomName = names.random();
var color = randomColor();

console.log(`My name is ${randomName} my favorit color ${color}`);