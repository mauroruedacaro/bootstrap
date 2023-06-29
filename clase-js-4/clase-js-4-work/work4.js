let numMes = prompt('Ingrese el número de mes ');
let numDias = 0;
let msgResult = "";
switch (numMes)
{
    case '1': case '3': case '5': case '7': case '8': case '10': case'31':
        numDias = 31;
        break;
    case '4': case '6': case '9': case '11':
        numDias =30;
        break;
    default:
        numDias = 0;
}
msgResult = "El número de días del mes -->" + numMes, "Son -->" + numDias, "-- días";
console.log ("El número de días del mes -->" , numMes, "Son -->", numDias, "-- días");
// console.log (numMes);
// console.log (numDias);
// console.log (msgResult);

