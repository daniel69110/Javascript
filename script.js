let nameInput = document.querySelector("#user_name");
let nameError = document.querySelector("#name_error");

let timeRdv = document.querySelector("#heure_rdv");
let timeError = document.querySelector("#time_error");

let participant = document.querySelector("#nb_part");
let nbError = document.querySelector("#nb_error");

let form = document.querySelector("form");

let liste = [];

const appointmentList = document.querySelector("#appointmentList");

form.addEventListener("submit", function (event) {
  let valid = true;

  // Vérification du nom
  const nom = nameInput.value.trim();
  const regex = /^[a-zA-Z]+$/;
  if (nom.length < 3 || !regex.test(nom)) {
    nameInput.style.borderColor = 'red';
    nameError.hidden = false;
    valid = false;
  } else {
    nameInput.style.borderColor = 'green';
    nameError.hidden = true;
  }

  // Vérification de l'heure
  const heure = timeRdv.value;
  const [h, m] = heure.split(':').map(Number);
  if (isNaN(h) || h < 9 || h >= 18) {
    timeRdv.style.borderColor = 'red';
    timeError.hidden = false;
    valid = false;
  } else {
    timeRdv.style.borderColor = 'green';
    timeError.hidden = true;
  }

  // Vérification du nombre de participants
  const nb = parseInt(participant.value);
  if (isNaN(nb) || nb <= 0 || nb > 10) {
    participant.style.borderColor = 'red';
    nbError.hidden = false;
    valid = false;
  } else {
    participant.style.borderColor = 'green';
    nbError.hidden = true;
  }

  // Bloquer la soumission si non valide
  if (!valid) {
    event.preventDefault();
    return;
  }

  // Création de l'objet rendez-vous avec les informations récupérées
  const rdv = {
    nom: nom,
    date: document.querySelector("#date_rdv").value,  // Récupérer la date
    heure: heure,
    participants: nb
  };

  // Ajout au tableau liste
  liste.push(rdv);

  // Affichage du tableau en console
  console.log("Liste des rendez-vous :", liste);

  // Création d'une nouvelle ligne à ajouter dans le tableau HTML
  const row = `<tr>
    <td>${rdv.nom}</td>
    <td>${rdv.date}</td>
    <td>${rdv.heure}</td>
    <td>${rdv.participants}</td>
  </tr>`;

  // Ajouter la ligne au tableau HTML
  appointmentList.innerHTML += row;

  // Réinitialiser le formulaire après soumission
  form.reset();

  // Empêcher la soumission classique
  event.preventDefault();
});
