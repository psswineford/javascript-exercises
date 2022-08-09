const sumAll = function (x, y) {
  let list = [];
  let sum = 0;
  if(x>y) {
    temp = x;
     x = y; 
     y = temp;
  } else if(Math.sign(x) < 0 || Math.sign(y) < 0) {
    return 'ERROR';
  } else if (!Number.isInteger(y) || !Number.isInteger(x)) {
    return 'ERROR';
  }

  for (let i = x; i <= y; i++) {
    list.push(i);
  }

  for (let i = 0; i <= list.length; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
