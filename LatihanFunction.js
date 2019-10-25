//Tugas 1
function shoutOut(){
    return 'Halo Function!';
}

console.log(shoutOut())

//Tugas 2
function calculateMultiply(a,b){
    return a*b;
}

var num1 = 5;
var num2 = 6;
var hasilperkalian = calculateMultiply(num1,num2);
console.log(hasilperkalian);

//Tugas 3
function processSentence(z,y,x,w){
    return 'Nama saya '+z+', umur saya '+y+' tahun, alamat saya di '+x+', dan saya punya hobby yaitu '+w+'!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);