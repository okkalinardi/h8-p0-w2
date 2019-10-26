//1. Menyusun Barisan Bintang
var rows1 = 5;
var row1 = 0;
while(rows1 > 0) {
  row1 += rows1;
  rows1--;
  console.log('*')
}
//Atau
var row1 = 0;
for(var rows1 = 5; rows1 > 0; rows1--) {
  row1 += rows1;
  console.log('*');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 0;
var ast = '*';
for(var rows2 = 5; rows2 > 0; rows2--) {
  row2 += rows2;
  for(var rows2 = 5; rows2 > 0; rows2--){
  console.log(ast.repeat(row2));
  }
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 0;
var ast = '*';
for(var rows3 = 5; rows3 > 0; rows3--) {
  for(var rows3 = 5; rows3 > 0; rows3--){
  row3 ++;
  console.log(ast.repeat(row3));
  }
}