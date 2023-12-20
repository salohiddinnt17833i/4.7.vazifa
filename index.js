
// 1 masala: Sonlardan tashkil topgan massaiv elementlari orasian toqlarining sonnini toping

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function arrayNumbersFunction(arg) {
//     let counter = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             counter = counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(arrayNumbersFunction(arrayNumbers));

//  2 Masala: Sonlardan tashkil topgan massiv elementlari 3 ga hamda 7 ga karralilarining kopaytmasini topuvchi funksiya

// let arrayNumbers = [10, 21, 42, 64]
// function arrayNumbersFunction(arg) {
//     let sum = 1;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 3 == 0 && arg[i] % 7 == 0) {
//             sum = sum * arg[i];
//         }
//     }
//     return sum;
// }
// console.log(arrayNumbersFunction(arrayNumbers));


//  3 masala: Sonlardan iborat massiv berilganda uning toq sonlaridan iborat yangi massiv hosil qilinadigan funsiyae

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArrayNumbers = [];

// function addArraynumbers(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             newArrayNumbers.push(arg[i]);
//         }
//     }
//     return newArrayNumbers;
// }
// console.log(addArraynumbers(arrayNumbers));



//  4 masala: Sonlardan iborat massiv berilganda uning juft indeksidagi elementlaridan tashkil topgan yangi massiv hosil

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// function addArraynumbers(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0) {
//             newArray.push(arg[i]);
//         }
//     }
//     return newArray;
// }
// console.log(addArraynumbers(arrayNumbers));

//  5 masala: 




//  6 masala sonlardan tashkil atpgan massiv berilgan uning massiv orasidagi tub sonlar soni toping

// let numbersArray = [1, 2, 3, 5, 5, 6, 7, 8, 9, 11, 13, 17, 19]

// function tubNumbers(arg){
//     let counter = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             counter++
//             if (counter == 2) {
//                 return arg[i]
//             }        
//         }

//     }
// }
// console.log(tubNumbers(numbersArray));



//  7 masala: sonlardan tashkil topgan massiv berilganda uning jyuft hamda 5 ga karrali sonlaridan iborat yangi masssa hoslil qiling
// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25]
// let newArray = []

// function newArrayNumbers(arg) {
//     for (let i = 0; i < arg.length; i++) {  
//         if (arg[i] % 2 == 0 && arg[i] % 5 == 0) {
//             newArray.push(arg[i])
//         }
//     }
//     return newArray
// }
// console.log(newArrayNumbers(arrayNumbers));
