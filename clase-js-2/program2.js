const age = Number(prompt ('cual es tu edad ?'));
const birthday = Number(prompt ('mes de nacimiento'));
const live = prompt("Reside enun municipio fronterizo");
const pregnate = prompt("Esta emarazada");
const gestation = Number(prompt("Edad Gestacional"));
// const age30 = Number (prompt ("Es mayor de 30 años"));

// Variables short if
const isAdult = age >= 18;
const isLocateNortFrontier = live.toUpperCase() === "SI";
const isPregnate = pregnate.toUpperCase() === "SI"
const isGestation = gestation >= 9;
const isBirthday = birthday > 6;
// const isAge30 = age30 === "si";


if (isAdult && isLocateNortFrontier) 
{
    document.write ("Puede Vacunarse x condición 1");
    console.log ("puede vacunarse");
}
else
{ 
    if (isAdult && isPregnate && isGestation)
    {
        document.write ("Puede Vacunarse x condición 2");
        console.log ("puede vacunarse");    
    }
    else
    {
        if (age >= 30)
        {
            document.write ("Puede Vacunarse mayor de 30");
            console.log ("puede vacunarse");  
        }
        else 
        {
            document.write ("Negado");
            console.log ("Negado");
        }
    }
}

