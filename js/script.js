'use strict';

var dog = {name: {first: 'Cable', last: 'Dog'}, breed: 'Lab/Boxer mix'};
Object.defineProperty(dog, 'fullName', {
	get: function() {
		return this.name.first + ' ' + this.name.last;
	},
	set: function(value) {
		var nameParts = value.split(' ');
		this.name.first = nameParts[0];
		this.name.last = nameParts[1];
	}
});
display(dog.fullName);
dog.fullName = 'Muffin Top';
display(dog.fullName);
display(dog.name.first);
display(dog.name.last);