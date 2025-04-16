const fenetres = document.querySelector('.fenetre')
const boutons = document.querySelectorAll('button');
//Méthode 1
 
// function ajouter(valeur) {
//     fenetres.textContent += valeur;
// }

// function effacer() {
//     fenetres.textContent = '';
// }

// function calculer() {
//     try {
//       fenetres.textContent = eval(fenetres.textContent);
//     } catch {
//       fenetres.textContent = 'Erreur';
//     }
//   }

// Méthode 2 AddEventListener



boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const valeur = bouton.textContent;;

    if (valeur === 'C') {
      fenetres.textContent = '';
    } else if (valeur === '=') {
      try {
        fenetres.textContent = eval(fenetres.textContent);
      } catch {
        fenetres.textContent = 'Erreur';
      }
    } else {
      fenetres.textContent += valeur;
    }
  });
});
