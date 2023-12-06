const container = document.querySelector('.container');
const btnNovo = document.querySelector('#btnNovo');
// const modal = document.querySelector('#modalNovo');
const formNovo = document.querySelector('#formNovo');




var cards = [{
    titulo: 'Card 1',
    descricao: 'Texto card 1',
}];




formNovo.addEventListener('submit', e => {
    e.preventDefault();
    cards.push({
        titulo: formNovo.titulo.value,
        titulo: formNovo.descricao.value
    });
    formNovo.titulo.value = ""
    formNovo.descricao.value = ""
    modalNovo.classList.add('oculto');
    console.table(cards);
   criarCards();
})


function criarCards(){
    container.innerHTML = " ";
    cards.forEach(card, i =>{
        container.innerHMTL = `
        div class="card">
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
        <button onclick="excluirCards(${i})">`
    })
}

function excluirCards(){
    
}
// btnNovo.addEventListener('click', e => {
//     e.preventDefault();
//     modal.classList.remove('oculto');
// })