//Variáveis e constantes
const msg = document.getElementById('msg');
const criar = document.getElementById('criar');
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
    const total = document.getElementById('total');
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
        console.log(prod.id, prod.nome, prod.descricao, prod.valor);
    });
    msg.value = `Tabela preenchida com sucesso`;
    calcular()
}

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data= {
        id: criar.id.value,
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
        }
        else{
            console.log(data.id, data.nome, data.descricao, data.valor)
            msg.value = "Erro ao cadastrar o produto";
        }
    });
});

//Atualizar um produto
function atualizar(btn){
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHMTL;
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
        }
        else{
            msg.value = "Erro ao editar o produto";
            console.log("erro ao editar o produto")
        }
    });
}

function del(id) {
    mostrarItem(id);
}

function mostrarItem(id) {
    // Encontrar o produto na lista pelo ID
    const produto = produtos.find(prod => prod.id === id);
    if (produto) {
        // Exibir os detalhes do produto no modal
        document.getElementById('item').innerHTML = `Detalhes do Produto: <br>
            ID: ${produto.id}<br>
            Nome: ${produto.nome}<br>
            Descrição: ${produto.descricao}<br>
            Valor: ${produto.valor}<br>`;
        
        // Exibir o modal
        const modal = document.querySelector('.modal');
        modal.classList.remove('oculto');

        // Adicionar evento de click no botão de confirmar
        modal.querySelector('button.confirmar').addEventListener('click', function() {
            confirmar(id);
            modal.classList.add('oculto'); // Esconder o modal após a confirmação
        });

        // Adicionar evento de click no botão de cancelar
        modal.querySelector('button.cancelar').addEventListener('click', function() {
            modal.classList.add('oculto'); // Esconder o modal se o usuário cancelar
        });
    } else {
        console.log("Produto não encontrado.");
    }
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
    for(let i = 1; i < celulas.length - 1; i++){
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "✔";
    btn.setAttribute('onclick', 'atualizar(this)');
}

function calcular(){
    const total = document.getElementById("total");
    let patrimonio
    patrimonio = 0;
    produtos.forEach(prod =>{
        patrimonio += prod.valor;
    })
    total.value = "R$   " + patrimonio.toFixed(2);
}

dados.addEventListener('change', e =>{
    e.preventDefault();
    calcular()
})
dados.addEventListener('load', e =>{
    e.preventDefault();
    calcular()
})