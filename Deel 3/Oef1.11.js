let getal = parseInt(prompt("Uit hoeveel lijnen moet de driehoek bestaan?"));

let antwoord;
if (getal > 0 && getal <= 10) {
    antwoord = "";

    let teller = 1;
    while (teller <= getal) {
        antwoord += "#".repeat(teller) + "<br>";
        teller++;
    }
}   else{
    antwoord = "Niet mogelijk!"
}



document.getElementById("uitkomst").innerHTML = antwoord;