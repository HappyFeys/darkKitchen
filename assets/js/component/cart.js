import produits from "../db/collection.js";

produits;

const cartComponent = () => {
  let cart = [];
  let articles = document.querySelectorAll("article");
  let addToCartButton = document.querySelectorAll(".buy-btn");
  const cart__orderList = document.getElementById("cart__orderList");

  let order_number = document.getElementById("cart__orderNumber_h2");
  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  console.log();

  order_number.innerText = `Numéro de commande : ${Math.floor(
    random(1000, 10000)
  )}`;
  let order = document.getElementById("cart__orderNumber");
  let order_numberDate = order.querySelector("p");
  let date = new Date();

  // Ajoutez une heure à la date actuelle
  date.setHours(date.getHours() + 1);

  let options = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  };

  let heure = date.toLocaleTimeString(undefined, options);

  order_numberDate.innerHTML = `<span id="cart__orderDate">Livraison autour de </span> ${heure}`;
  //ajout de chaque élements dans le tableau cart lors du click
  for (let i = 0; i < articles.length; i++) {
    addToCartButton[i].addEventListener("click", () => {
      
      //Ajout d'une animation sur l'icone du panier
      let iconcCartShopping = document.querySelector(".fa-cart-shopping");
      let color = iconcCartShopping.style.color;
      iconcCartShopping.style.color = "red";
      iconcCartShopping.style.transform = "scale(1.1)";
      setTimeout(() => {
        iconcCartShopping.style.color = color;
        iconcCartShopping.style.transform = "scale(1)";
      }, 200);

      //Ajout d'article dans le panier
      cart__orderList.innerHTML = "";
      const articles = document.querySelectorAll("article");
      if (cart.length > 0) {
        let itemContent = false;
        for (let j = 0; j < cart.length; j++) {
          /*
                vérifie si l'article est déjà présent pour incrémenter la quantité,
                pour pas surcharger le panier.
                */

          if (cart.includes(produits[i])) {
            const a = cart.indexOf(produits[i]);

            cart[a].quantité += 1;
            console.log(cart[a].quantité);
            itemContent = true;
          }
          break;
        }
        if (!itemContent) {
          cart.push(produits[i]);
        }
      } else {
        cart.push(produits[i]);
      }
      console.log(cart);
      createCart(cart);
    });

    let sousTotal = [];
    let initialValue = 0;

    


    function createCart(array) {
      let sousTotal = [];
      for (let i = 0; i < array.length; i++) {
        
        let element = array[i];

        sousTotal.push(element.prix * element.quantité);
        console.log(sousTotal);
        let totalValue = sousTotal.reduce((a, b) => a + b, initialValue);

        if (i === array.length - 1) {
          //On affiche le prix total
          document.getElementById(
            "cart__orderTotal"
          ).innerHTML = `<h2>Total pour tous les articles : ${totalValue} €</h2>`;
        }

        //création des élement
        let cartArticle = document.createElement("article");

        let data_img = document.createElement("div");
        let data_article = document.createElement("div");
        let title = document.createElement("h2");
        let quantity = document.createElement("div");
        let price = document.createElement("h2");

        //ajout de class
        data_img.classList.add("picture-div");
        cartArticle.classList.add("cart-article", element.id);
        data_article.classList.add("data_article");
        title.classList.add("title_article");
        quantity.classList.add("quantity_article");
        price.classList.add("price_article");

        //Ajout des données dans la carte
        data_img.style.backgroundImage = `url(${element.img})`;
        title.textContent = element.nom;
        quantity.innerHTML = `
                <button class="remove">-</button>
                <h2>Quantité : ${element.quantité}</h2>
                <button class="add">+</button>
                `;
        price.textContent = `Total : ${element.prix * element.quantité} €`;

        //Ajout des élement dans le dom
        data_article.appendChild(price);
        data_article.appendChild(quantity);
        cartArticle.appendChild(data_img);
        cartArticle.appendChild(title);
        cartArticle.appendChild(data_article);
        cart__orderList.appendChild(cartArticle);
      }

      let quantity_data = document.querySelectorAll('.quantity_article');
      let remove = document.querySelectorAll('.remove');
      let add = document.querySelectorAll('.add');
      for (let i = 0; i < add.length; i++) {
          add[i].addEventListener('click', () => {
              // augmente la quantité
              array[i].quantité++;
      
              // Met à jour la quantité
              let h2 = quantity_data[i].querySelector('h2');
              h2.textContent = `Quantité : ${array[i].quantité}`;
      
              // Met à jour le prix de l'item
              let totalPrice = array[i].prix * array[i].quantité;
              let priceElement = quantity_data[i].parentNode.querySelector('.price_article');
              priceElement.textContent = `Total : ${totalPrice} €`;
      
              // Met à jour le pannier
              sousTotal.push(array[i].prix);
              let totalValue = sousTotal.reduce((a, b) => a + b, 0);
              
              document.getElementById('cart__orderTotal').innerHTML = `<h2>Total pour tous les articles : ${totalValue} €</h2>`;
              
          });
        }
        let verif = 0;
        for (let i = 0; i < remove.length; i++) {
          remove[i].addEventListener('click', () => {
              // augmente la quantité
              console.log(i);
              array[i].quantité--;
              console.log(array);
              
      
              // Met à jour la quantité
              let h2 = quantity_data[i].querySelector('h2');
              h2.textContent = `Quantité : ${array[i].quantité}`;
      
              // Met à jour le prix de l'item
              let totalPrice = array[i].prix * array[i].quantité;
              let priceElement = quantity_data[i].parentNode.querySelector('.price_article');
              priceElement.textContent = `Total : ${totalPrice} €`;
      
              // Met à jour le pannier
              sousTotal.pop();
              let totalValue = sousTotal.reduce((a, b) => a + b, 0);
              
              document.getElementById('cart__orderTotal').innerHTML = `<h2>Total pour tous les articles : ${totalValue} €</h2>`;
              
              if (array[i].quantité < 1) {
                  //reinitialise la quantité
                  array[i].quantité = 1;
                   //supprime l'article
                  array.splice(i,1);
                  //réinitialise le prix total
                  sousTotal = []
                  //réinitialise le panier          
                  cart__orderList.innerHTML = '';
                  //met à jour le tableau
                  createCart(array)
              }
          });
        }
      
    }
  }
  

  

  let toggle_cart = 0;
  const nav__iconPanier = document.getElementById("nav__iconPanier");
  const cartContainer = document.getElementById("cart");
  const home__menu = document.getElementById("home__menu");
  nav__iconPanier.addEventListener("click", () => {
    if (toggle_cart === 0) {
      cartContainer.style.display = "block";
      home__menu.style.display = "none";
      toggle_cart += 1;
    } else {
      cartContainer.style.display = "none";
      home__menu.style.display = "block";
      toggle_cart -= 1;
    }
  });


  
};

//Pour importer dans app.js
export default cartComponent;
