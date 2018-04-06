import Vue from "vue";
import Message from '@components/Hello'
import $ from 'jquery';


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { Message },
    template: '<Message/>'
})

// A ideia eh criar um arquivo com alguns exemplos de es6, que o babel suporta transpilar para es5.

// Spread Operator
// Ex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function sum(x, y, z) {
   return x + y + z;
}
const numbers = [1, 2, 3];
console.log('Spread operator:', sum(...numbers)); // expected output: 6

// Async Operator
// Ex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(x);
    }, 2000);
});
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log('async function:', v);  // prints 60 after 4 seconds.
});
