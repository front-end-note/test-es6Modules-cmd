'use strict';

var _num_es = require('./num_es6');

console.log('test_es6');

setTimeout(() => console.log('test_es6_1:', _num_es.num), 1);
setTimeout(() => console.log('test_es6_1500:', _num_es.num), 1500);