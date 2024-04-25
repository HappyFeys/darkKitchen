const switchMode = () => {
  const toggleDarkMode = document.getElementById("switchToggle");

  const mainCssFile = document.getElementById("mainCssFile");

  const cartCssFile = document.getElementById('cartCssFile');

  toggleDarkMode.addEventListener("click", () => {    
    console.log(document.body.classList.contains('light-mode'));

    if (document.body.classList.contains('light-mode')) {
        mainCssFile.href = "./assets/css/darkmodeMain.css";
        cartCssFile.href = "./assets/css/darkmodePanier.css"
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else if (document.body.classList.contains('dark-mode')) {
        mainCssFile.href = "./assets/css/main.css";
        cartCssFile.href = "./assets/css/panier.css"
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
  });
};

export default switchMode;