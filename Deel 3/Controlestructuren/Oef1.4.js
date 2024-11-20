let tijd = new Date();
let uren = tijd.getHours();
let minuten = tijd.getMinutes();
let seconden = tijd.getSeconds();

let dayPeriod;
if (uren >= 7 && uren < 12) {
    dayPeriod = 'Goedemorgen';
} else if (uren >= 12 && uren < 18) {
    dayPeriod = 'Goede dag';
} else {
    dayPeriod = 'Goede avond';
}

let huidigeTijd =
    String(uren).padStart(2, '0') + ':' +
    String(minuten).padStart(2, '0');


document.getElementById("welkomsbericht").innerHTML = dayPeriod + " het is " + huidigeTijd + "!";