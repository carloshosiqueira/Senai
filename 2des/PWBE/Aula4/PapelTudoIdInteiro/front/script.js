//Variáveis e constantes
const criar = document.getElementById('criar');
const msg = document.getElementById('msg');
const msgs = document.getElementById('msgs');
const dados = document.getElementById('dados');
const uri = "http://localhost:3000/item";
const produtos = [];

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
    const msg = document.getElementById('msg');
    produtos.forEach(prod => {
        dados.innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nome}</td>
                <td>${prod.descricao}</td>
                <td>${prod.valor}</td>
                <td class="botoes">
                <button onclick="del(${prod.id})"> - </button>
                <button onclick="edit(this)"> * </button>
                </td>
            </tr>
        `;
    });
    msg.value = `Tabela preenchida com sucesso`;
    calcular()
}

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data= {
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    fetch("http://localhost:3000/item", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.sqlMessage == undefined){
            produtos.push(res);
            dados.innerHTML = "";
            preencherTabela();
            criar.reset();
            msg.value = "Item registrado com sucesso"
            calcular();
        }
        else{
            msg.value = "Erro ao cadastrar o produto";
            mensagens(res.sqlMessage, 'Erro ao cadastrar produto!');
        }
    });
});

//Atualizar um produto
function update(btn){
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let data = {    
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML
    };
    fetch(uri + '/' + id , {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
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
           msg.value = "Produto editado"
        }
        else{
            msg.value = "Erro ao editar o produto";
            mensagens(res.sqlMessage, 'Erro ao atualizar produto!');
        }
    });
}

function del(id) {
    mensagens('Deseja realmente excluir o cliente id = ' + id + '?', 'Excluir cliente', id);
}

//Confirma exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        });
}

function mensagens(msg, titulo, confirma) {
    msgs.classList.remove('oculto');
    document.querySelector('#errTit').innerHTML = titulo;
    document.querySelector('#msg').innerHTML = msg;
    if (confirma != undefined) {
        document.querySelector('#confirma').classList.remove('oculto');
        document.querySelector('#confirma').setAttribute("onclick", `confirmar(${confirma})`);
    }
}

//Transformar as celulas da tabela em celulas editaveis
function edit (btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for(let i = 1; i < celulas.length - 2; i++){
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "✔";
    btn.setAttribute('onclick', 'update(this)');
}

function calcular(){
    const total = document.getElementById("total");
    let patrimonio
    patrimonio = 0;
    produtos.forEach(prod =>{
        patrimonio += prod.valor;
    })
    total.value = "R$   " + patrimonio;
}