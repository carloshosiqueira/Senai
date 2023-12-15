const abrir = document.getElementById("abrir");
const login = document.getElementById("login");
const salvar = document.getElementById("salvar");
const sair = document.getElementById("sair");
const vendas = document.getElementById("vendas");
const logado = document.getElementById("logado");
const nome = document.getElementById("nome");
const item = document.getElementById("item");
const container = document.querySelector(".produtos");
const formLogin = document.getElementById("formLogin");
const formVenda = document.getElementById("formVenda");
const formItem = document.getElementById("formItem");
const formNovo = document.getElementById("formNovo");
const modalLogin = document.getElementById("modalLogin");
const modalNovo = document.getElementById("modalNovo");
const modalVenda = document.getElementById("modalVenda");
const btnVender = document.querySelector('#btnVender');
const btnExcluir = document.querySelector('#btnExcluir');


var dados = {
    usuarios: [],
    itens: [],
    vendas: []
}

var usuario = {};

//Carregar o arquivo .json

abrir.addEventListener("change", (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        dados = JSON.parse(reader.result);
        abrir.classList.add("ocultar");
        login.classList.remove("ocultar");
        preencherCards()
    }
})

//Fazer o download do arquivo json

function download() {
    if (dados.usuarios.length > 0) {
        let a = document.createElement("a");
        a.href = "data:," + JSON.stringify(dados)
        a.download = "dados.json"
        a.click();
        alert("Dados salvos na pasta padrão de downloads como [dados.json]")
    } else {
        alert("Não há dados para serem salvos")
    }
}

// //CRUD - READALL Produtos
function preencherCards() {
    container.innerHTML = `
            <div id="model0"class=modelo0>
            <div class="tipo">
            <h4 class=tituloCard>Encanador></h4>
            <p class="descricao">Enviaremos um encanador capacitado para arrumar quaisquer problemas
                relacionados à profissão</p>
            </div>
            <img src="../assets/encanador.webp" alt="imagem do serviço" class="img">
            <div class="btn-produto">
                <button class="vender">Vender</button>
                <button class="excluir">Excluir</button>
            </div>
                <p class="preco">Preço</p>
            </div>`
    dados.itens.forEach((item, i) => {
        const model = document.getElementById("model0").cloneNode(true);
        model.setAttribute('id', 'model' + item.id);
        model.querySelector('.tituloCard').innerHTML = item.nome;
        model.querySelector('.descricao').innerHTML = item.descricao;
        model.querySelector('.img').src = item.img == "" ? "../assets/noimage.jpg" : item.img;
        model.querySelector('.preco').innerHTML = `Minimo: R$ ${(item.preco).toFixed(2)}`;
        model.querySelector('.vender').setAttribute("onclick", `preencherTotal(${i}),modalVenda.classList.remove('ocultar')`);
        model.querySelector('.excluir').setAttribute("onclick", `excluirItem(${i})`);
        if (usuario.email == undefined) {
            model.querySelector('.vender').classList.add("ocultar");
            model.querySelector('.excluir').classList.add("ocultar");
        }else if (usuario.tipo == "admin") {
            model.querySelector('.vender').classList.remove("ocultar");
            model.querySelector('.excluir').classList.remove("ocultar");
        }else if (usuario.tipo == "comum"){
            model.querySelector('.vender').classList.remove("ocultar");
            model.querySelector('.excluir').classList.add("ocultar");
        }
        container.appendChild(model);
    })
    document.getElementById('model0').remove();
}

//Entrar no sistema
formLogin.addEventListener('submit', e => {
    e.preventDefault();
    let encontrado = false;
    dados.usuarios.forEach(user => {
        if (user.email == formLogin.email.value && user.senha == formLogin.senha.value) {
            usuario = user;
            login.classList.add("ocultar");
            salvar.classList.remove("ocultar");
            sair.classList.remove("ocultar");
            formLogin.email.value = "";
            formLogin.senha.value = "";
            if (usuario.tipo == "admin") {
                item.classList.remove("ocultar");
                modalLogin.classList.add("ocultar");
            } else {
                item.classList.remove("ocultar");
                modalLogin.classList.add("ocultar");
            }
            console.log(user.tipo, user.email);
            preencherCards();
            bemVindo();
            encontrado = true;
        }
    })
    if (!encontrado) {
        alert('Login ou senha inválidos!');
        formLogin.senha.value = ""
    }
})

