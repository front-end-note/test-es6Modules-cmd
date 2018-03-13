const {num} = require('./num_cmd');
console.log('test_cmd')

setTimeout(()=>console.log('test_cmd_1:',num),1)
setTimeout( () => console.log('test_cmd_1500:',num),1500)