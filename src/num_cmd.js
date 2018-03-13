var num = 0;

console.log('num_cmd')
setTimeout(()=>console.log('num_cmd:',++num),1000)

exports.num = num;