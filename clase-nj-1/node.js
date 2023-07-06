// console.log ('Hola mundo usando js')
// function sum (a,b) {
//     return a+b;
// }
// function sub (a,b) {
//     return a-b;
// }
// function mul (a,b) {
//     return a*b;
// }
// function div(a,b) {
//     if (b=== 0) {
//         console.log ('no se puede dividir or cero')
//     }
//     else {
//         return a/b;
//     }
// }
const math = require ('./math');
console.log (math.sum(1,5));
console.log (math.div (4,0));
