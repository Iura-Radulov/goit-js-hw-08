// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

const makeImageEl = galleryItems.map(({ preview, original, description }) => 
    
    `<li> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> </li>`
   
).join('');

galleryEl.insertAdjacentHTML('beforeend', makeImageEl);

let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
gallery.on('show.simplelightbox');


console.log(galleryItems);
