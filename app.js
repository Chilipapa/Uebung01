const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

// Wortliste
let words = [];
let aktuelles_wort = "";
let vorherige_woerter = [];

fetch("words.txt").then(function(response){
    return response.text();
})
.then(function(text){
    //console.log(text);
    words = text.split(",");
    console.log(words);
})


function onClick2(){
    if(aktuelles_wort){
        vorherige_woerter.push(aktuelles_wort);
        oldWordsEl.innerHTML = vorherige_woerter.join(", ");
    } 
    aktuelles_wort = getRandomWord();
    wordEl.innerHTML = aktuelles_wort;
    //console.log(getRandomWord());
}


function getRandomNumber(maxNumber){
    return Math.floor(Math.random()*maxNumber);
}

function getRandomWord(){
    return words[getRandomNumber(words.length)];
}