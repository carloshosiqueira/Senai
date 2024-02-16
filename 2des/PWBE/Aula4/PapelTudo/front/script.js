//Variáveis e constantes
const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const uri = "http://localhost:3000/item";
const produtos = [];
const cadastro = document.getElementById('cadastro');

//"Pegando" dados do back-end
function carregarProdutos() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            produtos.push(...res);
            preencherTabela();
        });
}

//Mostrando os dados do back-end
function preencherTabela() {
    produtos.forEach(prod => {
        dados.innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nome}</td>
                <td>${prod.descricao}</td>
                <td>${prod.valor}</td>
                <td>
                <button onclick="del(${prod.id})"> - </button>
                <button onclick="edit(this)"> * </button>
                </td>
            </tr>
        `;
    });
}

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data= {
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    fetch(uri, {
        method: "POST",
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.sqlMessage == undefined){
            produtos.push(res);
            dados.innerHTML = "";
            preencherTabela();
            cadastro.classList.add("oculto");
            criar.reset();
        }
        else{
            cadastro.classList.add("oculto");
            mensagens(res.sqlMessage, "erro ao cadastrar cliente!")
        }
    });
});

//Atualizar um produto
function atualizar(btn){
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0];
    let data = {
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML
    };
    fetch(uri + '/' + id, {
        method: "PUT",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.sqlMessage == undefined){
           celulas[1].removeAttribute("contenteditable")
           celulas[2].removeAttribute("contenteditable")
           celulas[3].removeAttribute("contenteditable")
           btn.innerHTML = "*";
           btn.setAttribute('onclick', "edit(this)")
        }
        else{
            cadastro.classList.add("oculto");
            mensagens(res.sqlMessage, "Erro ao cadastrar produto!");
        }
    });
}

function del(id){
    mensagens("Realmente deseja excluir este produto?" + '?', 'Excluir produto', id)
}

//Confirmação da exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        });
}

//Transformar as celulas da tabela em celulas editaveis
function edit (btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for(let i = 1; i < celulas.lenght - 2; i++){
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "✔";
    btn.setAttribute('onclick', 'update(this)');
}

function mensagens(msg, titulo, confirma){
    msgs.classList.remove("oculto");
    document.querySelector('#errCod').innerHTML = titulo;
    document.querySelector('#msg').innerHTML = msg
    if(confirma != undefined){
        document.querySelector("#confirma").classList.remove('oculto');
        document.querySelector("#confirma").setAttribute('onclick', `confirmar(${confirma})`);
    }
}