// Solicitamos datos por consola
const weight = prompt ('Por favor ingresar su peso en Kg eje 64');
const tall = prompt ('Por favor ingresar su altura en metros ej. 1.65');
// Calculo el IMM = height/tall*tall
let immR = 0;
immR = weight/tall**2;
const personState = {
    personH: weight,
    personT: tall,
    personI: immR,
}; 
// Colocamso en string lo smensajes a mostrar
titleMsgW = 'El peso ingresado es:  -->';
titleMsgK = "kgms ----> ";
titleMsgT = "La altura ingresada es: --> ";
titleMsgI = "Su Indice de Masa Muscular es -->";
// Mostramos rsultados
console.log ('Mostrar console --> Peso ',weight,'Altura--> ', tall, 'Indice = ',immR );
document.write ( "Mostrando resultados <br> " ) 
document.write (titleMsgW + weight + titleMsgK + " x  <br>");
document.write  (titleMsgT + tall + " mts <br>");
document.write (titleMsgI + immR);


