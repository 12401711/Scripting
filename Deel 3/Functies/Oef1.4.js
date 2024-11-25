let zin = prompt("Geef een zin in:");

function startMetHallo() {
    let zin = prompt("Geef een zin in:");

    if (zin.startsWith("Hallo")){
        console.log(zin);
    } else {
        let aangepasteZin = "Hallo " + zin.charAt(0).toLowerCase() + zin.slice(1);
        console.log(aangepasteZin);
    }
}