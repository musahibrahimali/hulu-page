const modal: HTMLDivElement | null = document.querySelector('.modal');
const loginBtn: HTMLButtonElement | null = document.querySelector('.login-btn');
const closeBtn: HTMLImageElement | null = document.querySelector('.close');


const openModal = () => {
    modal!.style.display = 'block';
}

const closeModal = () => {
    modal!.style.display = 'none';
}

const outsideClick = (event: any) => {
    if (event.target == modal) {
        closeModal();
    }
}

loginBtn!.addEventListener('click', openModal);
closeBtn!.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
