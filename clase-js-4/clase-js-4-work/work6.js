let valTip = 0;
let valPayment = parseInt (ValidityState);
valPayment = prompt ("Digite el valor de la cuenta");
let valPercentage = (valPayment <= 800 && valPayment >=100)? 15 : 20;
valTip = (valPayment *valPercentage/100);
valTip = parseInt(valTip);
valPayment = parseInt (valPayment)
console.log ('El valor de la cuenta es --$', valPayment, ' el valor de la propina es --$', valTip, 'la cuenta total es --$', valTip + valPayment);