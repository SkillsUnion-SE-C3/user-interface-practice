const mushrooms = [
  {
    name: "Procini",
    edible: true,
    image: "images/porcini.jpg",
    description:
      "Boletus edulis–known as porcini, cep, Steinpilz, or penny bun mushrooms–is an edible mushroom that can be found fresh or dried. Porcini mushrooms are utilized for their earthy, meaty flavor in recipes for Italian pasta and rice dishes, soups and sauces, and savory specialties like risotto."
  },
  {
    name: "Chanterelle",
    edible: true,
    image: "images/chanterelle.jpg",
    description:
      "Chanterelle mushrooms (Cantharellus cibarius), or golden chanterelles, are probably the most well known wild edible mushrooms. Chefs and foodies love their delicate flavor -- it's sometimes described as mildly peppery. They range in color from yellow to deep orange, which makes them easy to spot in the summer forest."
  },
  {
    name: "Morel",
    edible: true,
    image: "images/morel.jpg",
    description:
      "Morel mushrooms, or just morels, are a highly desired ingredient among chefs and mushroom enthusiasts. Morels vary greatly in size and appearance. Their shape can range from oblong to bulbous, and their color from blonde to gray. They are easy to distinguish by their exterior, which resembles a honeycomb. The inside of a morel is white and hollow."
  },
  {
    name: "Fly agaric",
    edible: false,
    image: "images/fly-agaric.jpg",
    description:
      "Famous, enchanting and highly toxic. Fly agaric is the home of fairies and magical creatures and a lover of birch woodland, where it helps trees by transferring nutrients into their roots, but if eaten can cause hallucinations and psychotic reactions."
  },
  {
    name: "Oyster",
    edible: true,
    image: "images/oyster.jpg",
    description:
      "The oyster mushroom is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It has the bittersweet aroma of benzaldehyde (which is also characteristic of bitter almonds)."
  }
];
const Mushroom = class {
  constructor(name, description, image, edible) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.edible = edible;
  }
};

const burgerNav = document.querySelector(".expanded-nav");
document.querySelector(".burger-menu").addEventListener("click", (event) => {
  if (burgerNav.style.display === "none") {
    burgerNav.style.display = "flex";
  } else {
    burgerNav.style.display = "none";
  }
});

const currentImage = document.querySelector(".image");
const currentName = document.querySelector(".name");
currentImage.src = mushrooms[0].image;
currentName.textContent = mushrooms[0].name;
let n = 0;
document
  .querySelector(".control-buttons")
  .addEventListener("click", (event) => {
    if (event.target.id === "right-button") {
      n += 1;
      if (n < mushrooms.length) {
        currentImage.src = mushrooms[n].image;
        currentName.textContent = mushrooms[n].name;
      } else {
        n = 0;
        currentImage.src = mushrooms[n].image;
        currentName.textContent = mushrooms[n].name;
      }
    } else {
      n -= 1;
      if (n >= 0) {
        currentImage.src = mushrooms[n].image;
        currentName.textContent = mushrooms[n].name;
      } else {
        n = mushrooms.length - 1;
        currentImage.src = mushrooms[n].image;
        currentName.textContent = mushrooms[n].name;
      }
    }
  });

function mushroomEdible() {
  const edibleList = document.querySelector("#edible");
  const poisonousList = document.querySelector("#poisonous");
  edibleList.innerHTML = "";
  poisonousList.innerHTML = "";
  mushrooms.forEach((mushroom) => {
    const listItem = document.createElement("li");
    listItem.textContent = mushroom.name;
    if (mushroom.edible === true) {
      edibleList.appendChild(listItem);
    } else {
      poisonousList.appendChild(listItem);
    }
  });
}

function mushroomInfo() {
  const mushDiv = document.querySelector(".accordion");
  mushDiv.innerHTML = "";
  mushrooms.forEach((mushroom) => {
    const mushButton = document.createElement("h3");
    const mushDescription = document.createElement("p");
    const mushSpan = document.createElement("span");
    mushDiv.appendChild(mushSpan);
    mushDiv.appendChild(mushButton);
    mushDiv.appendChild(mushDescription);
    mushDescription.style.display = "none";
    mushButton.textContent = mushroom.name;
    mushDescription.textContent = mushroom.description;
    mushButton.addEventListener("click", () => {
      if (mushDescription.style.display === "none") {
        mushDescription.style.display = "block";
      } else {
        mushDescription.style.display = "none";
      }
    });
  });
}

const formSubmit = document.querySelector("#submit");
formSubmit.addEventListener("click", () => {
  let newMushroom = new Mushroom();
  const nameInput = document.querySelector("#name-input");
  const descriptionInput = document.querySelector("#description-input");
  const imageInput = document.querySelector("#image-input");
  const edibleInput = document.querySelector("#edible-input");
  newMushroom.name = nameInput.value;
  newMushroom.description = descriptionInput.value;
  newMushroom.image = imageInput.value;
  newMushroom.edible = edibleInput.checked;
  mushrooms.push(newMushroom);
  nameInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
  edibleInput.checked = false;

  mushroomInfo();
  mushroomEdible();
});

mushroomInfo();
mushroomEdible();
