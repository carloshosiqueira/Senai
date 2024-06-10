const input = document.querySelector('input'),
    adivinhe = document.querySelector('.adivinhe'),
    checkButton = document.querySelector('button'),
    chancesRestantes = document.querySelector('.chances');

//Ao dar load na página, o input já está selecionado
input.focus();

//Pega um número aleatório entre 1 e 100
let randomNum = Math.floor(Math.random() * 100);

chance = 5;

checkButton.addEventListener('click', () => {
    //Diminui uma chance a cada clique no botão de checar
    chance--;
    //Pega o valor que está no input
    let valorInput = input.value;
    //Verifica se o valor do input é o mesmo que o número aleatório
    if (valorInput == randomNum) {
        //Texto de adivinhe vira parabens, o botão de check é desabilitado
        [adivinhe.textContent, input.disabled] = ["Parabéns", true];
        [checkButton.textContent, adivinhe.style.color] = ["Recomeçar", '#333'];
    } else if (valorInput > randomNum && valorInput < 100) {
    //Checa se o valor do input é maior que o aleatorio e menor que 100
        [adivinhe.textContent, chancesRestantes.textContent] = ["Seu chute é maior", chance];
        adivinhe.style.color = "#333";
    } else if (valorInput < randomNum && valorInput > 0){
    //Checa se o valor do input é menor que o aleatorio e maior que 0
        [adivinhe.textContent, chancesRestantes.textContent] = ["Seu chute é menor", chance];
        adivinhe.style.color = "#333"
    } else {
        //Se o númeor não for valido (não for de 0 a 100)
        [adivinhe.textContent, chancesRestantes.textContent] = ["Seu chute é inválido", chance];
        adivinhe.style.color = "#DE6011"
    }


    //Quando adivinhado na ultima chance está vindo para está parte do código e não para a de parabens por algum motivo
    if(chance == 0){
        [checkButton.textContent, input.disabled, valorInput] = ["Recomeçar", true, ""];
        [adivinhe.textContent, adivinhe.style.color] = ["Você perdeu, o número era " + randomNum, "#DE0611" ]
    }
    if(chance < 0){
        window.location.reload()
    }
});