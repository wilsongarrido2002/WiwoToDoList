const abrir = document.getElementById('newTask')
const modal = document.getElementById('modal')
const fechar = document.querySelector('.fechar')

abrir.addEventListener('click', ()=> {
    modal.style.display = 'flex'
})

fechar.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === modal)
        modal.style.display = 'none'
})