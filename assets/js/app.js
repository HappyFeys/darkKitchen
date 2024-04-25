// Contenu de app.js
import headerComponent from './component/header.js';
import mainComponent from './component/main.js';
import cartComponent from './component/cart.js';
import produits from "./db/collection.js";
import sort from './component/sort.js';
console.log(produits);

// Maintenant vous pouvez utiliser le fichier importé ici
headerComponent();
mainComponent();
sort();
cartComponent();



// Maintenant vous pouvez utiliser le fichier importé ici


import toggleBurgerMenu from './component/burgerMenu.js';

toggleBurgerMenu();

import switchMode from './component/darkmode.js';

switchMode();