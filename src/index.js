import {sum2} from './sum2';
const sum = require('./sum').sum;
console.log("Hello World");
console.log(sum(2,3));
console.log(sum2(2,3));

let heading = document.querySelector('#demo');
let sumValue = sum(1, 10);

heading.textContent = `Wynik to: ${sumValue}`;
