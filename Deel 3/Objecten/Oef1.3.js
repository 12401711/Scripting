const mijnGegevens = {
    naam: "Mondelaers",
    voornaam: "Michiel",
    telefoonnummer: "+32494710338",
    geboortedatum: "18-11-2003",
    mailadres: "michiel.mondelaers@student.pxl.be"

};

mijnGegevens.lengte = "178 cm";
mijnGegevens.gewicht = "65 kg";
mijnGegevens.leeftijd = "21";
mijnGegevens.huidskleur = "blank";
mijnGegevens.oogkleur = "bruin";

console.log(mijnGegevens);

const tbody = document.getElementById("gegevensTabel").querySelector("tbody");

for (const [key, value] of Object.entries(mijnGegevens)) {
    const rij = `<tr><td>${key}</td><td>${value}</td></tr>`;
    tbody.innerHTML += rij;
}