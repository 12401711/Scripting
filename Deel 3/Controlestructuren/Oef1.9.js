let getal = parseInt(prompt("Geef een getal van 1 tot 10 in:"));

if (getal < 1 || getal >10) {
    ("Niet mogelijk!");
}
else{
    let maaltafel = "De tafel van " + getal + " is:" + "<br>";
    for (let i = 1; i <= 10; i++) {
        maaltafel += i + "x" + getal + " = " + (i * getal) + "<br>";
    }
    document.getElementById("maaltafel").innerHTML = maaltafel;
}
