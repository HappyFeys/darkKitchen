import produits from "../db/collection.js";

produits;

const cartComponent = () => {
  let cart = [];
  let articles = document.querySelectorAll('article');
  let addToCartButton = document.querySelectorAll('.buy-btn');
  const cart__orderList = document.getElementById("cart__orderList");
  //ajout de chaque élements dans le tableau cart lors du click
  for (let i = 0; i < articles.length; i++) {
    addToCartButton[i].addEventListener('click', () => {
        cart__orderList.innerHTML = "";
        const articles = document.querySelectorAll('article');
        if (cart.length > 0) {
            let itemContent = false;
            for (let j = 0; j < cart.length; j++) {
                /*
                vérifie si l'article est déjà présent pour incrémenter la quantité,
                pour pas surcharger le panier.
                */
               
               if(cart.includes(produits[i])){
                    const a = cart.indexOf(produits[i]);
      
                    cart[a].quantité += 1;
                    console.log(cart[a].quantité);
                    itemContent = true;
                   
                }
                break
            }    
            if (!itemContent) {
                cart.push(produits[i]);
            }
        }else {
            cart.push(produits[i]);
        }
        console.log(cart);
        
        let total=0;

        cart.forEach(element => {
            //création des élement
            let achats = document.createElement("article");

            let articlequantity = document.createElement('div');
            let achatTitle = document.createElement("h2");
            let achatImage = document.createElement("div");
            achatImage.classList.add("picture-div");
    
            achats.classList.add(element.id);
    
            //Ajout des données dans la carte
            achatTitle.textContent = element.nom;
            achatImage.style.backgroundImage = `url(${element.img})`;
    
            achats.appendChild(achatImage);
            achats.appendChild(achatTitle);
            cart__orderList.appendChild(achats);
        });
    })   
  }
  
  let toggle_cart = 0;
  const nav__iconPanier = document.getElementById('nav__iconPanier');
  const cartContainer = document.getElementById('cart');
  const home__menu = document.getElementById('home__menu');
  nav__iconPanier.addEventListener('click', () => {
    if (toggle_cart === 0) {
        cartContainer.style.display = "block";
        home__menu.style.display = "none";
        toggle_cart += 1;
    }else {
        cartContainer.style.display = "none";
        home__menu.style.display = "block";
        toggle_cart -= 1;
    }
  })

};

//Pour importer dans app.js
export default cartComponent;


