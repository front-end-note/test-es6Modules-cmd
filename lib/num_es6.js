'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var num = 0;

new Array(1000000).fill(1).map(item => item);
console.log('num_es6');
setTimeout(() => console.log('num_es6:', exports.num = num += 1), 1000);

exports.num = num;