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
const formVender = document.getElementById("formVender");
const formItem = document.getElementById("formItem");


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
                <p class="preco">A negociar</p>
            </div>`
    dados.itens.forEach((item, i) => {
        const model = document.getElementById("model0").cloneNode(true);
        model.setAttribute('id', 'model' + item.id);
        model.querySelector('.tituloCard').innerHTML = item.nome;
        model.querySelector('.descricao').innerHTML = item.descricao;
        model.querySelector('.img').src = item.img == "" ? "../assets/noimage.jpg" : item.img;
        model.querySelector('.preco').innerHTML = `${(item.preco)}`;
        model.querySelector('.vender').setAttribute("onclick", `preencherTotal(${i})`);
        model.querySelector('.excluir').setAttribute("onclick", `excluirItem(${i})`);
        if (usuario.email == undefined) {
            model.querySelector('.vender').classList.add("ocultar");
            model.querySelector('.excluir').classList.add("ocultar");
        } else if (usuario.tipo == "admin") {
            model.querySelector('.excluir').classList.remove("ocultar");
        }
        container.appendChild(model);
    })
    document.getElementById('model0').remove();
}


// Função de excluir os cards
// function excluirCard(indice) {
//     if (confirm(`Confirma a exclusão do card ${indice}?`)) {
//         cards.splice(indice, 1);
//         criarCrards();
//         toast(`Card ${indice} excluído com sucesso!`);
//     }
// }


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
             if (usuario.tipo == "admin") item.classList.remove("ocultar");
             $('#modalLogin').modal('hide');
             preencherCards();
             bemVindo();
             encontrado = true;
         }
     })
     if (!encontrado) alert('Login ou senha inválidos!');
 })

// //Mensagem de bem vindo ao usario no header da tela
// function bemVindo(){
//     if (usuario.email == undefined) logado.classList.add("ocultar");
//     else {
//         nome.innerHTML = `Usuário(a): ${usuario.nome}`;
//         logado.classList.remove("ocultar");
//     }
// }

// //Sair da conta
// function logout(){
//     usuario = {};
//     login.classList.remove("ocultar");
//     salvar.classList.add("oculto");
//     item.classList.add("oculto");
//     sair.classList.add("oculto");
//     preencherCards();
//     bemVindo();
// }

// //cRud - READ
// function preencherTotal(indice){
//     formVender.id.value = dados.itens[indice].id;
//     formVender.preco.value = dados.itens[indice].preco;
//     let quantidade = parseInt(formVender.quantidade.value);
//     let preco = parseFloat(formVender.preco.value);
//     formVender.total.value = (quantidade * preco).toFixed(2);
// }

// formVender.addEventListener("change", () => {
//     let quantidade = parseInt(formVender.quantidade.value);
//     let preco = parseFloat(formVender.preco.value);
//     formVender.total.value = (quantidade * preco).toFixed(2);
// })

// //Crud - CREATE venda
// formVender.addEventListener("submit", e => {
//     e.preventDefault();
//     const venda = {
//         id: dados.vendas[dados.vendas.lenght - 1].id + 1,
//         data: (new Date()).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}),
//         usuario: usuario.id,
//         item: parseInt(formVender.id.value),
//         quantidade: parseInt(formVender.quantidade.value),
//         valorUnitario: parseFloat(formVender.preco.value),
//     }
//     dados.vendas.push(venda);
//     $('#modalVender').modal('hide');
//     alert("Venda registrada com sucesso, não se esqueça de salvar os dados.");
// })

// //cRud - READALL Vendas
// function preencherVendas() {
//     vendas.innerHTML = "";
//     //Listar vendas de hoje
//     const hoje = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
//     const dia = hoje.getDate()
//     const mes = mes.getMonth()
//     const ano = ano.getFullYear()
//     const data = `${ano}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;
//     let total = 0;
//     dados.vendas.forEach(venda => {
//         if (venda.data.slice(0,10) == data){
//             const linha = document.createElement('tr');
//             const data_e_hora = `${venda.data.slice(0, 16)}`;
//             linha.innerHTML = `
//             <td><input type="datetime-local" value="${data_e_hora}" disabled/></td>
//             <td>${getNomeUsuario(venda.usuario)}</td>
//             <td>${getNomeItem(venda.item)}</td>
//             <td>${venda.quantidade}</td>
//             <td>${venda.valorUnitario}</td>
//             <td>${venda.quantidade * venda.valorUnitario}</td>
//             ${usuario.tipo == "admin" ? "<td><button class='excluir' onclick='excluirVenda(" + venda.id + ")'>-</button></td>" : ""}`;
//             vendas.appendChild(linha);
//             total += venda.quantidade * venda.valorUnitario;
//         }
//     })
//     vendas.appendChild(document.createElement('tr')).innerHTML = `<td colspan="5">Total</td><td><h4>R$ ${total.toFixed(2)}</h4></td>`;
// }

