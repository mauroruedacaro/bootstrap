let opcSigno = prompt('Ingrese el signo + o - ');
let num1 = prompt('Ingrese primer valor ');
let num2 = prompt('Ingrese segundo valor ');
let resultado = 0;
num1 = parseInt (num1);
num2 = parseInt (num2);
switch (opcSigno)
{
    case '+':
        resultado = num1 + num2;
        console.log ('los números ',num1,' y ',num2, ' suman -->', resultado);
        break;
    case '-':
        resultado = num1 - num2;
        console.log ('los números ',num1,' y ',num2, ' restan -->', resultado);
        break;
}
