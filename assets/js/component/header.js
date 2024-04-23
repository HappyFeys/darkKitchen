
import restaurant from '../db/restaurant.js';



restaurant;

import articles from '../db/collection.js';



articles;



const headerComponent = () => {
    const header = document.querySelector('header');

    let categories = ["All"];
for (let i = 0; i < restaurant.length; i++) {
    categories.push(restaurant[i].categorie);
    
    console.log(categories);
    
}
for (let j = 0; j < categories.length; j++) {
    const categorie = categories[j];
    header.appendChild(document.createElement("button"));
    let buttonCategorie = document.querySelectorAll("button");
    buttonCategorie[j].innerText = categorie;
    buttonCategorie[j].classList.add(categorie.toLowerCase());

    
}

    let categories = ["tous"];
    console.log(articles);
    console.log(categories);
    for (let i = 0; i < categories.length; i++) {
        const categorie = categories[i];
        header.appendChild(document.createElement("button"));
        let buttons = document.querySelectorAll("button");
        buttons[i].innerText = categorie;
        
    }
    

}


//Pour importer dans app.js
export default headerComponent;