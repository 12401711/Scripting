const hondenrassen = [
    "Labrador Retriever",
    "Duitse Herder",
    "Golden Retriever",
    "Beagle",
    "Bulldog",
    "Poedel",
    "Chihuahua",
    "Rottweiler",
    "Boxer",
    "Husky"
];

const getal = parseInt(prompt("Geef een nummer tussen 1 en 10:"));

let resultaat;
if (getal >= 1 && getal <= 10) {
    resultaat = "Hondenras: " + hondenrassen[getal - 1];
} else {
    resultaat = "Sorry, katten niet toegelaten";
}

document.getElementById("uitkomst").innerHTML = resultaat;


