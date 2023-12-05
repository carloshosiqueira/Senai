const botaoEl = document.querySelector('button');
botaoEl.addEventListener('click', abreModal);

function abreModal(e) {
    const modalEl = document.querySelector('.modal')
    modalEl.classList.add('visivel');
}