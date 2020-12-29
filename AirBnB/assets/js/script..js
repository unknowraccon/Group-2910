const btn = document.querySelector ('#btn');
const navbar = document.querySelector ('#navbar');
btn.addEventListener('click', () => {
    navbar.classList.toggle('navbar_active');
})