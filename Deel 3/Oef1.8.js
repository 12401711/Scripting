let tijd = new Date();
let uur = tijd.getHours();
let minuten = tijd.getMinutes();

let dayPeriod;
switch (true) {
    case (uur >= 7 && uur < 12):
       dayPeriod = "Goedemorgen";
        break;
    case (uren >= 12 && uren < 18):
        dayPeriod = "Goede dag";
        break;
    default:
        dayPeriod = "Goede avond";
}
document.getElementById("welkomsbericht").innerHTML = dayPeriod + " het is " + uur + ":" + minuten + "!";