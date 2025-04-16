const fenetres = document.querySelector('.fenetre')


//afficher les éléments 
function ajouter(valeur) {
    fenetres.textContent += valeur;
}

function effacer() {
    fenetres.textContent = '';
}

function calculer() {
    try {
      fenetres.textContent = eval(fenetres.textContent);
    } catch {
      fenetres.textContent = 'Erreur';
    }
  }