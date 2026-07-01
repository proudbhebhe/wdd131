const today = new Date();

 
const currentYear = today.getFullYear();


document.getElementById("currentyear").innerHTML = currentYear;


document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;