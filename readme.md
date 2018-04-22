## wrapkend-cli

Official client for  https://wrapkend.com

### Installation

> npm i --save wrapkend-cli
	> yarn add wrapkend-cli

### Client side integration


```javascript
//ES6
import {client as createClient} from 'wrapkend-cli'
const wrapkend = createClient('PROJECT_API_KEY')

//ES5
const wrapkend = require('wrapkend-cli')
.client('PROJECT_API_KEY');

wrapkend('helloWorld',{
		name:'Foo'
	})
	.then(console.log)
	.catch(console.error)
```

#### How it works
The client connects to the wrapkend platform and executes the RPC Function tied to your project. It uses axios library to perform a simple post http call.

### Issues
 > You can open an issue in the github repo
- No important issues were detected so far


