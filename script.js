const word = ["chien", "table", "piano", "plage", "fleur"];
const randWord = word[Math.floor(Math.random() * word.length)].toLowerCase();
console.log("Mot à deviner :", randWord);

const alphabetAZERTY = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const keyboard = document.getElementById('keyboard');
const grid = document.getElementById('grid');
const submitBtn = document.getElementById('submitBtn');

let currentAttempt = 0;
let currentLetters = [];
const maxAttempts = 6;
const wordLength = 5;

/**GRILLE */
function generateGrid() {
    for (let i = 0; i < maxAttempts * wordLength; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
    }
}
generateGrid();

/** MISE À JOUR DES CASES POUR LA LIGNE ACTUELLE */
function updateGrid() {
    const start = currentAttempt * wordLength;
    for (let i = 0; i < wordLength; i++) {
        const cell = grid.children[start + i];
        cell.textContent = currentLetters[i] || '';
    }
}

/** AJOUT DES TOUCHES DU CLAVIER */
alphabetAZERTY.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'key';
    btn.textContent = letter;
    btn.addEventListener('click', () => {
        if (currentLetters.length < wordLength) {
            currentLetters.push(letter.toLowerCase());
            updateGrid();
        }
    });
    keyboard.appendChild(btn);
});


submitBtn.addEventListener('click', () => {
    if (currentLetters.length < wordLength) {
        alert("Tapez un mot de 5 lettres !");
        return;
    }

    const motSaisi = currentLetters.join('');
    const start = currentAttempt * wordLength;


    const lettresRestantes = randWord.split('');


    for (let i = 0; i < wordLength; i++) {
        const cell = grid.children[start + i];
        const lettre = currentLetters[i];

        if (lettre === randWord[i]) {
            cell.classList.add('correct');
            lettresRestantes[i] = null;
        }
    }


    for (let i = 0; i < wordLength; i++) {
        const cell = grid.children[start + i];
        const lettre = currentLetters[i];

        if (lettre !== randWord[i]) {
            if (lettresRestantes.includes(lettre)) {
                cell.classList.add('present');
                lettresRestantes[lettresRestantes.indexOf(lettre)] = null;
            } else {
                cell.classList.add('absent');
            }
        }
    }

    if (motSaisi === randWord) {
        setTimeout(() => alert("Bravo, vous avez deviné le mot !"), 100);
    } else {
        currentAttempt++;
        currentLetters = [];

        if (currentAttempt === maxAttempts) {
            setTimeout(() => alert(`Le mot était : ${randWord}`), 100);
        }
    }
});

/** BOUTON SUPPRIMER */
const resetBtn = document.createElement('button');
resetBtn.className = 'key btn-supp';
resetBtn.textContent = 'Supp';
resetBtn.addEventListener('click', () => {
    currentLetters.pop();
    updateGrid();
});
keyboard.appendChild(resetBtn);
