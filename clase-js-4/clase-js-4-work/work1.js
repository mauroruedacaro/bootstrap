let num1 = prompt('Ingrese primer valor ');
let num2 = prompt('Ingrese segundo valor ');
num1 = parseInt(num1);
num2 = parseInt(num2);


console.log ("numero 1--> ",num1);
console.log ("numero 2--> ",num2);

if (num1 > num2)
{
    console.log ("Número Mayor es --> ",num1, "Numero menor es --> ",num2);
}
else 
{
    console.log ("Número Mayor es --> ",num2);
}