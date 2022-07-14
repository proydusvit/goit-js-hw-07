import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");



const imgGallery = galleryItems.map(({ preview, original, description }) => {
    console.log(galleryItems);
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    >
  </a>
</div>`
}).join(" ");
gallery.insertAdjacentHTML("beforeend", `${imgGallery}`);
gallery.addEventListener("click", clickImg)
function clickImg (evt) {
    evt.preventDefault()
      window.addEventListener("keydown", closeModal);
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`)
    console.log(evt.target.dataset.source)
    instance.show()
    function closeModal(evt) {
        if (evt.code === "Escape") {
            instance.close(() =>
        window.removeEventListener("keydown", closeModal)
      );
        }
    }
}

