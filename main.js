const charactersEl = document.getElementById('characters');
const prev = document.getElementById('prev-button');
const next = document.getElementById('next-button');
const details = document.getElementById('details');
const loader = document.querySelector(".loader")

const getCharacters = (url = 'https://swapi.dev/api/people') => {
  const loaderEl = document.createElement('div');
  //loaderEl.innerText = 'Loading';
  // charactersEl.append(loaderEl);
const header = document.createElement('h1'); //
header.textContent = 'Details'; //
details.append(header)

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      charactersEl.innerText = '';
      loader.classList.add('loader-hidden');
      responseJson.results.forEach((character) => {
        const characterEl = document.createElement('p');

        characterEl.addEventListener('click', () => {
          
          const detailsEl = document.createElement('p');
      
          details.innerText = '';
          detailsEl.innerText = 
          `Height: ${character.height}
           Mass: ${character.mass}
           Skin Color: ${character.skin_color}
           Eye Color: ${character.eye_color}
           Hair Color: ${character.hair_color}
           Birth year: ${character.birth_year}
           Gender: ${character.gender}`;
          details.append(detailsEl)
        })

        characterEl.innerText = character.name;
        charactersEl.append(characterEl);
        console.log(character)
      });

      prev.addEventListener('click', () => {
        loader.classList.remove('loader-hidden'); //
        charactersEl.innerText = '';
        details.innerText = '';
        getCharacters(responseJson.previous);
      });
      next.addEventListener('click', () => {
        loader.classList.remove('loader-hidden'); //
        charactersEl.innerText = '';
        details.innerText = '';
        getCharacters(responseJson.next);
        
      });

      if (responseJson.previous) {
        prev.disabled = false;
      } else {
        prev.disabled = true;
      }

      if (responseJson.next) {
        next.disabled = false;
      } else {
        next.disabled = true;
      }
    });
};


  getCharacters();

