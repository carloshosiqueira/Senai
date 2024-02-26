//Variáveis e constantes
const criar = document.getElementById('criar');
const msg = document.getElementById('msg');
const msgs = document.getElementById('msgs');
const dados = document.getElementById('dados');
const uri = "http://localhost:3000/item";
let produtos;

//"Pegando" dados do back-end
async function carregarProdutos(mens) {
    let f = await fetch(uri);
    produtos = await f.json();
    preencherTabela(mens);
}

//Mostrando os dados do back-end
function preencherTabela(mens) {
    dados.innerHTML = "";
    const msg = document.getElementById('msg');
    produtos.forEach(prod => {
        dados.innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nome}</td>
                <td>${prod.descricao}</td>
                <td>${prod.valor.toFixed(2)}</td>
                <td class="botoes">
                <button onclick="del(${prod.id})"> - </button>
                <button onclick="edit(this)"> ✎ </button>
                </td>
            </tr>
        `;
    });
    if (mens) At(true, `Tabela preenchida com sucesso`);
    calcular()
}

criar.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = {
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    let f = await fetch(uri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (f.status == 201) {
        carregarProdutos();
        At(true, "Item registrado com sucesso");
    }
    else {
        At(false, "Erro ao cadastrar o produto");
    }
});

//Atualizar um produto
async function update(btn) {
    let linha = btn.parentNode.parentNode;

    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let data = {
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML
    };
    let f = await fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (f.status == 202) {
        celulas[1].removeAttribute("contenteditable");
        celulas[2].removeAttribute("contenteditable");
        celulas[3].removeAttribute("contenteditable");
        btn.innerHTML = "✎";
        btn.setAttribute('onclick', "edit(this)");
        At(true, "Produto editado com sucesso");
        carregarProdutos();
        calcular();
    }
    else {
        At(false, "Erro ao editar o produto");
    }
}

//Transformar as celulas da tabela em celulas editaveis
function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "✔";
    btn.setAttribute('onclick', 'update(this)');
}

function del(id) {
    mensagens('Deseja realmente excluir o Produto? id = ' + id + '?', 'Excluir Produto', id);
}

//Confirma exclusão
async function confirmar(id) {
    let f = await fetch(`${uri}/${id}`, {
        method: 'DELETE'
    });     
    if (f.status == 204) {
        window.location.reload();
    } else {
       At(false, "Erro ao excluir o item");
    }
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

function calcular() {
    const total = document.getElementById("total");
    let patrimonio = 0;
    produtos.forEach(prod => {
        patrimonio += Number(prod.valor);
    })
    total.value = "R$: " + patrimonio.toFixed(2);
}

function At(sucesso, mens) {
    if (sucesso) {
        msg.style.color = 'green';
    } else {
        msg.style.color = 'red';
    }
    msg.value = mens;
}