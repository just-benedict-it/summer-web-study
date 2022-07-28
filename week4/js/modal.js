const wrongModalHeader = document.querySelector(".wrongModalHeader");
const wrongModalHeaderBtn = wrongModalHeader.querySelector("p");
const wrongModalBodyAnswer = document.querySelector(".wrongModalBodyAnswer");
export const wrongModal = document.querySelector(".wrongModal");
const rightModalHeader = document.querySelector(".rightModalHeader");
const rightModalHeaderBtn = rightModalHeader.querySelector("p");
const rightModalBodyAnswer = document.querySelector(".rightModalBodyAnswer");
const rightModalBtn = document.querySelector(".rightModalBtn")
export const rightModal = document.querySelector(".rightModal");
import { life, selectedWord,correctLetters } from "./script.js"

wrongModalHeaderBtn.addEventListener("click", ()=>{
    wrongModal.style.display="none";
    window.location.reload();
})
rightModalBtn.addEventListener("click", ()=>{
    rightModal.style.display="none";
    window.location.reload();
})
rightModalHeaderBtn.addEventListener("click", ()=>{
    rightModal.style.display="none";
    window.location.reload();
})

export function checkLife(life){
    if (life==0){
        console.log("dead");
        wrongModal.style.display="flex";
        wrongModalBodyAnswer.innerText = selectedWord;
    }
}

export function checkCorrect(){
    if (selectedWord.length==correctLetters.length){
        rightModal.style.display="flex";
    }
}