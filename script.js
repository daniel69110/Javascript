let valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

let grille = document.querySelector(".grid-container");

function afficherGrille() {
  grille.innerHTML = ''; // Effacer la grille actuelle
  valeurs.forEach((val, index) => {
    const div = document.createElement('div');
    div.textContent = val ?? ''; // Si null, afficher vide
    div.classList.add('case');
    div.addEventListener('click', () => deplacerCase(index)); // Ajouter un clic sur chaque case
    grille.appendChild(div);
  });
}

function deplacerCase(index) {
  const indexVide = valeurs.indexOf(null); // Index de la case vide

  console.log('Case vide à la position :', indexVide);
  console.log('Tu as cliqué sur la case :', index);

  const rows = 4; // Grille 4x4

  // Déterminer les indices voisins (haut, bas, gauche, droite)
  const voisins = [
    index - 1,  // gauche
    index + 1,  // droite
    index - rows,  // haut
    index + rows   // bas
  ];

  // Vérifie si la case cliquée est voisine de la case vide
  if (voisins.includes(indexVide)) {
    // Si oui, on échange les valeurs
    [valeurs[index], valeurs[indexVide]] = [valeurs[indexVide], valeurs[index]];

    // Mettre à jour la grille après avoir échangé les cases
    afficherGrille();
  }
}

function melanger() {
    // Mélange les valeurs en utilisant l'algorithme de Fisher-Yates
    for (let i = valeurs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Choisir un indice aléatoire entre 0 et i
      [valeurs[i], valeurs[j]] = [valeurs[j], valeurs[i]]; // Échanger les valeurs
    }
  
    // Réafficher la grille après le mélange
    afficherGrille();
}
  

afficherGrille(); // Initialiser et afficher la grille
