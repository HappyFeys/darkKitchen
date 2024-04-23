import produits from '../db/collection.js';



produits;

const mainComponent = () => {
    let main = document.querySelector('main');
   for (let i = 0; i < produits.length; i++) {
    const produit = produits[i];

    //creation des cartes articles
    let articles = document.createElement('article');
    let articleTitle = document.createElement('h2');
    let articleImage = document.createElement('div');
    articleImage.classList.add('picture-div');

    //Ajout des données dans la carte
    articleTitle.textContent = produit.nom;
    articleImage.style.backgroundImage = `url(${produit.img})`;

    articles.appendChild(articleImage);
    articles.appendChild(articleTitle);
    //ajout des articles dans la main
    main.appendChild(articles);
    
   }

}

//Pour importer dans app.js
export default mainComponent;