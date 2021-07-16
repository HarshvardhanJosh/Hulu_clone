const login = document.querySelector('.login-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

login.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(e){
    if(e.target === modal){
        closeModal();
    }
}