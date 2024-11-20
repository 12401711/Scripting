const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
];

const huidigeMaand = new Date().getMonth();

document.getElementById("welkomsbericht").innerText = `Welkom! We bevinden ons in de maand ${maanden[huidigeMaand]}.`;