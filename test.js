var client = require('./index').client

var wrapkend = client('9OgXLVePIbhXZtplwiASlgXqQuNCMgrrQeXOe9ll')

wrapkend('helloWorld', {
	name: 'Foo'
}).then(console.log).catch(console.error)