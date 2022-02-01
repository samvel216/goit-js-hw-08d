// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const showGallery = galleryItems.map((element) => `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" title="${element.description}"/>
</a>`).join("");
galleryEl.insertAdjacentHTML("beforeend", showGallery);
let gallery = new SimpleLightbox('.gallery a', { "captionDelay": 250 });
