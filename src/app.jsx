import * as React from 'react';
import * as Server from 'react-dom/server';

let Greet = () => <h1>Hello World</h1>;
console.log(Server.renderToString(<Greet />));

console.log('hello world 1');