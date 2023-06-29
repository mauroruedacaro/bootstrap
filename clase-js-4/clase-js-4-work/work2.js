let acumPatriots = 0;
let acumBroncos = 0;
let i = 0;
let msgGanador = '';

for ( i = 1; i <= 3; i++) 
{
    let ResPatriots = prompt(`Ingrese el resultado ${i} de los Patriots`);
    let ResBroncos = prompt(`Ingrese el resultado ${i} de los Broncos`);
    ResPatriots = parseInt (ResPatriots);
    ResBroncos = parseInt (ResBroncos);
    acumPatriots = acumPatriots + ResPatriots;
    acumBroncos = acumBroncos + ResBroncos;
    // console.log (acumPatriots);
}
acumPatriots = acumPatriots/(i-1);
acumBroncos = acumBroncos/(i-1);
console.log ('Promedio de los Patriots =  ',acumPatriots);
console.log ('Promedio de los Broncos = ',acumBroncos);
// Compara promedios para el ganador
if (acumBroncos > acumPatriots && acumBroncos > 20)
{
    msgGanador = 'Ganador es BRONCOS';
}
if (acumPatriots > acumBroncos && acumPatriots > 20)
{
    msgGanador = 'Ganador es Patriots';
}
if (acumBroncos == acumPatriots && acumBroncos > 30 && acumPatriots > 30)
{
    msgGanador = 'ES EMPATE'
}

if (msgGanador !== '')
{
    console.log (msgGanador);
}
else {
    console.log (" NO HAY GANADOR");
    // console.log (acumBroncos);
    // console.log (acumPatriots);
}
// console.log (' EL MENSAJE ES --->  ',msgGanador);