// //Crud - CREATE Item
// formItem.addEventListener("submit", e => {
//     e.preventDefault();
//     const item = {
//         id: dados.itens[dados.itens.length - 1].id + 1,
//         nome: formItem.nome.value,
//         descricao: formItem.descricao.value,
//         tipo: formItem.tipo.value,
//         preco: parseFloat(formItem.preco.value),
//         img: formItem.img.value,
//     }
//     dados.itens.push(item);
//     $('#modalItem').modal('hide');
//     alert("Ítem criado com sucesso, não se esqueça de salvar os dados.");
//     preencherCards();
// })

// //CRUD - DELETE Item
// function excluirItem(indice) {
//     if (confirm("Deseja realmente excluir este item?")) {
//         dados.itens.splice(indice, 1);
//         preencherCards();
//     }
// }

// //CRUD - DELETE Venda
// function excluirVenda(id) {
//     if (confirm("Deseja realmente excluir esta venda?")) {
//         dados.vendas.forEach((venda, indice) => {
//             if (venda.id == id) dados.vendas.splice(indice, 1);
//         });
//         preencherVendas();
//     }
// }

// //Funções úteis
// function getNomeUsuario(id) {
//     let nome = "";
//     dados.usuarios.forEach(user => {
//         if (user.id == id) nome = user.nome;
//     });
//     return nome;
// }

// function getNomeItem(id) {
//     let nome = "";
//     dados.itens.forEach(item => {
//         if (item.id == id) nome = item.nome;
//     });
//     return nome;
// }

// //JavaScript pro modal
//     const container = document.querySelector(".container");
//     const novo = document.querySelector("#novo");
//     const formNovo = document.querySelector("#formNovo");
//     const formDetalhes = document.querySelector("#formDetalhes");

//     var cards = [{
//             titulo: "Card1",
//             descricao: "Texto do Card de exemplo"
//         },
//         {
//             titulo: "Card2",
//             descricao: "Texto do Card de exemplo"
//         },
//     ];

//     criarCrards();

//     formNovo.addEventListener("submit", e => {
//         e.preventDefault();
//         cards.push({
//             titulo: formNovo.titulo.value,
//             descricao: formNovo.descricao.value
//         });
//         formNovo.titulo.value = '';
//         formNovo.descricao.value = '';
//         modalNovo.classList.add("oculto");
//         criarCrards();
//         toast(`Novo Card criado!`);
//     });

//     function detalhes(indice) {
//         document.querySelector("#modalDetalhes").classList.remove("oculto");
//         formDetalhes.indice.value = indice;
//         formDetalhes.titulo.value = cards[indice].titulo;
//         formDetalhes.descricao.value = cards[indice].descricao;
//     }

//     formDetalhes.addEventListener("submit", e => {
//         e.preventDefault();
//         cards[formDetalhes.indice.value] = {
//             titulo: formDetalhes.titulo.value,
//             descricao: formDetalhes.descricao.value
//         }
//         modalDetalhes.classList.add("oculto");
//         criarCrards();
//         toast(`Card atualizado com sucesso!`);
//     });

//     function excluir(indice) {
//         if (confirm(`Confirma a exclusão do card ${indice}?`)) {
//             cards.splice(indice, 1);
//             criarCrards();
//             toast(`Card ${indice} excluído com sucesso!`);
//         }
//     }