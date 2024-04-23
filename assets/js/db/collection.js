const articles = [
          {
            nom: "Sashimi de saumon",
            img: "./assets/images/sashimis/sashimi-saumon.jpg",
            prix: 15,
            note: 4.5,
            temps_prepa: 10,
            categorie: "sashimi",
            ingredients: ["saumon", "wasabi", "gingembre"]
          },
          {
            nom: "Sashimi de thon",
            img: "./assets/images/sashimis/sashimi-thon.jpg",
            prix: 18,
            note: 4.7,
            temps_prepa: 12,
            categorie: "sashimi",
            ingredients: ["thon", "sésame", "algue"]
          },
          {
            nom: "Sashimi de dorade",
            img: "./assets/images/sashimis/sashimi-dorade.jpg",
            prix: 16,
            note: 4.3,
            temps_prepa: 11,
            categorie: "sashimi",
            ingredients: ["dorade", "citron", "herbes"]
          },
          {
            nom: "Sashimi de maquereau",
            img: "./assets/images/sashimis/sashimi-maquereau.png",
            prix: 14,
            note: 4.1,
            temps_prepa: 9,
            categorie: "sashimi",
            ingredients: ["maquereau", "raifort", "radis"]
          },
          {
            nom: "Sashimi de bar",
            img: "./assets/images/sashimis/sashimi-Bar.jpg",
            prix: 17,
            note: 4.6,
            temps_prepa: 13,
            categorie: "sashimi",
            ingredients: ["bar", "citron vert", "coriandre"]
          },
          {
            nom: "Sashimi de coquille Saint-Jacques",
            img: "./assets/images/sashimis/sashimi-saint-jacques.jpg",
            prix: 20,
            note: 4.8,
            temps_prepa: 14,
            categorie: "sashimi",
            ingredients: ["coquille Saint-Jacques", "sauce soja", "wasabi"]
          },
          {
            nom: "Sashimi de carpe",
            img: "./assets/images/sashimis/sashimi-carpe.jpg",
            prix: 15,
            note: 4.2,
            temps_prepa: 10,
            categorie: "sashimi",
            ingredients: ["carpe", "concombre", "menthe"]
          },
          {
            nom: "Sashimi de sole",
            img: "./assets/images/sashimis/sashimi-sole.jpg",
            prix: 19,
            note: 4.9,
            temps_prepa: 12,
            categorie: "sashimi",
            ingredients: ["sole", "aneth", "huile d'olive"]
          },
          {
            nom: "Sashimi de mulet",
            img: "./assets/images/sashimis/sashimi-mulet.jpg",
            prix: 13,
            note: 4.0,
            temps_prepa: 8,
            categorie: "sashimi",
            ingredients: ["mulet", "ail", "vinaigre"]
          },
          {
            nom: "Sashimi de turbot",
            img: "./assets/images/sashimis/sashimi-turbot.jpg",
            prix: 18,
            note: 4.5,
            temps_prepa: 11,
            categorie: "sashimi",
            ingredients: ["turbot", "orange", "poivre"]
          },
        
          {
            nom: "Sushi au saumon",
            img: "./assets/images/sushis/sushi-saumon.jpg",
            prix: 12,
            note: 4.4,
            temps_prepa: 15,
            categorie: "sushi",
            ingredients: ["saumon", "riz", "algue"]
          },
          {
            nom: "Sushi au thon",
            img: "./assets/images/sushis/sushi-thon.jpg",
            prix: 14,
            note: 4.6,
            temps_prepa: 16,
            categorie: "sushi",
            ingredients: ["thon", "riz", "algue"]
          },
          {
            nom: "Sushi à la crevette",
            img: "./assets/images/sushis/sushi-crevette.jpg",
            prix: 11,
            note: 4.3,
            temps_prepa: 14,
            categorie: "sushi",
            ingredients: ["crevette", "riz", "algue"]
          },
          {
            nom: "Sushi à l'anguille",
            img: "./assets/images/sushis/sushi-anguilles.jpg",
            prix: 20,
            note: 4.8,
            temps_prepa: 18,
            categorie: "sushi",
            ingredients: ["anguille", "riz", "algue"]
          },
          {
            nom: "Sushi végétarien",
            img: "./assets/images/sushis/sushi-vege.jpeg",
            prix: 10,
            note: 4.0,
            temps_prepa: 12,
            categorie: "sushi",
            ingredients: ["avocat", "concombre", "riz"]
          },
          {
            nom: "Sushi au maquereau",
            img: "./assets/images/sushis/sushi-maquereau.jpg",
            prix: 13,
            note: 4.2,
            temps_prepa: 15,
            categorie: "sushi",
            ingredients: ["maquereau", "riz", "algue"]
          },
          {
            nom: "Sushi au poulpe",
            img: "./assets/images/sushis/sushi-poulpe.jpg",
            prix: 16,
            note: 4.5,
            temps_prepa: 17,
            categorie: "sushi",
            ingredients: ["poulpe", "riz", "algue"]
          },
          {
            nom: "Sushi au crabe",
            img: "./assets/images/sushis/sushi-crabe.jpg",
            prix: 15,
            note: 4.4,
            temps_prepa: 16,
            categorie: "sushi",
            ingredients: ["crabe", "riz", "algue"]
          },
          {
            nom: "Sushi au saumon et avocat",
            img: "./assets/images/sushis/sushi-saumon-avocat.png",
            prix: 17,
            note: 4.7,
            temps_prepa: 15,
            categorie: "sushi",
            ingredients: ["saumon", "avocat", "riz"]
          },
          {
            nom: "Sushi au thon et ciboulette",
            img: "./assets/images/sushis/sushi-thon.jpg",
            prix: 18,
            note: 4.9,
            temps_prepa: 17,
            categorie: "sushi",
            ingredients: ["thon", "ciboulette", "riz"]
          },
        
          {
            nom: "Maki au thon",
            img: "./assets/images/makis/maki-thon.jpg",
            prix: 10,
            note: 4.2,
            temps_prepa: 20,
            categorie: "maki",
            ingredients: ["thon", "riz", "algue"]
          },
          {
            nom: "Maki au saumon",
            img: "./assets/images/makis/maki-saumon.jpeg",
            prix: 12,
            note: 4.4,
            temps_prepa: 22,
            categorie: "maki",
            ingredients: ["saumon", "riz", "algue"]
          },
          {
            nom: "Maki au crabe",
            img: "./assets/images/makis/maki-crabe.jpg",
            prix: 11,
            note: 4.3,
            temps_prepa: 21,
            categorie: "maki",
            ingredients: ["crabe", "riz", "algue"]
          },
          {
            nom: "Maki végétarien",
            img: "./assets/images/makis/makis-vege.jpeg",
            prix: 9,
            note: 4.0,
            temps_prepa: 18,
            categorie: "maki",
            ingredients: ["avocat", "concombre", "riz"]
          },
          {
            nom: "Maki au maquereau",
            img: "./assets/images/makis/maki-maquereau.jpg",
            prix: 13,
            note: 4.1,
            temps_prepa: 23,
            categorie: "maki",
            ingredients: ["maquereau", "riz", "algue"]
          },
          {
            nom: "Maki au poulpe",
            img: "./assets/images/makis/maki-poulpe.jpg",
            prix: 14,
            note: 4.5,
            temps_prepa: 24,
            categorie: "maki",
            ingredients: ["poulpe", "riz", "algue"]
          },
          {
            nom: "Maki au concombre",
            img: "./assets/images/makis/maki-concombre.jpg",
            prix: 8,
            note: 3.8,
            temps_prepa: 17,
            categorie: "maki",
            ingredients: ["concombre", "riz", "algue"]
          },
          {
            nom: "Maki au fromage",
            img: "./assets/images/makis/maki-fromage.jpg",
            prix: 10,
            note: 4.2,
            temps_prepa: 19,
            categorie: "maki",
            ingredients: ["fromage", "riz", "algue"]
          },
          {
            nom: "Maki au saumon et avocat",
            img: "./assets/images/makis/maki-saumon-avocat.jpg",
            prix: 15,
            note: 4.7,
            temps_prepa: 22,
            categorie: "maki",
            ingredients: ["saumon", "avocat", "riz"]
          },
          {
            nom: "Maki au thon épicé",
            img: "./assets/images/makis/maki-épicé.jpg",
            prix: 12,
            note: 4.4,
            temps_prepa: 21,
            categorie: "maki",
            ingredients: ["thon", "sauce épicée", "riz"]
          },
          {
            nom: "Bento teriyaki",
            img: "./assets/images/bentos/teriyaki.jpg",
            prix: 20,
            note: 4.8,
            temps_prepa: 25,
            categorie: "bento",
            ingredients: ["poulet", "riz", "légumes"]
          },
          {
            nom: "Bento sashimi",
            img: "./assets/images/bentos/sashimi.jpg",
            prix: 22,
            note: 4.7,
            temps_prepa: 23,
            categorie: "bento",
            ingredients: ["saumon", "thon", "dorade"]
          },
          {
            nom: "Bento végétarien",
            img: "./assets/images/bentos/vege.jpg",
            prix: 18,
            note: 4.5,
            temps_prepa: 20,
            categorie: "bento",
            ingredients: ["tofu", "riz", "légumes"]
          },
          {
            nom: "Bento katsu",
            img: "./assets/images/bentos/kastu.jpg",
            prix: 21,
            note: 4.9,
            temps_prepa: 26,
            categorie: "bento",
            ingredients: ["porc", "riz", "sauce katsu"]
          },
          {
            nom: "Bento tempura",
            img: "./assets/images/bentos/tempura.png",
            prix: 19,
            note: 4.6,
            temps_prepa: 24,
            categorie: "bento",
            ingredients: ["crevettes", "légumes", "sauce tempura"]
          },
          {
            nom: "Bento yakitori",
            img: "./assets/images/bentos/Yakitori.jpg",
            prix: 23,
            note: 4.7,
            temps_prepa: 27,
            categorie: "bento",
            ingredients: ["poulet", "brochette", "riz"]
          },
          {
            nom: "Bento sushi",
            img: "./assets/images/bentos/sushi.jpg",
            prix: 24,
            note: 4.8,
            temps_prepa: 28,
            categorie: "bento",
            ingredients: ["saumon", "thon", "crevette"]
          },
          {
            nom: "Bento chirashi",
            img: "./assets/images/bentos/chirashi.jpg",
            prix: 25,
            note: 4.9,
            temps_prepa: 29,
            categorie: "bento",
            ingredients: ["saumon", "thon", "omelette"]
          },
          {
            nom: "Bento tonkatsu",
            img: "./assets/images/bentos/tonkatsu.jpg",
            prix: 26,
            note: 4.8,
            temps_prepa: 30,
            categorie: "bento",
            ingredients: ["porc", "riz", "sauce tonkatsu"]
          },
          {
            nom: "Bento california",
            img: "./assets/images/bentos/california.jpg",
            prix: 22,
            note: 4.7,
            temps_prepa: 26,
            categorie: "bento",
            ingredients: ["crabe", "avocat", "concombre"]
          },
          {
            nom: "Tempura de crevettes",
            img: "./assets/images/autres/tempura-crevettes.jpg",
            prix: 16,
            note: 4.6,
            temps_prepa: 18,
            categorie: "autres",
            ingredients: ["crevettes", "pâte", "sauce"]
          },
          {
            nom: "Gyoza",
            img: "./assets/images/autres/gyoza.jpg",
            prix: 14,
            note: 4.4,
            temps_prepa: 16,
            categorie: "autres",
            ingredients: ["porc", "légumes", "pâte"]
          },
          {
            nom: "Edamame",
            img: "./assets/images/autres/edamame.jpg",
            prix: 8,
            note: 4.0,
            temps_prepa: 10,
            categorie: "autres",
            ingredients: ["soja", "sel"]
          },
          {
            nom: "Takoyaki",
            img: "./assets/images/autres/takoyaki.jpg",
            prix: 15,
            note: 4.5,
            temps_prepa: 17,
            categorie: "autres",
            ingredients: ["poulpe", "pâte", "sauce"]
          },
          {
            nom: "Sashimi de daurade",
            img: "./assets/images/autres/sashimi-daurade.jpg",
            prix: 17,
            note: 4.7,
            temps_prepa: 19,
            categorie: "autres",
            ingredients: ["daurade", "citron", "herbes"]
          },
          {
            nom: "Yakitori",
            img: "./assets/images/autres/yakitori.jpg",
            prix: 12,
            note: 4.3,
            temps_prepa: 14,
            categorie: "autres",
            ingredients: ["poulet", "brochette", "sauce"]
          },
          {
            nom: "Karaage",
            img: "./assets/images/autres/karaage.jpg",
            prix: 13,
            note: 4.4,
            temps_prepa: 15,
            categorie: "autres",
            ingredients: ["poulet", "marinade", "friture"]
          },
          {
            nom: "Chawanmushi",
            img: "./assets/images/autres/Chawanmushi.jpg",
            prix: 16,
            note: 4.6,
            temps_prepa: 18,
            categorie: "autres",
            ingredients: ["œuf", "bouillon", "garnitures"]
          },
          {
            nom: "Onigiri",
            img: "./assets/images/autres/onigiri.jpg",
            prix: 9,
            note: 4.1,
            temps_prepa: 11,
            categorie: "autres",
            ingredients: ["riz", "algue", "garniture"]
          },
          {
            nom: "Miso",
            img: "./assets/images/autres/Miso.jpg",
            prix: 7,
            note: 3.9,
            temps_prepa: 10,
            categorie: "autres",
            ingredients: ["pâte miso", "eau", "tofu"]
          }
        ]

export default articles;
