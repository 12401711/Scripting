let tijd = new Date();
let uur = tijd.getHours();
let minuten = tijd.getMinutes();

let dayPeriod;
if (uur >= 7 && uur < 12) {
    dayPeriod = 'Goedemorgen';
} else if (uur >= 12 && uur < 18) {
    dayPeriod = 'Goede dag';
} else {
    dayPeriod = 'Goede avond';
}

let dag;
switch (new Date().getDay()) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";
}

document.getElementById("welkomsbericht").innerHTML = dayPeriod +": vandaag zijn we " + dag +" en het is " + uur + ":" + minuten + "!";