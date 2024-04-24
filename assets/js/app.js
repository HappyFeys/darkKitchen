// Contenu de app.js
import headerComponent from './component/header.js';
import mainComponent from './component/main.js';
import cartComponent from './component/cart.js';
import produits from "./db/collection.js";

console.log(produits);

// Maintenant vous pouvez utiliser le fichier importé ici
headerComponent();
mainComponent();
cartComponent();

import sort from './component/sort.js';

// Maintenant vous pouvez utiliser le fichier importé ici
sort();
