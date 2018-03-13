var num = 0;

new Array(1000000).fill(1).map((item)=>item)
console.log('num_es6')
setTimeout(()=>console.log('num_es6:',++num),1000)

export {num};