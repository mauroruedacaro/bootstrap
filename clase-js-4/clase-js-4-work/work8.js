let acumPatriots = 0;
let acumBroncos = 0;
let i = 0;
let msgGanador = '';
let ResPatriots = 0;
let ResBroncos = 0;
let avrgPatriots, avrgBroncos = 0;
let resultMsg = '';

function avrgScore (ResPatriots,ResBroncos,numCount)
{
    acumPatriots = acumPatriots + ResPatriots;
    acumBroncos = acumBroncos + ResBroncos;
    avrgPatriots = (acumPatriots/numCount);
    avrgBroncos = (acumBroncos/numCount);
    return avrgBroncos;
    return avrgPatriots;
}
function defWinner (avrgBroncos,avrgPatriots)
{
    resultMsg = (avrgBroncos > avrgPatriots? `Broncos Ganan ${avrgBroncos} ..vs.. ${avrgPatriots}` : 
    `Patriots Ganan ${avrgPatriots} ..vs .. ${avrgBroncos}`);
    return resultMsg;
}

for ( i = 1; i <= 3; i++) 
{
    ResPatriots = prompt(`Ingrese el resultado ${i} de los Patriots`);
    ResBroncos = prompt(`Ingrese el resultado ${i} de los Broncos`);
    numCount = i;
    ResBroncos = parseInt(ResBroncos);
    ResPatriots = parseInt (ResPatriots);
    avrgScore (ResPatriots,ResBroncos,i);
    // acumPatriots = acumPatriots + ResPatriots;
    // acumBroncos = acumBroncos + ResBroncos;
    // console.log (acumPatriots);
}
defWinner (avrgBroncos,avrgPatriots);
console.log (resultMsg);
document.write (resultMsg);