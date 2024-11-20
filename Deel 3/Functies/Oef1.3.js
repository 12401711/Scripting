let getal1 = parseFloat(prompt("Geef het eerste getal in:"));
let getal2 = parseFloat(prompt("Geef het tweede getal in:"));

function vijftig(num1, num2) {

    if (num1 === 50 || num2 === 50 ||  (num1 + num2) === 50){
        return "Hoera VIJFTIG!";
    } else {
       return "Spijtig, geen vijftig"
    }
}

let resultaat = vijftig(getal1, getal2);

document.getElementById("output").innerText = resultaat;