var randomNumber1 = Math.random(); //Numero casuale da 0 a 0.99999
randomNumber1 = Math.floor(randomNumber1*6)+1; // Numero casuale da 1 a 6

var randomNumber2 = Math.random(); //Numero casuale da 0 a 0.99999
randomNumber2 = Math.floor(randomNumber2*6)+1; // Numero casuale da 1 a 6

var image1 = "images/dice" + randomNumber1 + ".png"; //Il numero casuale di prima lo aggiungiamo tramite concatenazione al nuovo link per l'immagine
var image2 = "images/dice" + randomNumber2 + ".png"; //Il numero casuale di prima lo aggiungiamo tramite concatenazione al nuovo link per l'immagine

document.querySelector(".dice .img1").setAttribute("src", image1); //Cambiamo l'attributo dell'immagine dal vecchio link al nuovo
document.querySelector(".dice .img2").setAttribute("src", image2); //Cambiamo l'attributo dell'immagine dal vecchio link al nuovo

if (randomNumber1>randomNumber2) {  //Creiamo delle condizioni per modificare il valore in h1 in base al vincitore
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win";
} else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
} else {
document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}
