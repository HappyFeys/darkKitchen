import produits from '../db/collection.js';



produits;

const mainComponent = () => {
    let main = document.querySelector('main');
    for (const type in produits) {
        if (produits.hasOwnProperty(type)) {
            for (let i = 0; i < produits[type].length; i++) {
                let produit = produits[type][i];
                main.appendChild(document.createElement('article'));
                let article = document.querySelectorAll("article");
                article[i].innerHTML = `<h2>${produit.nom}</h2>`
                
            }
        }
    }

}

//Pour importer dans app.js
export default mainComponent;