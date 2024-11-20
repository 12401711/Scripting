let zin = "Ik wil een koekje";

document.body.innerHTML = `<p>${zin}</p>`;

console.log("Welk karakter staat op positie 0:" + zin.charAt(0));
console.log("Welk karakter staat op positie 3:" + zin.charAt(3));
console.log("Wat is de laatste positie van 'k':" + zin.lastIndexOf('k'));
console.log("Wat is de laatste positie van 'e':" + zin.lastIndexOf('e'));
console.log("Wat is de lengte van de string:" + zin.length);