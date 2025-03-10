import { searchImage } from './js/pixabay-api';
import { renderGallary } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  position: 'topRight',
  iconColor: '#fff',
  messageColor: '#fff',
});

let images = [];
export const galleryHTML = document.querySelector('.gallery');
const form = document.querySelector('.form');

// form.lastElementChild.classList.add('hidden'); //hide loader text

form.addEventListener('submit', handleClick);

function handleClick(event) {
  event.preventDefault();
  const request = form.elements.request.value.trim();
  galleryHTML.innerHTML = '';
  form.elements.request.setAttribute('readonly', true); //readonly for input
  form.elements.button.setAttribute('disabled', true); //disable button
  form.lastElementChild.classList.remove('hidden'); //show loader text

  searchImage(request)
    .then(response => {
      //   console.log('response', response);
      images = [...response.data.hits];
      if (images.length !== 0) {
        form.elements.request.value = '';
        renderGallary(images);
      } else {
        throw new Error(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
      }
    })
    .catch(error => {
      console.dir(error);

      iziToast.error({
        iconUrl: 'img/error.svg',
        message: error.message,
      });
    })
    .finally(() => {
      form.request.removeAttribute('readonly'); // Restore
      form.elements.button.removeAttribute('disabled'); // elements
      form.lastElementChild.classList.add('hidden'); // state
    });
}
