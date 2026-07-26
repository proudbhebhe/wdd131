const today = new Date();
const currentYear = today.getFullYear();

document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastmodified").innerHTML = "Last Modified" + document.lastModified;