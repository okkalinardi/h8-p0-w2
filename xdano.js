//Logic Challenge - X dan O

function xo(str) {
    var hurufo = 'o';
    var hurufx = 'x';
    var counto =0;
    var countx =0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === hurufo) {
        counto++;
      }}
    for (var j = 0; j < str.length; j++) {
        if (str[j] === hurufx){
        countx++;
      }}
    if (counto==countx){
      return true
    }else if (counto!=countx){
      return false
    }
}

  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
