const { error } = require("console");

const gs = requiere ('fs/promises');
// fs.writeFile ('./text1.css', 'linea de codigo Node.1', function (error) {
//     if (error){
//         console.log (error)
//     }
//     else {
//         console.log ('archivo creado')
//     }
// })
// console.log ('ultima línea de codigo')

fs.writeFile ('./text1.css', 'linea de codigo Node.1')
    .then (() => {console.log ('archivo creado')});
    .catch (err) {=> {console.log (error)});
    if (error){
        console.log (error)
    }
    else {
        console.log ('archivo creado')
    }

console.log ('ultima línea de codigo')