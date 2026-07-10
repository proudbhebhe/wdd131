const today = new Date();
const currentYear = today.getFullYear();
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;
hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});