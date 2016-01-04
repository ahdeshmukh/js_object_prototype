'use strict';

var dog = {name: 'Cable', breed: 'Lab/boxer mix'};
dog.speak = function() {
	display('Bark Bark');
};

display(dog.name);
dog.speak();