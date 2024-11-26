function zinSplitsen() {

    let zin = prompt("Geef een random zin in:");
    if (!zin) return alert("Geen zin ingevoerd!");

    let getal = parseInt(prompt(`Geef een getal tussen 0 en ${zin.length}:`));
    if (isNaN(getal) || getal < 0 || getal > zin.length) {
        return alert("Ongeldig getal!");
    }

    alert(`Eerste deel: "${zin.slice(0, getal)}"\nTweede deel: "${zin.slice(getal)}"`);
}

zinSplitsen();
