import {refs} from './refs';

function createPictureCard (picture) { 
    return `<div class="photo-card">
    <div class="img-thumb">
    <a class="img-link" href="${picture.largeImageURL}">
    <img src="${picture.webformatURL}" alt="${picture.tags}" title="${picture.tags}" loading="lazy"/></a></div>
    <div class="info">
    <p class="info-item"><b>Likes</b>${picture.likes}</p>
      <p class="info-item"><b>Views:</b> ${picture.views}</p>
      <p class="info-item"><b>Comments:</b>${picture.comments}</p>
      <p class="info-item"><b>Downloads:</b>${picture.downloads}</p>
    </div>
    </div>`
}
function createListPictures (array) {
    return array.reduce((acc, item) => acc + createPictureCard(item), "");
}
export default function insertcreatePictureCard (array) {
    const result = createListPictures(array);
    refs.galleryEl.insertAdjacentHTML('beforeend', result);
}