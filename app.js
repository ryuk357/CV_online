//------------------------ title animation--------------------------
// declaration
const txt = document.querySelector('h1');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const alphabetLength = alphabet.length;
let resultat = [];
let resultatString ;
let maxLoop = 0;

// push in array random letters 
function randomAlphabet() {
    for (let i = 0; i < 9; i++) {
        resultat[i] = alphabet.charAt(Math.floor(Math.random() * 
        alphabetLength));
        }
    resultatString = resultat.join('');
    return resultatString;
}

// display array 15 times and display "K.Jéhanno"
let interval = setInterval(() => {
    if (maxLoop != 15) {
        resultatString = randomAlphabet()
        txt.innerHTML = resultatString
        maxLoop++;
    } else {
        txt.innerHTML = "K.Jéhanno"
        clearInterval(interval)
    }
    
}, 50);


//---------------------Popup-----------------------------

function toggle(target) {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    let popup = document.getElementById(target);
    popup.classList.toggle('active');
}