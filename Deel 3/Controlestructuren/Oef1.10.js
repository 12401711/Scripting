let teller = "1";
let uitkomst = "";
while (teller <= 7) {
    uitkomst += "#".repeat(teller) + "<br>";
        teller++;
        }
        console.log(uitkomst);

document.getElementById("uitkomst").innerHTML = uitkomst;