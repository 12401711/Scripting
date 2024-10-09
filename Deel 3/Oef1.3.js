let tijd = new Date();
let uur = tijd.getHours();
let minuten = tijd.getMinutes();
let seconds = tijd.getSeconds();

let dayPeriod = uur < 12 ? "voormiddag" : "namiddag";

console.log(tijd)
    alert("Het is " + dayPeriod + " en " + uur + ":" + minuten + " uur!");

