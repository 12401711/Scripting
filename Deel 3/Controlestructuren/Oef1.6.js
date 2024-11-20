let vraag = prompt("Gaat u graag sporten?");

let uitkomst;
switch (vraag.toUpperCase()) {
    case "ja", "Ja", "JA":
        uitkomst = "Just do it!";
        break;
    case "nee", "Nee", "NEE":
        uitkomst = "Jammer, blijf dan maar liggen";
        break;

    default:
        uitkomst = "Dat was niet duidelijk, antwoord je vanuit je luie zetel?";
}
document.getElementById("resultaat").innerHTML = uitkomst;