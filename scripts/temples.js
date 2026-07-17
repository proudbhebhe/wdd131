const today = new Date();
const currentYear = today.getFullYear();

function calculateWindChill(temp, windSpeed ){
    return 35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16);
}
const happy =calculateWindChill(30,15)
document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

document.getElementById("chill").innerHTML =  happy.
