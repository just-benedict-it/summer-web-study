const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random()*words.length)];
const correctLetters = [];
const wrongLetters = [];
wrongBox = document.querySelector(".wrongBox");
rightBox = document.querySelector(".rightBox");
wrongBoxLetters = document.querySelector(".wrongBoxLetters");
rightBoxLetters = document.querySelector(".rightBoxLetters");

let life = 5;
let blankedArray = Array(selectedWord.length).fill(" _ ");
let selectedWordArray = selectedWord.split("");
rightBoxLetters.innerText = blankedArray;

function wordWritten(word){
    if (selectedWord.includes(word.key)){
        if (correctLetters.includes(word.key)){
            repeatedWord();
        }
        else{
            selectedWordArray.map((letter,index)=>{if(letter==word.key){blankedArray[index]=word.key;correctLetters.push(word.key);}});
            rightBoxLetters.innerText = blankedArray;
            checkCorrect();
        }
    }else{
        if (wrongLetters.includes(word.key)){
            repeatedWord();
        }
        else{
            const hiddenBody = document.querySelector(".hidden");
            if (hiddenBody){
                hiddenBody.classList.remove("hidden");
                wrongLetters.push(word.key);
                wrongBoxLetters.innerText = wrongLetters;
                life--;
                checkLife(life);
            }
        }
    }
}
function repeatedWord(){
    alert("you tried this word already");
}

function checkLife(life){
    if (life==0){
        console.log("dead");
        alert("dead");
        window.location.reload();
    }
}
function checkCorrect(){
    if (selectedWord.length==correctLetters.length){
        alert("correct");
        window.location.reload();

    }
}

window.addEventListener('keydown', wordWritten);


