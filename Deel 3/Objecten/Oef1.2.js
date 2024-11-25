const mijnGegevens = {
    naam: "Mondelaers",
    voornaam: "Michiel",
    telefoonnummer: "+32494710338",
    geboortedatum: "18-11-2003",
    mailadres: "michiel.mondelaers@student.pxl.be"
};
console.log(mijnGegevens);

const tabel = document.getElementById("gegevensTabel").querySelector("tbody");

for (const [key, value] of Object.entries(mijnGegevens)) {
    const rij = document.createElement("tr");
    const eigenschapCel = document.createElement("td");
    const waardeCel = document.createElement("td");

    eigenschapCel.textContent = key;
    waardeCel.textContent = value;

    rij.appendChild(eigenschapCel);
    rij.appendChild(waardeCel);
    tabel.appendChild(rij);
}

document.getElementById("resultaat").innerHTML = " Mijn naam is " + mijnGegevens.voornaam + " " +
mijnGegevens.naam + " en ik ben geboren op " + mijnGegevens.geboortedatum + ". Mijn telefoonnummer is " +
mijnGegevens.geboortedatum + " en mijn mailadres is " + mijnGegevens.mailadres + ". Via deze gegevens kan je mij " +
"altijd contacteren!";