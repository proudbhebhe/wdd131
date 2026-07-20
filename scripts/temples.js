const today = new Date();
const currentYear = today.getFullYear();

function calculateWindChill(temp, windSpeed ){
    return  35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16);
}

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", ()=> {
    const temperatureText = document.getElementById("temperature").innerText;
    const windText = document.getElementById("windSpeech").innerText;

    const temperatureInt = parseFloat(temperatureText);
    const windInt = parseFloat(windText);

    windChill = "N/A";

    if(temperatureInt<= 50 || windText> 3){
    windChill = calculateWindChill(temperatureInt, windText);
    }

    document.getElementById("chill").innerText =  windChill + "℉";
});
