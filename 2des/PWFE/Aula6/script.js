//Timer que eu peguei do google
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = hours + ":" + minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
    var display = document.querySelector('#timer1'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer

    //Botão de salvar do modal
    var btnSalvarTarefa = document.getElementById('btnSalvarTarefa');
    btnSalvarTarefa.addEventListener('click', function() {
        novaTarefa(); // Cria a nova tarefa
        document.getElementById('tarefa').value = ""; // Zera os valores no modal
        document.getElementById('tempo').value = ""; // Zera os valores no modal
    });

    
};


//CRUD
//Declarando o botao de editar e a tbody da tabela
let edit = document.getElementById('editar')
let informacoes = document.getElementById('informacoes');


//CREATE 
function novaTarefa() {
    //Pega os valores do modal
    let tarefa = document.getElementById('tarefa').value;
    let tempo = document.getElementById('tempo').value;

    //Insere na tabela
    informacoes.innerHTML += `
    <tr>
        <td scope="row">${informacoes.rows.length + 1}</th>
        <td>${tarefa}</td>
        <td id="timer${informacoes.rows.length + 1}"></td>
        <td>Em andamento</td>
        <td>
            <button onclick="concluir(this)" id="concluir${informacoes.rows.length + 1}">✔</button>
            <button onclick="update(this)" id="editar${informacoes.rows.length + 1}">✎</button>
            <button onclick="del(this)" id="excluir${informacoes.rows.length + 1}">X</button>
        </td>
    </tr>
 `;

    //Adiciona um novo timer com o id +1 do anterior, se o anterior era timer1, esse será o timer2 e assim em diante contanto que nada seja excluído
    var displayNovo = document.querySelector(`#timer${informacoes.rows.length}`);
    startTimer(tempo * 60, displayNovo);
}

//Update
function update(btn) {
    //Selecionando toda a linha
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    //Deixando as linhas editaveis
    celulas[1].setAttribute('contenteditable', true);  
    celulas[2].setAttribute('contenteditable', true);
    btn.innerHTML = '...'; 

    btn.onclick = function() {
        for (let i = 1; i < celulas.length; i++) {
            celulas[i].removeAttribute('contenteditable'); // Após confirmação as celulas deixam de ser editaveis
        }
        btn.innerHTML = '✎'; // Altera o ícone do botão de volta para o padrão de edição
        btn.onclick = function() {
            update(this); // Restaura a função de edição ao botão
        }
    };
}

function del(botao) {
    var linha = botao.closest('tr'); // Obtém a linha pai do botão clicado
    linha.remove(); // Remove a linha
}

//Firulas

//Deixa toda a linha verde quando clicado e muda o status para concluido
function concluir(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 0; i < celulas.length; i++) {
        celulas[i].style.backgroundColor = "green";
    }
    celulas[3].innerHTML = "Concluída"
}