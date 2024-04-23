import produits from "../db/collection.js";

produits;

const mainComponent = () => {
  let main = document.querySelector("main");
  for (let i = 0; i < produits.length; i++) {
    const produit = produits[i];

    //creation des cartes articles
    let articles = document.createElement("article");
    let articleTitle = document.createElement("h2");
    let articleImage = document.createElement("div");
    articleImage.classList.add("picture-div");

    //Ajout des données dans la carte
    articleTitle.textContent = produit.nom;
    articleImage.style.backgroundImage = `url(${produit.img})`;

    


    articles.appendChild(articleImage);
    articles.appendChild(articleTitle);
    //ajout des articles dans la main
    main.appendChild(articles);

    let articleDataContainer = document.createElement("div");
    articleDataContainer.className = "articles__data-container";
    articles.appendChild(articleDataContainer);

    let articlePrice = document.createElement('h4');
    articlePrice.innerText = `${produit.prix} €`;
    articlePrice.className = "articles__data-container__price";
    articleDataContainer.appendChild(articlePrice);

    let articleNote = document.createElement('h4');
    articleNote.innerText = `${produit.note}`;
    articleNote.className = "articles__data-container__Note";
    articleDataContainer.appendChild(articleNote);

    let articlePrepTime = document.createElement('h4');
    articlePrepTime.innerText = `${produit.temps_prepa} minutes`;
    articlePrepTime.className = "articles__data-container__prepTime";
    articleDataContainer.appendChild(articlePrepTime);

    let articleCategorie = document.createElement('h4');
    articleCategorie.innerText = `${produit.categorie}`;
    articleCategorie.className = "articles__data-container__categorie";
    articleDataContainer.appendChild(articleCategorie);

  }
};

//Pour importer dans app.js
export default mainComponent;
