module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = {};

  for (let [open, close] of bracketsConfig) {
    bracketsMap[close] = open;
  }
  for (let char of str) {
    if (bracketsMap[char] === char) {
      if(stack.length > 0 && stack[stack.length - 1] === char){
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if(Object.values(bracketsMap).includes(char)){
      stack.push(char);
    }
    else if(bracketsMap[char]){
      if(stack.pop() !== bracketsMap[char]){
        return false;
      }
    }
  }

  return stack.length === 0;

};
