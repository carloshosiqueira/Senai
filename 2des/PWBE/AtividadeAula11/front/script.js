const opcoes = document.getElementById("opcoes");
const destinoDados = document.getElementById("destinoDados");
const hotelDados = document.getElementById("hotelDados");
const ptDados = document.getElementById("ptDados");

const uriPt = "http://localhost:3000/turisticos";
const uriD = "http://localhost:3000/destinos";
const uriH = "http://localhost:3000/hoteis";

let pt;
let destinos;
let hoteis;

// Carregar os pontos turísticos
async function loadPt() {
    let f = await fetch(uriPt);
    pt = await f.json();
    preencherPt();
}

async function loadDestinos() {
    let f = await fetch(uriD);
    destinos = await f.json();
    preencherDestinos();
}

async function loadHoteis() {
    let f = await fetch(uriH);
    hoteis = await f.json();
    preencherHoteis();
}

function preencherPt() {
    ptDados.innerHTML = "";

    pt.forEach(pt => {
        ptDados.innerHTML += `
        <tr>
            <td>${pt.id}</td>
            <td>${pt.nome}</td>
            <td>${pt.endereco}</td>
            <td>${pt.valor.toFixed(2)}</td>
            <td>${pt.telefone}</td>
            <td class="acoes">
                <button class="editar" onclick="editPt(this)">Editar</button>
                <button class="excluir" onclick="deletePt(${pt.id})">Excluir</button>
            </td>
        </tr>
        `;
    });
}

function preencherHoteis() {
    hotelDados.innerHTML = "";

    hoteis.forEach(hotel => {
        hotelDados.innerHTML += `
        <tr>
            <td>${hotel.id}</td>
            <td>${hotel.nome}</td>
            <td>${hotel.valor.toFixed(2)}</td>
            <td>${hotel.avaliacao}</td>
            <td>${hotel.email}</td>
            <td>${hotel.site}</td>
            <td>${hotel.destinoId}</td>
            <td class="acoes">
                <button class="editar" onclick="editHotel(this)">Editar</button>
                <button class="excluir" onclick="deleteHotel(${hotel.id})">Excluir</button>
            </td>
        </tr>
        `;
    });
}

function preencherDestinos() {
    destinoDados.innerHTML = "";

    destinos.forEach(destino => {
        destinoDados.innerHTML += `
        <tr>
            <td>${destino.id}</td>
            <td>${destino.cidade}</td>
            <td>${destino.valor.toFixed(2)}</td>
            <td>${destino.data.split("T")[0]}
            <td class="acoes">
                <button class="editar" onclick="edit(this)">Editar</button>
                <button class="excluir" onclick="deleteDestino(${destino.id})">Excluir</button>
            </td>
        </tr>
        `;
    });
}

// COISAS RELACIONADAS AOS MODAIS

// Abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Fechar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Criar novo Ponto Turístico
async function createPt() {
    const nome = document.getElementById("ptNome").value;
    const endereco = document.getElementById("ptEndereco").value;
    const telefone = document.getElementById("ptTelefone").value;
    const valor = parseFloat(document.getElementById("ptValor").value);
    const destinoId = Number(document.getElementById("ptDestino").value);

    const newPt = { nome, valor, endereco, telefone, destinoId };

    await fetch(uriPt, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPt),
    });

    closeModal("modalPt");
    loadPt();
}

// Criar novo Destino
async function createDestino() {
    const cidade = document.getElementById("destinoNome").value;
    const valor = parseFloat(document.getElementById("destinoValor").value);
    const data  = new Date(document.getElementById("destinoData").value);

    const newDestino = { cidade, valor, data };

    await fetch(uriD, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newDestino),
    });

    closeModal("modalDestino");
    loadDestinos(); 
}

// Criar novo Hotel
async function createHotel() {
    const nome = document.getElementById("hotelNome").value;
    const avaliacao = parseInt(document.getElementById("hotelAvaliacao").value);
    const email = document.getElementById("email").value;
    const site = document.getElementById("site").value;
    const valor = parseFloat(document.getElementById("hotelValor").value);
    const destinoId = Number(document.getElementById("destinoId").value);

    const newHotel = { nome, valor, avaliacao, email, site, destinoId};
    await fetch(uriH, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newHotel),
    });

    closeModal("modalHotel");
    loadHoteis();
}

// Excluir Ponto Turístico
async function deletePt(id) {
    await fetch(`${uriPt}/${id}`, {
        method: "DELETE",
    });

    loadPt();
}

// Excluir Destino
async function deleteDestino(id) {
    await fetch(`${uriD}/${id}`, {
        method: "DELETE",
    });

    loadDestinos();
}

// Excluir Hotel
async function deleteHotel(id) {
    await fetch(`${uriH}/${id}`, {
        method: "DELETE",
    });

    loadHoteis();
}

//Atualizar destinos
async function updateDestino(btn) {
    let linha = btn.parentNode.parentNode;

    let celulas = linha.cells;
    let id = parseInt(celulas[0].innerHTML);
    let data = {
        cidade: celulas[1].innerHTML,
        valor: parseFloat(celulas[2].innerHTML),
        data: new Date(celulas[3].innerHTML)
    };
    let f = await fetch(`${uriD}/${id}`, {
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
        btn.innerHTML = "Editar";
        btn.setAttribute('onclick', "edit(this)");
        loadDestinos();
    }
}

function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "Confirmar";
    btn.setAttribute('onclick', 'updateDestino(this)');
}

//Atualizar Pontos turísticos
async function updatePt(btn) {
    let linha = btn.parentNode.parentNode;

    let celulas = linha.cells;
    let id = parseInt(celulas[0].innerHTML);
    let data = {
        nome: celulas[1].innerHTML,
        endereco: celulas[2].innerHTML,
        valor: parseFloat(celulas[3].innerHTML),
        telefone: celulas[4].innerHTML
    };
    let f = await fetch(`${uriPt}/${id}`, {
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
        celulas[4].removeAttribute("contenteditable");
        btn.innerHTML = "Editar";
        btn.setAttribute('onclick', "editPt(this)");
        loadPt();
    }
}

function editPt(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "Confirmar";
    btn.setAttribute('onclick', 'updatePt(this)');
}

//Atualizar destinos
async function updateHotel(btn) {
    let linha = btn.parentNode.parentNode;

    let celulas = linha.cells;
    let id = parseInt(celulas[0].innerHTML);
    let data = {
        nome: celulas[1].innerHTML,
        valor: parseFloat(celulas[2].innerHTML),
        avaliacao: parseInt(celulas[3].innerHTML),
        email: celulas[4].innerHTML,
        site: celulas[5].innerHTML,
        destinoId: parseInt(celulas[6].innerHTML)
    };
    let f = await fetch(`${uriH}/${id}`, {
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
        celulas[4].removeAttribute("contenteditable");
        celulas[5].removeAttribute("contenteditable");
        celulas[6].removeAttribute("contenteditable");
        btn.innerHTML = "Editar";
        btn.setAttribute('onclick', "editHotel(this)");
        loadDestinos();
    }
}

function editHotel(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute("contenteditable", 'true')
    }
    btn.innerHTML = "Confirmar";
    btn.setAttribute('onclick', 'updateHotel(this)');
}