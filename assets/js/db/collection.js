const articles = {
        "sashimi": [
          {
            nom: "Sashimi de saumon",
            img: "sashimi_saumon.jpg",
            prix: 15,
            note: 4.5,
            temps_prepa: 10,
            categorie: "sashimi",
            ingredients: ["saumon", "wasabi", "gingembre"]
          },
          {
            nom: "Sashimi de thon",
            img: "sashimi_thon.jpg",
            prix: 18,
            note: 4.7,
            temps_prepa: 12,
            categorie: "sashimi",
            ingredients: ["thon", "sésame", "algue"]
          },
          {
            nom: "Sashimi de dorade",
            img: "sashimi_dorade.jpg",
            prix: 16,
            note: 4.3,
            temps_prepa: 11,
            categorie: "sashimi",
            ingredients: ["dorade", "citron", "herbes"]
          },
          {
            nom: "Sashimi de maquereau",
            img: "sashimi_maquereau.jpg",
            prix: 14,
            note: 4.1,
            temps_prepa: 9,
            categorie: "sashimi",
            ingredients: ["maquereau", "raifort", "radis"]
          },
          {
            nom: "Sashimi de bar",
            img: "sashimi_bar.jpg",
            prix: 17,
            note: 4.6,
            temps_prepa: 13,
            categorie: "sashimi",
            ingredients: ["bar", "citron vert", "coriandre"]
          },
          {
            nom: "Sashimi de coquille Saint-Jacques",
            img: "sashimi_saintjacques.jpg",
            prix: 20,
            note: 4.8,
            temps_prepa: 14,
            categorie: "sashimi",
            ingredients: ["coquille Saint-Jacques", "sauce soja", "wasabi"]
          },
          {
            nom: "Sashimi de carpe",
            img: "sashimi_carpe.jpg",
            prix: 15,
            note: 4.2,
            temps_prepa: 10,
            categorie: "sashimi",
            ingredients: ["carpe", "concombre", "menthe"]
          },
          {
            nom: "Sashimi de sole",
            img: "sashimi_sole.jpg",
            prix: 19,
            note: 4.9,
            temps_prepa: 12,
            categorie: "sashimi",
            ingredients: ["sole", "aneth", "huile d'olive"]
          },
          {
            nom: "Sashimi de mulet",
            img: "sashimi_mulet.jpg",
            prix: 13,
            note: 4.0,
            temps_prepa: 8,
            categorie: "sashimi",
            ingredients: ["mulet", "ail", "vinaigre"]
          },
          {
            nom: "Sashimi de turbot",
            img: "sashimi_turbot.jpg",
            prix: 18,
            note: 4.5,
            temps_prepa: 11,
            categorie: "sashimi",
            ingredients: ["turbot", "orange", "poivre"]
          }
        ],
        "sushi": [
          {
            nom: "Sushi au saumon",
            img: "sushi_saumon.jpg",
            prix: 12,
            note: 4.4,
            temps_prepa: 15,
            categorie: "sushi",
            ingredients: ["saumon", "riz", "algue"]
          },
          {
            nom: "Sushi au thon",
            img: "sushi_thon.jpg",
            prix: 14,
            note: 4.6,
            temps_prepa: 16,
            categorie: "sushi",
            ingredients: ["thon", "riz", "algue"]
          },
          {
            nom: "Sushi à la crevette",
            img: "sushi_crevette.jpg",
            prix: 11,
            note: 4.3,
            temps_prepa: 14,
            categorie: "sushi",
            ingredients: ["crevette", "riz", "algue"]
          },
          {
            nom: "Sushi à l'anguille",
            img: "sushi_anguille.jpg",
            prix: 20,
            note: 4.8,
            temps_prepa: 18,
            categorie: "sushi",
            ingredients: ["anguille", "riz", "algue"]
          },
          {
            nom: "Sushi végétarien",
            img: "sushi_vegetarien.jpg",
            prix: 10,
            note: 4.0,
            temps_prepa: 12,
            categorie: "sushi",
            ingredients: ["avocat", "concombre", "riz"]
          },
          {
            nom: "Sushi au maquereau",
            img: "sushi_maquereau.jpg",
            prix: 13,
            note: 4.2,
            temps_prepa: 15,
            categorie: "sushi",
            ingredients: ["maquereau", "riz", "algue"]
          },
          {
            nom: "Sushi au poulpe",
            img: "sushi_poulpe.jpg",
            prix: 16,
            note: 4.5,
            temps_prepa: 17,
            categorie: "sushi",
            ingredients: ["poulpe", "riz", "algue"]
          },
          {
            nom: "Sushi au crabe",
            img: "sushi_crabe.jpg",
            prix: 15,
            note: 4.4,
            temps_prepa: 16,
            categorie: "sushi",
            ingredients: ["crabe", "riz", "algue"]
          },
          {
            nom: "Sushi au saumon et avocat",
            img: "sushi_saumon_avocat.jpg",
            prix: 17,
            note: 4.7,
            temps_prepa: 15,
            categorie: "sushi",
            ingredients: ["saumon", "avocat", "riz"]
          },
          {
            nom: "Sushi au thon et ciboulette",
            img: "sushi_thon_ciboulette.jpg",
            prix: 18,
            note: 4.9,
            temps_prepa: 17,
            categorie: "sushi",
            ingredients: ["thon", "ciboulette", "riz"]
          }
        ],
        "maki": [
          {
            nom: "Maki au thon",
            img: "maki_thon.jpg",
            prix: 10,
            note: 4.2,
            temps_prepa: 20,
            categorie: "maki",
            ingredients: ["thon", "riz", "algue"]
          },
          {
            nom: "Maki au saumon",
            img: "maki_saumon.jpg",
            prix: 12,
            note: 4.4,
            temps_prepa: 22,
            categorie: "maki",
            ingredients: ["saumon", "riz", "algue"]
          },
          {
            nom: "Maki au crabe",
            img: "maki_crabe.jpg",
            prix: 11,
            note: 4.3,
            temps_prepa: 21,
            categorie: "maki",
            ingredients: ["crabe", "riz", "algue"]
          },
          {
            nom: "Maki végétarien",
            img: "maki_vegetarien.jpg",
            prix: 9,
            note: 4.0,
            temps_prepa: 18,
            categorie: "maki",
            ingredients: ["avocat", "concombre", "riz"]
          },
          {
            nom: "Maki au maquereau",
            img: "maki_maquereau.jpg",
            prix: 13,
            note: 4.1,
            temps_prepa: 23,
            categorie: "maki",
            ingredients: ["maquereau", "riz", "algue"]
          },
          {
            nom: "Maki au poulpe",
            img: "maki_poulpe.jpg",
            prix: 14,
            note: 4.5,
            temps_prepa: 24,
            categorie: "maki",
            ingredients: ["poulpe", "riz", "algue"]
          },
          {
            nom: "Maki au concombre",
            img: "maki_concombre.jpg",
            prix: 8,
            note: 3.8,
            temps_prepa: 17,
            categorie: "maki",
            ingredients: ["concombre", "riz", "algue"]
          },
          {
            nom: "Maki au fromage",
            img: "maki_fromage.jpg",
            prix: 10,
            note: 4.2,
            temps_prepa: 19,
            categorie: "maki",
            ingredients: ["fromage", "riz", "algue"]
          },
          {
            nom: "Maki au saumon et avocat",
            img: "maki_saumon_avocat.jpg",
            prix: 15,
            note: 4.7,
            temps_prepa: 22,
            categorie: "maki",
            ingredients: ["saumon", "avocat", "riz"]
          },
          {
            nom: "Maki au thon épicé",
            img: "maki_thon_epice.jpg",
            prix: 12,
            note: 4.4,
            temps_prepa: 21,
            categorie: "maki",
            ingredients: ["thon", "sauce épicée", "riz"]
          }
        ],
        "bento": [
          {
            nom: "Bento teriyaki",
            img: "bento_teriyaki.jpg",
            prix: 20,
            note: 4.8,
            temps_prepa: 25,
            categorie: "bento",
            ingredients: ["poulet", "riz", "légumes"]
          },
          {
            nom: "Bento sashimi",
            img: "bento_sashimi.jpg",
            prix: 22,
            note: 4.7,
            temps_prepa: 23,
            categorie: "bento",
            ingredients: ["saumon", "thon", "dorade"]
          },
          {
            nom: "Bento végétarien",
            img: "bento_vegetarien.jpg",
            prix: 18,
            note: 4.5,
            temps_prepa: 20,
            categorie: "bento",
            ingredients: ["tofu", "riz", "légumes"]
          },
          {
            nom: "Bento katsu",
            img: "bento_katsu.jpg",
            prix: 21,
            note: 4.9,
            temps_prepa: 26,
            categorie: "bento",
            ingredients: ["porc", "riz", "sauce katsu"]
          },
          {
            nom: "Bento tempura",
            img: "bento_tempura.jpg",
            prix: 19,
            note: 4.6,
            temps_prepa: 24,
            categorie: "bento",
            ingredients: ["crevettes", "légumes", "sauce tempura"]
          },
          {
            nom: "Bento yakitori",
            img: "bento_yakitori.jpg",
            prix: 23,
            note: 4.7,
            temps_prepa: 27,
            categorie: "bento",
            ingredients: ["poulet", "brochette", "riz"]
          },
          {
            nom: "Bento sushi",
            img: "bento_sushi.jpg",
            prix: 24,
            note: 4.8,
            temps_prepa: 28,
            categorie: "bento",
            ingredients: ["saumon", "thon", "crevette"]
          },
          {
            nom: "Bento chirashi",
            img: "bento_chirashi.jpg",
            prix: 25,
            note: 4.9,
            temps_prepa: 29,
            categorie: "bento",
            ingredients: ["saumon", "thon", "omelette"]
          },
          {
            nom: "Bento tonkatsu",
            img: "bento_tonkatsu.jpg",
            prix: 26,
            note: 4.8,
            temps_prepa: 30,
            categorie: "bento",
            ingredients: ["porc", "riz", "sauce tonkatsu"]
          },
          {
            nom: "Bento california",
            img: "bento_california.jpg",
            prix: 22,
            note: 4.7,
            temps_prepa: 26,
            categorie: "bento",
            ingredients: ["crabe", "avocat", "concombre"]
          }
        ],
        "autres": [
          {
            nom: "Tempura de crevettes",
            img: "tempura_crevettes.jpg",
            prix: 16,
            note: 4.6,
            temps_prepa: 18,
            categorie: "autres",
            ingredients: ["crevettes", "pâte", "sauce"]
          },
          {
            nom: "Gyoza",
            img: "gyoza.jpg",
            prix: 14,
            note: 4.4,
            temps_prepa: 16,
            categorie: "autres",
            ingredients: ["porc", "légumes", "pâte"]
          },
          {
            nom: "Edamame",
            img: "edamame.jpg",
            prix: 8,
            note: 4.0,
            temps_prepa: 10,
            categorie: "autres",
            ingredients: ["soja", "sel"]
          },
          {
            nom: "Takoyaki",
            img: "takoyaki.jpg",
            prix: 15,
            note: 4.5,
            temps_prepa: 17,
            categorie: "autres",
            ingredients: ["poulpe", "pâte", "sauce"]
          },
          {
            nom: "Sashimi de daurade",
            img: "sashimi_daurade.jpg",
            prix: 17,
            note: 4.7,
            temps_prepa: 19,
            categorie: "autres",
            ingredients: ["daurade", "citron", "herbes"]
          },
          {
            nom: "Yakitori",
            img: "yakitori.jpg",
            prix: 12,
            note: 4.3,
            temps_prepa: 14,
            categorie: "autres",
            ingredients: ["poulet", "brochette", "sauce"]
          },
          {
            nom: "Karaage",
            img: "karaage.jpg",
            prix: 13,
            note: 4.4,
            temps_prepa: 15,
            categorie: "autres",
            ingredients: ["poulet", "marinade", "friture"]
          },
          {
            nom: "Chawanmushi",
            img: "chawanmushi.jpg",
            prix: 16,
            note: 4.6,
            temps_prepa: 18,
            categorie: "autres",
            ingredients: ["œuf", "bouillon", "garnitures"]
          },
          {
            nom: "Onigiri",
            img: "onigiri.jpg",
            prix: 9,
            note: 4.1,
            temps_prepa: 11,
            categorie: "autres",
            ingredients: ["riz", "algue", "garniture"]
          },
          {
            nom: "Miso",
            img: "miso.jpg",
            prix: 7,
            note: 3.9,
            temps_prepa: 10,
            categorie: "autres",
            ingredients: ["pâte miso", "eau", "tofu"]
          }
        ]
      }