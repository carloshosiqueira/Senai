const opcoes = document.getElementById("opcoes");
const destinoDados = document.getElementById("destinoDados");
const hotelDados = document.getElementById("hotelDados");
const ptDados = document.getElementById("ptDados");

const uriPt = "http://localhost:3000/turistico";
const uriD = "http://localhost:3000/destinos";
const uriH = "http://localhost:3000/hoteis";

let pt;
let destinos;
let hoteis;

// Carregar os pontos turísticos
async function loadPt() {
    let f = await fetch(uriPt)
    pt = await f.json();
    preencherPt()
}

async function loadDestinos() {
    let f = await fetch(uriD)
    destinos = await f.json();
    preencherDestinos()
}

async function loadHoteis() {
    let f = await fetch(uriH)
    hoteis = await f.json();
    preencherHoteis()
}

function preencherPt() {
    ptDados.innerHTML = ""

    pt.forEach(pt => {
        ptDados.innerHTML += `
        <tr>
            <td>${pt.id}</td>
            <td>${pt.nome}</td>
            <td>${pt.endereco}</td>
            <td>${pt.valor.toFixed(2)}</td>
            <td>${pt.telefone}</td>
        </tr>
        `
    });
}

function preencherHoteis() {
    hotelDados.innerHTML = ""

    hoteis.forEach(hoteis => {
        hotelDados.innerHTML += `
        <tr>
            <td>${hoteis.id}</td>
            <td>${hoteis.nome}</td>
            <td>${hoteis.avaliacao}</td>
            <td>${hoteis.valor.toFixed(2)}</td>
        </tr>
        `
    });
}
function preencherDestinos() {

    destinoDados.innerHTML = ""

    destinos.forEach(destinos => {
        destinoDados.innerHTML += `
        <tr>
            <td>${destinos.id}</td>
            <td>${destinos.nome}</td>
            <td>${destinos.valor.toFixed(2)}</td>
        </tr>
        `
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
  
    const newDestino = { nome, valor };
  
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
    const valor = parseFloat(document.getElementById("hotelValor").value);
    const avaliacao = parseFloat(document.getElementById("hotelAvaliacao").value);
    const email= (document.getElementById("email").value);
    const site = (document.getElementById("site").value);
    const destinoId = parseInt(document.getElementById("destinoId").value);
    const pontosTuristicos = parseFloat(document.getElementById("ptId").value);
  
    const newHotel = { nome,valor, avaliacao, destinoId, pontosTuristicos };
    console.log(newHotel);
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
  async function updatePt(id, newName, newValue) {
    const updatedPt = { nome: newName, valor: newValue };
  
    await fetch(`${uriPt}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPt),
    });
  
    loadPt();
  }
  
  // Atualizar Destino
  async function updateDestino(id, newName, newValue) {
    const updatedDestino = { nome: newName, valor: newValue };
  
    await fetch(`${uriD}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDestino),
    });
  
    loadDestinos();
  }
  
  // Atualizar Hotel
  async function updateHotel(id, newName, newAvaliacao, newValue) {
    const updatedHotel = { nome: newName, avaliacao: newAvaliacao, valor: newValue };
  
    await fetch(`${uriH}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedHotel),
    });
  
    loadHoteis();
  }
  
  // Remover Ponto Turístico
  async function deletePt(id) {
    await fetch(`${uriPt}/${id}`, {
      method: "DELETE",
    });
  
    loadPt();
  }
  
  // Remover Destino
  async function deleteDestino(id) {
    await fetch(`${uriD}/${id}`, {
      method: "DELETE",
    });
  
    loadDestinos();
  }
  
  // Remover Hotel
  async function deleteHotel(id) {
    await fetch(`${uriH}/${id}`, {
      method: "DELETE",
    });
  
    loadHoteis();
  }
  