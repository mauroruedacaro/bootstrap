let score = 20;
console.log (`Marcador --> ${score}`);

const randomNumber = Math.trunc (Math.random() * 20);
secretNumberContainer = document.getElementById('secret-number');
secretNumberContainer.textContent = randomNumber;
const checkBtn = document.querySelector ('#check-Btn');
const reloadBtn = document.querySelector ('#reload-Btn');
const message = document.querySelector ('#hint');

const scoreContainer = document.querySelector ('#score');

checkBtn.addEventListener('click', function() {
    const input = document.querySelector ('#floatingInput');
    const response = input.value;

if (response == randomNumber)
{
    message.textContent=  "Respuesta correcta ✔  ";
    message.classList = 'alert  alert-success';
    // message.classList = 'alert  alert-danger';
    // message.classList = ('otra-clase');
    message.style.backgroundColor = 'blue';
}
else
{
    score = score - 1;
    console.log (score);
    scoreContainer.textContent = score;
    if (response < randomNumber)
    {
        message.textContent ='intenta un númeor más grande ↗';
    }
    else
    {
        message.textContent = 'incorrecto ❌ -- intenta un número más pequeño ';
    }
    
}

if (score==0)
{ 
    message.textContent = '¡¡ PERDISTE !! 🛑';
    message.classList = 'alert alert warning';
    checkBtn.disabled = 'true';
    reloadBtn.style.display = 'inline-block';
    reloadBtn.addEventListener = ('click', function()
    {
        location.reload ()
    });
    // setTimeout(() => {
    //     location.reload ();
    // }, 8000);
}
});