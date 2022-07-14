import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");



const imgGallery = galleryItems.map(({ preview, original, description }) => {
    console.log(galleryItems);
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    >
  </a>`
}).join(" ");
gallery.insertAdjacentHTML("beforeend", `${imgGallery}`);

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});