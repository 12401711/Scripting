let getal = parseInt(prompt("Vul een cijfer in tussen 0 en 100:"));

let uitkomst;

if (isNaN(getal) || getal < 0 || getal > 100) {
    uitkomst = "Voer alstublieft een geldig getal tussen 0 en 100 in.";
} else {

    if (getal < 50) {
        uitkomst = "Te laag"
    } else if (getal === 50) {
        uitkomst = "Proficiat, goed gegokt!"
    } else {
        uitkomst = "Te hoog"
    }

}
document.getElementById("resultaat").innerHTML = uitkomst;