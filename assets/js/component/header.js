import restaurant from '../db/restaurant.js';



restaurant;


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
}


//Pour importer dans app.js
export default headerComponent;