const switchMode = () => {
  const toggleDarkMode = document.getElementById("switchToggle");

  const mainCssFile = document.getElementById("mainCssFile");

  const cartCssFile = document.getElementById('cartCssFile');
  let switchMode = 0;
  toggleDarkMode.addEventListener("click", () => {    
    console.log(document.body.classList.contains('light-mode'));

    if (document.body.classList.contains('light-mode')) {
        mainCssFile.href = "./assets/css/darkmodeMain.css";
        cartCssFile.href = "./assets/css/darkmodeCart.css"
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else if (document.body.classList.contains('dark-mode')) {
        mainCssFile.href = "./assets/css/main.css";
        cartCssFile.href = "./assets/css/panier.css"
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }

    const darkModeButton = document.querySelector('.fa-rotate');
    
    if (switchMode === 0) {
      darkModeButton.style.transform = 'rotate(90deg)';
      switchMode = 1;
    }
    else{
      darkModeButton.style.transform = 'rotate(180deg)';
      switchMode = 0;
    }
  });
};

export default switchMode;