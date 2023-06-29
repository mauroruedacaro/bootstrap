let valTip, valPayment = 0;
let tips = [];
let totals = [];
valPayment = prompt ("Digite el valor de la cuenta");
calculateTip (valPayment);
valPayment = parseInt (valPayment);


function calculateTip (valPayment)
{
    valTip = parseInt (valTip);
    valTip = (valPayment <= 800 && valPayment >= 100) ? (valTip= valPayment *0.15) : (valTip = valPayment * 0.2);
    return valTip
}

console.log ('Valor de la Propina -->', valTip );
document.write ('Valor de la propina -->', valTip );


let billsHilton  = [75,280,1350];
for (i=0; i<3; i++)
{
    calculateTip (billsHilton[i]);
    tips.push (parseInt(valTip));
    valPayment = parseInt(valPayment);
    valTip = parseInt (valTip);
    totals.push (billsHilton[i]+valTip);
    // console.log (valPayment, valTip,i);
}
console.log ('los valores de cuenta fueron -->', billsHilton );
document.write ('los valores de cuenta fueron -->', billsHilton);

console.log ('los valores de porpina fueron -->', tips );
document.write ('los valores de propina fueron -->', tips );

console.log ('los valores totales fueron -->', totals );
document.write ('los valores totles fueron -->', totals );

