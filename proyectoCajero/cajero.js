// var init
let passwd = '';
let stage = '';
index = 0;
countTry = 0;
mountVal = 0;
mountBalance = 0;
arrayNameCount = ['Mali','Gera','Maury'];
arrayBalanceCount = [200,290,67];
arrayPwd = ['Ene05$','Nov01$','Jul20$'];

// funtion validate password
function funCalculate (mountVal,option)
{
    
    switch (option)
    {
        case "CO":
            mountBalance = arrayBalanceCount[index] + mountVal;
            break;
        case "RE":
            mountBalance = arrayBalanceCount[index] - mountVal;
            break;
        case "SA":
            mountBalance = arrayBalanceCount [index];
            break;
        default:
            stage = "NOTOPT";
    }
    if (mountBalance > 9 && mountBalance < 990)
    {
        stage = "OK";
        arrayBalanceCount [index] = mountBalance;
    }
    else
    {
        if (stage != "NOTOPT")
        {
            stage ="INVALID";
        }
    }
    return (stage);
}

// window.location = 'nombre dela pagina';
let message = document.querySelector ('#msgLogin');
const checkBtn = document.querySelector ('#check-Btn');
checkBtn.addEventListener('click', function () {
    for (i=0; i<3;i++)
    {
        const inputName = document.getElementById ('userName').value;
        const inputPass = document.getElementById ('userPassword').value;
        alert (`Este es el ingreso --> ${inputName} ---> Password --> ${inputPass}`);
        if (arrayNameCount[i] == inputName && arrayPwd[i] == inputPass ) 
        {
            index = i;
            message.textContent=  'usuario valido  🔒';
            message.classList = 'alert  alert-success';
            countTry = 1;
            break;
        }
        else 
        {
            message.textContent=  'usuario no existe 🔓  ';
            message.classList = 'alert  alert-success';
        }
    }
if (countTry > 0)
{
    // window.location.href = "transaction.html";
    option = prompt ('Digite tipo transacción: (CO --> Consignar || RE --> Retirar || SA --> Saldo');
    mountVal = prompt ('Ingrese el valor');
    mountVal = parseInt (mountVal);
    funCalculate (mountVal,option); // calculate new balance  and return ak o reyected
    console.log (`Valor de stage --> ${stage}`);
    switch (stage)
    {
        case "OK":
            document.write (`Movimeinto Exitoso, nuevo saldo --> $ ${mountBalance}`);
            break;
        case "INVALID":
            document.write (`Cunenta invalida para movimientos, saldo actual -->$ ${arrayBalanceCount[index]}`);
            break;
        case "NOTOPT":
            document.write (`Opción invalidad --> ${option}`);
            break;
    }
}
})
