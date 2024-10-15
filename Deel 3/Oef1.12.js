let getal = parseInt(prompt("Uit hoeveel lijnen moet de driehoek bestaan?"));

if (getal > 0 && getal <= 10) {
    let antwoord = "";

    for (let i = 1; i <= getal; i++) {
        let spatie = " ".repeat(getal - i);
        let hashes = "#".repeat(i);
        antwoord += spatie + hashes + "\n";
    }

    console.log(antwoord);
} else {
    console.log("Niet mogelijk!");
}

document.getElementById("antwoord").innerHTML = antwoord;