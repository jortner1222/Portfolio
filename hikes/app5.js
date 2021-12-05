import Hikes from './hikes.js';
import { getComments, storeComments, addComment, addSection } from './comment.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});
