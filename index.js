const navIcon = document.getElementById('nav-icon');
const navbar = document.getElementById('navbar');

navIcon.addEventListener('click', function () {
    navbar.classList.toggle('show');
});