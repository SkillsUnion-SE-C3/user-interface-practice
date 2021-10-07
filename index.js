mushrooms = [
  {
    name: "Procini",
    edible: true,
    image: "images/porcini.jpg",
    description: "Boletus edulis–known as porcini, cep, Steinpilz, or penny bun mushrooms–is an edible mushroom that can be found fresh or dried. Porcini mushrooms are utilized for their earthy, meaty flavor in recipes for Italian pasta and rice dishes, soups and sauces, and savory specialties like risotto."
  },
  {
    name: "Chanterelle",
    edible: true,
    image: "images/chanterelle.jpg",
    description: "Chanterelle mushrooms (Cantharellus cibarius), or golden chanterelles, are probably the most well known wild edible mushrooms. Chefs and foodies love their delicate flavor -- it's sometimes described as mildly peppery. They range in color from yellow to deep orange, which makes them easy to spot in the summer forest."
  },
  {
    name: "Morel",
    edible: true,
    image: "images/morel.jpg",
    description: "Morel mushrooms, or just morels, are a highly desired ingredient among chefs and mushroom enthusiasts. Morels vary greatly in size and appearance. Their shape can range from oblong to bulbous, and their color from blonde to gray. They are easy to distinguish by their exterior, which resembles a honeycomb. The inside of a morel is white and hollow."
  },
  {
    name: "Fly agaric",
    edible: false ,
    image: "images/fly-agaric.jpg",
    description: "Famous, enchanting and highly toxic. Fly agaric is the home of fairies and magical creatures and a lover of birch woodland, where it helps trees by transferring nutrients into their roots, but if eaten can cause hallucinations and psychotic reactions."
  },
  {
    name: "Oyster",
    edible: true,
    image: "images/oyster.jpg",
    description: "The oyster mushroom is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It has the bittersweet aroma of benzaldehyde (which is also characteristic of bitter almonds)."
  },
]

// Navigation

const menuButton = document.querySelector('.burger-menu')
const expandedNav = document.querySelector('.expanded-nav')

function toggleNav () {
  if(expandedNav.style.display === "flex") {
    expandedNav.style.display = "none"
  } else {
    expandedNav.style.display = "flex"
  }
}

menuButton.addEventListener('click', toggleNav)


//Slider

const rightButton = document.querySelector('#right-button')
const leftButton = document.querySelector('#left-button')
const mushroomName = document.querySelector('.name')
const mushroomImage = document.querySelector('.image')

let currentMushroom = 0

const updateSlide = function() {
  mushroomName.innerText = mushrooms[currentMushroom].name
  mushroomImage.src = mushrooms[currentMushroom].image
}

const moveRight = function () {
  if (currentMushroom === mushrooms.length - 1) {
    currentMushroom = 0 
  } else {
    currentMushroom ++
  }

  updateSlide()
}

const moveLeft = function () {
  if (currentMushroom === 0) {
    currentMushroom = mushrooms.length -1 
  } else {    
    currentMushroom --
  }

  updateSlide()
}

leftButton.addEventListener('click', moveLeft)
rightButton.addEventListener('click', moveRight)

updateSlide()

//Lists

const edibleList = document.querySelector('#edible')
const poisonousList = document.querySelector('#poisonous')

for (let i = 0; i<mushrooms.length; i++) {
  const mushroom = mushrooms[i]

  if (mushroom.edible) {
    edibleList.innerHTML += `<li>${mushroom.name}</li>`
  } else {
    poisonousList.innerHTML += `<li>${mushroom.name}</li>`
  }
}


//Accordion

const accordion = document.querySelector('.accordion')

const toggleDescription = function (index) {
  description = document.querySelector(`#mushroom-${index}`)
  if (description.style.display === "none") {
    description.style.display = 'block'
  } else {
    description.style.display = 'none'
  }
}

for(let i = 0; i < mushrooms.length; i++) {
  const mushroom = mushrooms[i]

  const accordionItem = document.createElement('div')
  accordionItem.className = "accordion-item"
  accordionItem.innerHTML = `
    <h3>${mushroom.name}</h3>
    <p style="display: none" id=mushroom-${i}>${mushroom.description}</p>
  `
  accordionItem.addEventListener(`click`, function () {
    toggleDescription(i)
  })

  accordion.append(accordionItem)
}
document.querySelector('#submit').addEventListener('click', () => {
  mushrooms.push({
    name: document.querySelector("#name-input").value,
    description: document.querySelector("#description-input").value,
    edible: document.querySelector("#edible-input").checked,
    image: document.querySelector("#image-input").value
  })
})
