module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) {
    return false;
  }

  let open = {};
  let close = {};
  bracketsConfig.forEach((el) => {
    open[el[0]] = el[1];
    close[el[1]] = el[0];
  })

  let stack = [];
  str.split('').forEach((el) => {
    if (open[el] === close[el]){
      if(el === stack[stack.length - 1]){
        stack.pop();
      } else {
        stack.push(el);
      }
    }
    else if(open[el]){
      stack.push(el);
    }
    else if(close[el]){
      if(close[el] === stack[stack.length - 1]){
        stack.pop();
      } else {
        return false;
      }
    }
  })
  if (stack.length !== 0){
    return false;
  }
  return true;
}
