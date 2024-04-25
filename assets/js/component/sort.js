import articles from '../db/collection.js';
import mainComponent from './main.js';

const btnFilter = document.querySelector("#searchBar__btnFilter");
const filterToggle = document.querySelector(".btnFilter--toggle")
const btnCategorie = document.querySelectorAll(".btnFilter--cate");
const home__menu = document.querySelector("#home__menu");

const sort = () => {
    btnFilter.addEventListener('click', () => {
        let computedStyle = window.getComputedStyle(filterToggle);
        if(computedStyle.display=="none"){
            filterToggle.style.display="flex"
        } else filterToggle.style.display="none"
    })
    
    for (let i = 0; i < btnCategorie.length; i++) {
        let copiedArticles = articles.slice()
        let articleCate = [];
        let htmlArticle = document.querySelectorAll('article');
        btnCategorie[i].addEventListener('click', () =>{

            for (let j = 0; j < articles.length; j++) {
                const element = articles[j];
                if (btnCategorie[i].innerText.toLowerCase() !== element.categorie) {
                    htmlArticle[j].style.display = "none";
                    console.log(element.categorie);
                    if(btnCategorie[i].innerText.toLowerCase() == "tout voir"){
                        htmlArticle[j].style.display = "block";
                    }
                }
                
                else {
                    htmlArticle[j].style.display = "block";
                }
                
            }
            

        //     home__menu.innerHTML="";
        //     for (let element of copiedArticles) {
        //         if (element.categorie == btnCategorie[i].innerText.toLowerCase()) {
        //             articleCate.push(element)
        //             // console.log(articleCate);
                    
        //             //fonction qui crée les cartes
        //         } else continue
        //     }
        //     if(btnCategorie[i].innerText.toLowerCase()=="tout voir"){
        //         articleCate = copiedArticles.slice()
        //     }
        //     console.log(articleCate);
        //     // return articleCate, copiedArticles
            
        //     let produits = articleCate
        //     let main = document.querySelector("main");
        //     for (let i = 0; i < produits.length; i++) {
            
        //     const produit = produits[i];
  
        //     //creation des cartes articles
        //     let articles = document.createElement("article");
        //     let articleTitle = document.createElement("h2");
        //     let articleImage = document.createElement("div");
        //     articleImage.classList.add("picture-div");
        //     articles.classList.add(produit.id);
        //     //Ajout des données dans la carte
        //     articleTitle.textContent = produit.nom;
        //     articleImage.style.backgroundImage = `url(${produit.img})`;
        
        //     articles.appendChild(articleImage);
        //     //ajout des articles dans la main
        //     home__menu.appendChild(articles);
        
        //     let articleDataContainer = document.createElement("div");
        //     articleDataContainer.className = "articles__data-container";
        //     articles.appendChild(articleDataContainer);
        
        //     let buyButtonContainer = document.createElement('div');
        //     buyButtonContainer.className = "buy-btn-container";
        //     articleImage.appendChild(buyButtonContainer);
        
        //     let absoluteButton = document.createElement('button');
        //     absoluteButton.setAttribute('id', `buy-btn-${produit.id}`);
        //     absoluteButton.innerText = "Ajouter au panier";
        //     absoluteButton.className = "buy-btn";
        //     buyButtonContainer.appendChild(absoluteButton);
        
        //     articleDataContainer.appendChild(articleTitle);
        
        
        //     let articlePrice = document.createElement('h4');
        //     articlePrice.innerText = `${produit.prix} €`;
        //     articlePrice.className = "articles__data-container__price";
        //     articleDataContainer.appendChild(articlePrice);
        
        //     let articleInfoData = document.createElement('div');
        //     articleInfoData.className = "articles__data-container__info-container";
        //     articleDataContainer.appendChild(articleInfoData);
        
        
        //     let articleNote = document.createElement('h4');
        //     articleNote.innerText = `${produit.note}`;
        //     articleNote.className = "articles__data-container__note";
        //     articleInfoData.appendChild(articleNote);
        
        //     let articlePrepTime = document.createElement('h4');
        //     articlePrepTime.innerText = `${produit.temps_prepa} minutes`;
        //     articlePrepTime.className = "articles__data-container__prepTime";
        //     articleInfoData.appendChild(articlePrepTime);
        
        //     let articleIngredientsContainer = document.createElement('div');
        //     articleIngredientsContainer.className = "articles__data-container__ingredients-container";
        //     articleDataContainer.appendChild(articleIngredientsContainer);
        
        //     for (const ingredient of produits[i].ingredients) {
        //         let ingredientElement = document.createElement('h5');
        //         ingredientElement.className = "articles__data-container__ingredients-container__ingredient";
        //         ingredientElement.innerHTML = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        //         articleIngredientsContainer.appendChild(ingredientElement);
        //     }
        // }
    })


    
}


}



export default sort;
console.log(articles[0].id);
