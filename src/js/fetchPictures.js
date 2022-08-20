import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29397538-d4347fe79bd92696eb0b247a2';
const perPages = 40;

const fetchPictures = async(searchQuery, page) => {
    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPages}&page=${page}`);
    return response.data; 
}

export default fetchPictures;