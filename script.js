let darkBg = document.querySelector("#dark--bg")
darkBg.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

let buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    button.style.background = 'green';
  });

  button.addEventListener("mouseout", function () {
    button.style.background = '';
  });
});

let btns = document.querySelector("#btn-search")
btns.addEventListener("click", async function (searchPokemon) {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!input) return alert('Entre un nom ou un ID');

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!res.ok) throw new Error('Pokémon non trouvé');
  
    const data = await res.json();
    displayPokemonInfo(data);
  } catch (error) {
    document.getElementById('pokemonInfo').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
});

function displayPokemonInfo(pokemon) {
  const types = pokemon.types.map(t => t.type.name).join(', ');
  const abilities = pokemon.abilities.map(a => a.ability.name).join(', ');

  document.getElementById('pokemonInfo').innerHTML = `
    <h2>${pokemon.name} (id:${pokemon.id})</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Taille:</strong> ${pokemon.height / 10} m</p>
    <p><strong>Poids:</strong> ${pokemon.weight / 10} kg</p>
    <p><strong>Types:</strong> ${types}</p>
    <p><strong>Capacités:</strong> ${abilities}</p>
  `;
}

// const BASE_URL = "https://pokeapi.co/api/v2/"

// async function getPokemonByName (name){
//   const response = await fetch(BASE_URL+"pokemon/"+name)
//   const data = await response.json();
//   return data
// }