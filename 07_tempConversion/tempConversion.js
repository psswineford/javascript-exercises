const ftoc = function(fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5/9;
  return Math.round(fToCel * 10) / 10
    ;
};

const ctof = function(celsius) {
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  return Math.round(cToFahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
