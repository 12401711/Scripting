const geboortejaar = parseInt(prompt("Wat is je geboortejaar?"));
const huidigJaar = new Date().getFullYear();
const leeftijd = huidigJaar - geboortejaar;

if (leeftijd > 20) {
    alert("Je bent oud genoeg om de informatie op deze webpagina\n" +
        "te bekijken!");
}
else{
    alert("U bent te jong!")
}