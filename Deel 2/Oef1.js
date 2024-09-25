let zin1 = ("Dit is de eerste zin");
let zin2 = ("Dit is de tweede zin");
let zin3 = ("Dit is de derde zin");

let zin1Div = document.getElementById('zin1');
let zin2Div = document.getElementById('zin2');
let zin3Div = document.getElementById('zin3');


zin1Div.innerHTML += "<p>" + zin1 + "</p>";
zin2Div.innerHTML += "<p>" + zin2 + "</p>";
zin3Div.innerHTML += "<p>" + zin3 + "</p>";


console.log(zin1)
console.log(zin2)
console.log(zin3)


