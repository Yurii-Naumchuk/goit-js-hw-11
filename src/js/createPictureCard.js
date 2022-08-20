import {refs} from './refs';

function createPictureCard (picture) { 
    return `<div class="photo-card">
    <div class="img-thumb">
    <a class="img-link" href="${picture.largeImageURL}">
    <img src="${picture.webformatURL}" alt="${picture.tags}" title="${picture.tags}" loading="lazy"/></a></div>
    <div class="info">
      <p class="info-item">
        <b>Likes: <br> ${picture.likes}</b></p>
      <p class="info-item">
        <b>Views: <br> ${picture.views}</b></p>
      <p class="info-item">
        <b>Comments: <br> ${picture.comments}</b></p>
      <p class="info-item">
        <b>Downloads: <br> ${picture.downloads}</b></p>
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
