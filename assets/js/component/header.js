import articles from "../db/collection.js";

articles;

const headerComponent = () => {
  const header = document.querySelector("header");

  let categories = ["tous"];
  console.log(articles);
  console.log(categories);
  for (let i = 0; i < categories.length; i++) {
    const categorie = categories[i];
    header.appendChild(document.createElement("button"));
    let buttons = document.querySelectorAll("button");
    buttons[i].innerText = categorie;
  }
};

//Pour importer dans app.js
export default headerComponent;
