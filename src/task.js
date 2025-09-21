const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// 1.Map
// Array.prototype.myMap = function(cb){
//     const result = [];
//     for(let i = 0; i < this.length; i++){
//         result.push(cb(this[i], i));
//     }
//     return result
// }

// const numMap = numbers.myMap((itm) => {
//     return itm;
// });

// console.log(numMap);

// 2.Filter
// Array.prototype.myFilter = function (cb) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// const num_filter = numbers.filter(function (itm) {
//   return itm % 2 == 0;
// });
// console.log(num_filter);

// 3.Some
// Array.prototype.mySome = function(cb){
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i], i)){
//             return true;
//         }
//     }
//     return false;
// }

// const positive = numbers.mySome((itm) => itm > 5);
// console.log(positive);

// const negative = numbers.mySome((itm) => itm > 10);
// console.log(negative);

// 4.Reducega tushinmadim ChatGPTdan kochirishga vijdonim yol qoymadi :|

// 5.Every
// Array.prototype.myEvery = function(cb){
//     for(let i = 0; i < this.length; i++) {
//         if(!cb(this[i], i)){
//             return false;
//         }
//     }
//     return true;
// }

// const everyNum = numbers.myEvery((itm) => itm < 5)
// console.log(everyNum);

// 6.Find
// const numbers2 = [30, 20, 45, 65, 70]
// Array.prototype.myFind = function(cb){
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i], i)){
//             return this[i];
            
//         }
//     }
//     return undefined;
// }

// const findNum = numbers2.find((itm) => itm > 40);
// console.log(findNum);