// Mensagem de bem vindo ao usario no header da tela
function bemVindo() {
    if (usuario.email == undefined) logado.classList.add("ocultar");
    else {
        nome.innerHTML = `Usuário(a): ${usuario.nome}`;
        logado.classList.remove("ocultar");
    }
}

// Sair da conta
function logout() {
    usuario = {};
    login.classList.remove("ocultar");
    salvar.classList.add("ocultar");
    item.classList.add("ocultar");
    sair.classList.add("ocultar");
    preencherCards();
    bemVindo();
}

// cRud - READ
function preencherTotal(indice) {
    formVenda.id.value = dados.itens[indice].id;
    formVenda.preco.value = dados.itens[indice].preco;
    let quantidade = parseInt(formVenda.quantidade.value);
    let preco = parseFloat(formVenda.preco.value);
    formVenda.total.value = (quantidade * preco).toFixed(2);
}

formVenda.addEventListener("change", () => {
    let quantidade = parseInt(formVenda.quantidade.value);
    let preco = parseFloat(formVenda.preco.value);
    formVenda.total.value = (quantidade * preco).toFixed(2);
})

// Crud - CREATE venda
formVenda.addEventListener("submit", e => {
    e.preventDefault();
    const venda = {
        id: dados.vendas[dados.vendas.length - 1].id + 1,
        data: (new Date()).toISOString(),
        usuario: usuario.id,
        item: parseInt(formVenda.id.value),
        quantidade: parseInt(formVenda.quantidade.value),
        valorUnitario: parseFloat(formVenda.preco.value),
    }
    console.log(formVenda.id.value)
    dados.vendas.push(venda);
    modalVenda.classList.add("ocultar")
    alert("Venda registrada com sucesso, não se esqueça de salvar os dados.");
})

// cRud - READALL Vendas
function preencherVendas() {
    vendas.innerHTML = "";
    //Listar vendas de hoje
    const hoje = new Date();
    const dia = hoje.getDate()
    const mes = hoje.getMonth()
    const ano = hoje.getFullYear()
    const data = `${ano}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;
    let total = 0;
    dados.vendas.forEach(venda => {
        // if (venda.data.slice(0, 10) == data) {
            const linha = document.createElement('tr');
            const data_e_hora = `${venda.data.slice(0, 16)}`;
            console.table([venda.usuario, venda.item, venda.quantidade, venda.valorUnitario])
            vendas.innerHTML += `
              <td><input type="datetime-local" value="${data_e_hora}" disabled></td>
              <td>${getNomeUsuario(venda.usuario)}</td>
              <td>${getNomeItem(venda.item)}</td>
              <td>${venda.quantidade}</td>
              <td>${venda.valorUnitario}</td>
              <td>${(venda.quantidade * venda.valorUnitario).toFixed(2)}</td>
              ${usuario.tipo == "admin" ? "<td style='width:3%'><button class='excluir' onclick='excluirVenda(" + venda.id + ")'>-</button></td>" : ""}`;
            vendas.appendChild(linha);
            total += venda.quantidade * venda.valorUnitario;
        // }
    })
    vendas.appendChild(document.createElement('tr')).innerHTML = `<td colspan="5">Total</td><td><h4>R$ ${total.toFixed(2)}</h4></td>`;

}

// Crud - CREATE Item
formNovo.addEventListener("submit", e => {
    e.preventDefault();
    const item = {
        id: dados.itens[dados.itens.length - 1].id + 1,
        nome: formNovo.tituloCard.value,
        descricao: formNovo.descricao.value,
        preco: parseFloat(formNovo.preco.value),
        img: formNovo.img.value
    }
    dados.itens.push(item);
    modalNovo.classList.add("ocultar");
    alert("Ítem criado com sucesso, não se esqueça de salvar os dados.");
    preencherCards();
})

// CRUD - DELETE Item
function excluirItem(indice) {
    if (confirm("Deseja realmente excluir este item?")) {
        dados.itens.splice(indice, 1);
        preencherCards();
    }
}

//CRUD - DELETE Venda
function excluirVenda(id) {
    if (confirm("Deseja realmente excluir esta venda?")) {
        dados.vendas.forEach((venda, indice) => {
            if (venda.id == id) dados.vendas.splice(indice, 1);
        });
        preencherVendas();
    }
}
//Funções úteis
function getNomeUsuario(id) {
    let nome = "";
    dados.usuarios.forEach(user => {
        if (user.id == id) nome = user.nome;
    });
    return nome;
}
function getNomeItem(id) {
    let nome = "";
    dados.itens.forEach(item => {
        if (item.id == id) nome = item.nome;
    });
    return nome;
}