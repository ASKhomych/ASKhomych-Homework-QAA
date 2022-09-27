"use strict";

// Homework#1

const hamburger = 3;
const fries = 3;

if(hamburger >= 4 && fries){
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
};

// Homework#2

let cost1 = 1100;

if (cost1 >= 1000 && cost1 <= 1900){
    console.log("Це наш діапазон")
} else {
    console.log('Нам не підходить')
};

// Homework#3

let cost2 = 1000;

if (cost2 >= 1000 && cost2 <= 1900){
    console.log("Ціна товару в межах 1000 і 1900")
} else {
    console.log('Ціна за межами 1000 і 1900')
};

let cost3 = 100;

if (cost3 >= 1000 && !cost3 <= 1900){
    console.log("Ціна товару в межах 1000 і 1900")
} else {
    console.log('Ціна за межами 1000 і 1900')
};


// Homework#4

let season = 2;

if (season === 1){
    console.log('Зима')
} else if (season === 2){
    console.log('Весна')
} else if(season === 3){
    console.log('Літо')
} else {
    console.log('Осінь')
}

// Homework#5

let a = 3445,
    b = 4574,
    c = 26335;
if(a > c && a < b || a < c && a > b){
    console.log(a + ' середнє за значенням')
}
else if(b > a && b < c || b < a && b > c){
    console.log(b + ' середнє за значенням')
}
else if(c > a && c < b || c < a && c > b){
    console.log(c + ' середнє за значенням')
}


// Homework#6

let day = 4;

switch(day){
    case 1:
        console.log('ПН')
        break;
    case 2:
        console.log('ВТ')
        break;
    case 3:
        console.log('СР')
        break;
    case 4:
        console.log('ЧТ')
        break;
    case 5:
        console.log('ПТ')
        break;
    case 6:
        console.log('СБ')
        break;
    case 7:
        console.log('НД')
        break; 
}

// Homework#7
// За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

 let example1 = 23;
 let example2 = 2;

 switch('/'){
    case '+':
        console.log(example1 + example2)
        break;
    case '-':
        console.log(example1 - example2)
        break;
    case '*':
        console.log(example1 * example2)
        break;
    case '/':
        console.log(example1 / example2)
        break;
    }

// Homework#8
// Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let text = "regular expression";
text = text[0] + text[2] + text[4] + text[6] + text[9] + text[10] + text[11] + text[13] + text[14] + text[17];
console.log(text);


//Homework#9

let km = 1000;
let meter = 345435;
let calculation = meter / km;
if (calculation > 1){
    console.log(calculation + " кілометри")
}else if(calculation == 1){
    console.log(calculation + " кілометр")
}else if(calculation < 1){
    console.log(calculation + " кілометри")
}
