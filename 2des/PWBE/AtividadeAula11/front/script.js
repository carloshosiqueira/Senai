const opcoes = document.getElementById("opcoes");
const destinoDados = document.getElementById("destinoDados");
const hoteisSelect = document.getElementById("hoteis");
const hotelDados = document.getElementById("hotelDados");

const uriPt = "http://localhost:3000/turistico";
const uriD = "http://localhost:3000/destinos";
const uriH = "http://localhost:3000/hoteis";

// Carregar os pontos turísticos
async function loadPontosTuristicos() {
    let response = await fetch(uriPt);
    let pontosTuristicos = await response.json();
    opcoes.innerHTML = pontosTuristicos.map(pt => `<option value="${pt.id}">${pt.nome}</option>`).join('');
    opcoes.addEventListener('change', handlePontoTuristicoChange);
}

// Carregar os dados do destino e dos hotéis quando um ponto turístico é selecionado
async function handlePontoTuristicoChange(event) {
    const pontoTuristicoId = event.target.value;
    let response = await fetch(`${uriPt}/nome`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: event.target.options[event.target.selectedIndex].text })
    });
    let pontoTuristico = await response.json();
    updateDestinoDados(pontoTuristico.destino);
    updateHoteis(pontoTuristico.hoteis);
}

// Atualizar a tabela de destino
function updateDestinoDados(destino) {
    destinoDados.innerHTML = `
        <tr>
            <td>${destino.nome}</td>
            <td>${destino.valor}</td>
        </tr>
    `;
}

// Atualizar a dropdown e a tabela de hotéis
function updateHoteis(hoteis) {
    hoteisSelect.innerHTML = hoteis.map(hotel => `<option value="${hotel.id}">${hotel.nome}</option>`).join('');
    hoteisSelect.addEventListener('change', handleHotelChange);
    updateHotelDados(hoteis[0]);
}

// Carregar os dados do hotel quando um hotel é selecionado
function handleHotelChange(event) {
    const hotelId = event.target.value;
    let selectedHotel = Array.from(hoteisSelect.options).find(option => option.value == hotelId);
    updateHotelDados(selectedHotel);
}

// Atualizar a tabela de hotéis
function updateHotelDados(hotel) {
    hotelDados.innerHTML = `
        <tr>
            <td>${hotel.nome}</td>
            <td>${hotel.valor}</td>
        </tr>
    `;
}

// Inicializar a aplicação
loadPontosTuristicos();
