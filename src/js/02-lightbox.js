import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);

galleryItems.forEach((item) => {
  const li = document.createElement(`li`);
  li.classList.add(`gallery__item`);
  const link = document.createElement(`a`);
  link.classList.add(`gallery__link`);
  link.href = item.original;
  const img = document.createElement(`img`);
  img.classList.add(`gallery__image`);
  img.src = item.preview;
  img.alt = item.description;

  link.appendChild(img);
  li.appendChild(link);
  gallery.appendChild(li);
});

function createLightbox() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  return lightbox;
}

const lightbox = createLightbox();

gallery.addEventListener("click", (Event) => {
  Event.preventDefault();
  lightbox.open();
});