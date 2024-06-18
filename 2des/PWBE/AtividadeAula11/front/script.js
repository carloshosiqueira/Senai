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
            <td>
                <button onclick="openUpdateModalPt(${pt.id}, '${pt.nome}', ${pt.valor})">Editar</button>
                <button onclick="deletePt(${pt.id})">Excluir</button>
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
            <td>${hotel.avaliacao}</td>
            <td>${hotel.valor.toFixed(2)}</td>
            <td>
                <button onclick="openUpdateModalHotel(${hotel.id}, '${hotel.nome}', ${hotel.avaliacao}, ${hotel.valor})">Editar</button>
                <button onclick="deleteHotel(${hotel.id})">Excluir</button>
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
            <td>${destino.nome}</td>
            <td>${destino.valor.toFixed(2)}</td>
            <td>
                <button onclick="openUpdateModalDestino(${destino.id}, '${destino.nome}', ${destino.valor})">Editar</button>
                <button onclick="deleteDestino(${destino.id})">Excluir</button>
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
    const nome = document.getElementById("destinoNome").value;
    const valor = parseFloat(document.getElementById("destinoValor").value);
    const data  = new Date(document.getElementById("destinoData").value);

    const newDestino = { nome, valor, data };

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
    const avaliacao = parseFloat(document.getElementById("hotelAvaliacao").value);
    const email = document.getElementById("email").value;
    const site = document.getElementById("site").value;
    const valor = parseFloat(document.getElementById("hotelValor").value);
    const destinoId = Number(document.getElementById("destinoId").value);
    const ptId = Number(document.getElementById("ptId").value);

    const newHotel = { nome, avaliacao, email, site, valor, destinoId, ptId };

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

// Atualizar Ponto Turístico
async function updatePt(id) {
    const nome = document.getElementById("updatePtNome").value;
    const valor = parseFloat(document.getElementById("updatePtValor").value);

    const updatedPt = { nome, valor };

    await fetch(`${uriPt}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPt),
    });

    closeModal("updateModalPt");
    loadPt();
}

// Atualizar Destino
async function updateDestino(id) {
    const nome = document.getElementById("updateDestinoNome").value;
    const valor = parseFloat(document.getElementById("updateDestinoValor").value);

    const updatedDestino = { nome, valor };

    await fetch(`${uriD}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDestino),
    });

    closeModal("updateModalDestino");
    loadDestinos();
}

// Atualizar Hotel
async function updateHotel(id) {
    const nome = document.getElementById("updateHotelNome").value;
    const avaliacao = parseFloat(document.getElementById("updateHotelAvaliacao").value);
    const valor = parseFloat(document.getElementById("updateHotelValor").value);

    const updatedHotel = { nome, avaliacao, valor };

    await fetch(`${uriH}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedHotel),
    });

    closeModal("updateModalHotel");
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
