// fetch("./header.html")
//     .then(response => {
//         return response.text()
//     })
//     .then(data => {
//         document.querySelector("#fixHeader").innerHTML = data;
//     })
//     .then(() => {
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

// This algorithm only concern animation of the burger button (the both position of the button on our page).
// If menuOpen is true, then we add a classList named "open" to our .menuBtn.
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle("affiche");
    menuBtn.classList.toggle('open');
});

// For each links we'll click on (Accueil, Disciplines, Equipe & Contact), we want them disappearing.
// That's why we're removing the classList.

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navMenu.classList.remove('active');
}))
// })
