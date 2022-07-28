const words = ['application', 'programming', 'interface', 'wizard'];
export let selectedWord = words[Math.floor(Math.random()*words.length)];
export const correctLetters = [];
const wrongLetters = [];
const wrongBox = document.querySelector(".wrongBox");
const rightBox = document.querySelector(".rightBox");
const wrongBoxLetters = document.querySelector(".wrongBoxLetters");
import { wrongModal, checkLife, checkCorrect } from "./modal.js";
const ul = document.querySelector("ul");
export var life = 5;

let selectedWordArray = selectedWord.split("");


for (var i=0; i<selectedWord.length; i++) {
    const li = document.createElement("li");
    li.append("-");
    ul.appendChild(li);
}

function wordWritten(word){
    if (selectedWord.includes(word.key)){
        if (correctLetters.includes(word.key)){
            repeatedWord();
        }
        else{
            selectedWordArray.map((letter,index)=>{if(letter==word.key){ul.querySelectorAll("li")[index].innerHTML=word.key;correctLetters.push(word.key);}});
            checkCorrect();
        }
    }else{
        if (wrongLetters.includes(word.key)){
            repeatedWord();
        }
        else{
            const hiddenBody = document.querySelector(".hidden");
            hiddenBody.classList.remove("hidden");
            wrongLetters.push(word.key);
            wrongBoxLetters.innerText = wrongLetters;
            life--;
            checkLife(life);
        }
    }
}
function repeatedWord(){
    alert("you tried this word already");
}

window.addEventListener('keydown', wordWritten);


