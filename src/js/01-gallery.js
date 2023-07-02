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
  img.dataset.source = item.original;
  img.alt = item.description;

  link.appendChild(img);
  li.appendChild(link);
  gallery.appendChild(li);
});

function createLightbox(content, options = {}) {
  const defaultOptions = {
    onShow: null,
    onClose: null,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const lightbox = basicLightbox.create(content, {
    ...mergedOptions,
  });

  document.addEventListener("keydown", (Event) => {
    if (Event.key === "Escape") {
      lightbox.close();
    }
  });

  return lightbox;
}

gallery.addEventListener(`click`, (Event) => {
  Event.preventDefault();
  if (Event.target.classList.contains("gallery__image")) {
    const source = Event.target.dataset.source;
    const instance = createLightbox(`<img src="${source}" alt="${Event.target.alt}" class="lightbox-image">`, {
      onShow: (instance) => {
        const lightboxImage = instance.element().querySelector(".lightbox-image");
        lightboxImage.style.maxHeight = "calc(100vh - 20px)";
        lightboxImage.style.maxWidth = "calc(100vw - 20px)";
      },
    });
    instance.show();
  }
});
