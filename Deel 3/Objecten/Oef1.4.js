const mijnGegevens = {
    naam: "Mondelaers",
    voornaam: "Michiel",
    telefoonnummer: "+32494710338",
    geboortedatum: "18-11-2003",
    mailadres: "michiel.mondelaers@student.pxl.be",
    leeftijd: "21",
    huidskleur: "blank",
    oogkleur: "bruin",
};


const persoonArray = Object.values(mijnGegevens);
console.log(persoonArray);

const tbody = document.getElementById("gegevensTabel").querySelector("tbody");

for (const [key, value] of Object.entries(mijnGegevens)) {
    const rij = `<tr><td>${key}</td><td>${value}</td></tr>`;
    tbody.innerHTML += rij;
}