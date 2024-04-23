import produits from '../db/collection.js';



produits;

const mainComponent = () => {
    let main = document.querySelector('main');
    for (const type in produits) {
        if (produits.hasOwnProperty(type)) {
            produits[type].forEach(produit => {
                //creation de l'html
                let article = document.createElement('article');

                //ajout de l'image dans la carte
                let articleImage = document.createElement('div');
                articleImage.style.backgroundImage = `url(${produit.image})`; 

                //ajout du titre dans la carte
                let articleTitle = document.createElement('h2');
                articleTitle.textContent = produit.nom;
                
                
                article.appendChild(articleImage);
                article.appendChild(articleTitle);
                
                main.appendChild(article);
            });
        }
    }

}

//Pour importer dans app.js
export default mainComponent;