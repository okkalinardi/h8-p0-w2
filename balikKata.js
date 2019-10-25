//Logic Challenge - Balik Kata
function balikKata(str){
    var balik='';
    for(i=str.length-1; i >=0; i--){
        balik += str[i]
    }
    return balik
}
 
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));


//atau

function balikKata(str) {
    var a = str.split('');
    var b = a.reverse();
    var c = a.join('');
    return c;
}
 
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));