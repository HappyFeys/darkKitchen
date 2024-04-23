import articles from '../db/collection.js';

const btnFilter = document.querySelector("#searchBar__btnFilter")


const sort = () => {

    
}
function sortByCategorie(array) {
    for (let element of array) {
        
    }  
}
function sortByPrice(array, section) {
    array.sort((a,b) => b.prix - a.prix);
    section.innerHTML = "";
    // fonction qui crée les cartes
}
export default sort;