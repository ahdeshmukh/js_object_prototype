'use strict';

var dog = {name: {first: 'Cable', last: 'Dog'}, breed: 'Lab/Boxer mix'};

Object.defineProperty(dog, 'name', {writable: false});
dog.name.first = 'Cable123';
console.log(dog);