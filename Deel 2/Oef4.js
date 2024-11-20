let zin = "Ik wil een koekje";

let nieuweZin = zin.replace("koekje", "lasagne van PXL-catering");

let hoofdlettersZin = nieuweZin.toUpperCase();

console.log(hoofdlettersZin);

document.body.innerHTML = `<p>${hoofdlettersZin}</p>`;