import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const fullSizeImage = new SimpleLightbox('.gallery a' , {
    captions:true,
    captionDelay: 250,
    captionSelector:'img',
    captionPosition:'bottom',
    captionsData:'alt',
    preloading: true,
});

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `
                <a class="gallery__item" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
                    `;
        }).join('');
}