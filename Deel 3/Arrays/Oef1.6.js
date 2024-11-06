const hondenrassen = [
    "Labrador Retriever",
    "Duitse Herder",
    "Golden Retriever",
    "Beagle",
    "Bulldog",
    "Poedel",
    "Chihuahua",
    "Rottweiler",
    "Boxer",
    "Husky"
];

hondenrassen.unshift("Shih Tzu", "Cocker Spaniel", "Dobermann", "Dalmatian", "Akita");

hondenrassen.pop()
hondenrassen.shift()

console.log(hondenrassen);
document.getElementById("uitkomst").innerHTML = hondenrassen;