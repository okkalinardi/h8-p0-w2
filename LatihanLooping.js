//1. Melakukan Looping Menggunakan While
//LOOPING PERTAMA
var no = 1
while(no<=20){
    if(no % 2 ==0){
        console.log(no+' - I love coding');
    }
    no++;
}

//LOOPING KEDUA
var nu = 20
while(nu>=1){
    if(nu % 2 ==0){
        console.log(nu+' - I will become fullstack developer');
    }
    nu--;
}


//2. Melakukan Looping Menggunakan For
//LOOPING PERTAMA
for(var a=1; a<=20; a++){
    console.log(a+' - I love coding')
}

//LOOPING KEDUA
for(var a=20; a>=1; a--){
    console.log(a+' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
//Part 1
var angka = 1
while(angka<=100){
        if(angka % 2 ==0){
            console.log(angka+' Genap');
        }else{
            console.log(angka+' Ganjil'); 
        }
        angka++;
    }

//Part 2
var angka = 1
while(angka<=100){
        if(angka % 3 ==0){
            console.log(angka+' 3 kelipatan 3');
        }else{
            console.log(angka); 
        }
        angka+=2;
    }


//Part 3
var angka = 1
while(angka<=100){
        if(angka % 6 ==0){
            console.log(angka+' 6 Kelipatan 6');
        }else{
            console.log(angka); 
        }
        angka+=5;
    }


//part 4
var angka = 1
while(angka<=100){
        if(angka % 10 ==0){
            console.log(angka+' 10 Kelipatan 10');
        }else{
            console.log(angka); 
        }
        angka+=9;
    }
