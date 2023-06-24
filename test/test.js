/**
 * @param {string[]} ops - List of operations
 * @return {number} - Sum of scores after performing all operations
 */
var calPoints = function(ops) {
    var result = null;
    const record = []
    ops.forEach(( o, i)=>{
      if(!isNaN(o)){
        record.push(o)
      } else if(o==='C'){
        record.pop()
      } else if(o==='D'){
        record.push(record.slice(-1)*2)
      } else if(o==='+'){
        const sum = record.slice(-2).reduce( (a,b) => a + b, 0)
        record.push(sum)
      }
    })
    result = record.reduce((a, b)=> a+b, 0)

return result;
};

var ops = [5, 2, 'C', 'D', '+'];

console.log(calPoints(ops));