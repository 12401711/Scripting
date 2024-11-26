let zin = prompt("Geef een zin in:");

function startMetHallo() {

    if (zin.startsWith("Hallo")){
        console.log(zin);
    } else {
        let nieuweZin = "Hallo " + zin.charAt(0).toLowerCase() + zin.slice(1);
        console.log(nieuweZin);
    }
}
startMetHallo(zin);