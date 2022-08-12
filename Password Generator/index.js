const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 0;

const inputEl = document.getElementById("lenpa");
const res = document.getElementById("reset");

const vall=document.getElementById("pass");
vall.addEventListener("click",function(){
    passwordLength = inputEl.value;
    letter.textContent= generateRandomPassword()
})

res.addEventListener("click",function(){
    passwordLength=0;
    letter.textContent= generateRandomPassword()
    inputEl.value=0;
})


const letter=document.getElementById("first");
const genpassbutt=document.getElementById("pass");

 

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}
