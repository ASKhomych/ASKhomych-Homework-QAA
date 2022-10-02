"use strict";

// Homework#1
const someFirst = () => {
console.log("Hello world")
}
someFirst();

// // Homework#2
const someFirst1 = () => {
    console.log("Hello world")
    }
    setTimeout(someFirst1, 5000);

    // Homework#3
    
    let newParam = {
        name: 'Andrii',
        surname: 'Khomych',
        favoriteNumber: 22,
    }    
    
    function thefirst3(param1) {
        param1.age = 10;
        console.log(`My name is  ${newParam.name} ${newParam.surname}, I'm ${param1.age} years old and my favorite number is ${newParam.favoriteNumber}`)
    }

    thefirst3(newParam);

    // Homework#4

    let first4 = [1, 'start', true, 2];

    let first5 = (param2) => {
        return param2.map((value) => {
            if (typeof value === 'number') {
                return 'string';
            }

            return value;
        });

    }

    let result = first5(first4);
    console.log(result)

// Homework#5
    function myFn() {
        setTimeout(function(){
            console.log('hello from myFn')

        },2000)
     }
     myFn()

// Homework#6 

const cars = [
    car1 = {cardBrand: 'Toyota', price: 1000, isAvailableForSale: true},
    car2 = {carcardBrand: 'Peugeot', price: 2000, isAvailableForSale: true},
    car3 = {cardBrand: 'Ford', price: 3000, isAvailableForSale: false},
] 

let newCars = (data) => {
    data.cars = {cardBrand: 'Citroeo', price: 4000, isAvailableForSale: true},
    console.log(cars)
}

newCars(cars);

// Homework#7

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
 }

 let newKeys = (data1) => {
    Object.keys(data1).map (function (key, value) {
        if( key === 'key3' || key === 'key10') 
        {console.log(key + ": " + data1[key])}})
   
 }

newKeys(myObject)

// Homework#8

    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]

 function findProductById (id, products) {
    let returnValue = 'undefined';
    products.map ((key, value) => {
        if(key.productId === id) {
            returnValue = key.name;
        }
    }) 
    console.log(returnValue) 
}
 findProductById(1357667, products)

 // Homework#9

 const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]
    
    function arraySortInfo(inputArray){
        let isAscending = false;
        let isDescending = false;
          
        for(let i = 0; i < inputArray.length-1; i++){
          if(typeof inputArray[i] !== "number" || typeof inputArray[i+1] !== "number") {
            return "Один з елементів массиву не являється числом";
          }
          if(inputArray[i] < inputArray[i+1]) {isAscending = true;}
          else if(inputArray[i] > inputArray[i+1]) {isDescending = true;}
        }
        
        if (isAscending && isDescending) {
          return "Масив не відсортований";
        } else if (isDescending){
          return "Масив відсортований за спаданням";
        } else if (isAscending) {
          return "Масив відсортований за зростанням";
        } else {
          return "Масив не відсортований";
        }
      }

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */
