fetch("./header_work.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#fixHeader").innerHTML = data;
    })
    .then(() => {
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('.nav-menu');

        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle("affiche");
            menuBtn.classList.toggle('open');
        });

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }))
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });
const selectorName = document.getElementById("name");
const selectorMail = document.getElementById("mail");
const selectorPhone = document.getElementById("phone");
const selectorMsg = document.getElementById("msg");
const selectorButton = document.querySelector(".send");


selectorButton.addEventListener('click', function () {
    event.preventDefault();
    alert(`Bonjour,
    Votre message nous a bien été envoyé.
    Vos coordonnées :
    Nom : ${selectorName.value}
    Email : ${selectorMail.value}
    Téléphone : ${selectorPhone.value}
    Votre message : ${selectorMsg.value}`);
});


