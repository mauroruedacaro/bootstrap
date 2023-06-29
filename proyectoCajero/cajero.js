arrayNameCount = ['Mali','Gera','Maury'];
arrarBalanceCount = [10,11,12];
arrayPwd = ['Ene05$','Nov01$','Jul20$'];
document.write ("SELECCIONE LA CUENTA <br>");
for (i=0; i<3;i++)
{
    document.write (`${i+1} Cuenta de ${arrayNameCount[i]} <br>` );
    console.log (`${i+1} Cuenta de ${arrayNameCount[i]} <br>` );
}

const option = readInt ('ingrese la opción 1 al 3');
// if (option > 0 && option <3 )
// {

// }