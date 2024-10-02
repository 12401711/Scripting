let getal1 = parseFloat(prompt("Geef het eerste gehele getal in:"));
let getal2 = parseFloat(prompt("Geef het tweede gehele getal in:"));

let vermenigvuldigen = getal1 * getal2;
let som = getal1 + getal2;
let aftrekken = getal1 - getal2;
let delen = getal1 / getal2;

document.body.innerHTML += "<p>Resultaat vermenigvuldigen: <br>" + vermenigvuldigen +"</p>";
document.body.innerHTML += "<p>Resultaat som: <br>" + som +"</p>";
document.body.innerHTML += "<p>Resultaat aftrekken: <br>" + aftrekken +"</p>";
document.body.innerHTML += "<p>Resultaten delen: <br>" + delen +"</p>";