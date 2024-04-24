import produits from "../db/collection.js";

produits;

const cartComponent = () => {
  let cart = [];
  let articles = document.querySelectorAll('article');
  let addToCartButton = document.querySelectorAll('.buy-btn');
  //ajout de chaque élements dans le tableau cart lors du click
  for (let i = 0; i < articles.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
        const articles = document.querySelectorAll('article');
        if (cart.length > 0) {
            cart.forEach(element => {
                /*
                vérifie si l'article est déjà présent pour incrémenter la quantité,
                pour pas surcharger le panier.
                */
                if (!element.nom.includes(articles[i].classList[0])) {
                    element.quantité += 1;
                }
                else {
                    cart.push(produits[articles[i].classList[0] - 1]);
                }
            });
        }else {
            cart.push(produits[articles[i].classList[0] - 1]);
        }
    })   
  }

  const nav__iconPanier = document.querySelector('#nav__iconPanier');
  nav__iconPanier.addEventListener('click', () => {
    nav__iconPanier.style.display = 'block';
  })


};

//Pour importer dans app.js
export default cartComponent;
