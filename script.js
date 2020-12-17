import './styles.scss';
import { movies } from './src/data';

function render() {
  let container = `<h1>Hackerflix</h1><br>
    <button id= "recentButton">Only recent films</button><br><br>
    <div class="containerImages">`;

  // affichage images
  for (let i = 0; i < movies.length; i++) {
    container += `<img src="${movies[i].img ? `posters/${movies[i].imdb}.jpg` : 'images/black_solid.jpg'}">`;
  }
  container += '</div>';
  const app = document.getElementById('app');
  app.innerHTML = container;
  app.innerHTML += '<div id="popup"></div>';

  const affiches = document.querySelectorAll('img');

  // affichage popup

  for (let i = 0; i < affiches.length; i++) {
    affiches[i].addEventListener('click', () => {
      const popupDiv = document.getElementById('popup');
      popupDiv.innerHTML = `<div id="insidePopup"><h2>${movies[i].title}</h2><br>
    Genres: ${movies[i].genres}<br>
    Year: ${movies[i].year}<br>
    Note: ${movies[i].note}<br>
    Plot: ${movies[i].plot ? movies[i].plot : 'blablabla'}<br><br>
    <button id= "fermerButton">Fermer</button></div>`;
    });
  }

  // fermeture popup

  document.body.addEventListener('click', (e) => {
    const popupCache = document.getElementById('insidePopup');
    if (e.target.matches('#fermerButton')) {
      popupCache.style.display = 'none';
    }

    // seulements films après 2000

    else if (e.target.matches('#recentButton')) {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].year < 2000) {
          document.querySelectorAll('img')[i].style.display = 'none';
        }
      }
    }
  });
}

render();
