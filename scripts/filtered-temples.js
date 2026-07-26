const today = new Date();
const currentYear = today.getFullYear();
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('nav');
const para = document.querySelector('p');


document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;
hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
    para.classList.toggle('open');

});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Harare Zimbabwe",
    location: "Harare, Zimbabwe",
    dedicated: "2026, March, 1",
    area: 17247,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-67717-main.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24-25",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26-27",
    area: 51921,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  }
];

createTempleCard(temples);
const homeLink = document.querySelector(".active")
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


function createTempleCard(filteredTemples){
  document.querySelector(".build").innerHTML= "";
  filteredTemples.forEach(temple => {
    // create one card for each temple
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let dedicated = document.createElement("p")
    let location = document.createElement("p");
    let  area = document.createElement("p");
    let image = document.createElement("img");
 

  name.textContent = temple.templeName;
  location.innerHTML = '<span class="label">Location: </span> ' + temple.location;
  dedicated.innerHTML = '<span class="label">Dedicated: </span> '+ temple.dedicated;
  area.innerHTML = '<span class="label">Area: </span> '+" "+ temple.area + " sq ft";
  image.setAttribute("src", temple.imageUrl);
  image.setAttribute("alt", temple.templeName + ' Temple');
  image.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);

  document.querySelector(".build").appendChild(card);
  });
}

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
})

oldLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900));
});
  
newLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000))
  
});

largeLink.addEventListener("click", (event) => {
  event.preventDefault();
  createTempleCard(temples.filter(temple => {
    const large = temple.area;
    return large> 90000;
  }))
})

smallLink.addEventListener("click", (event) =>{
  event.preventDefault();
  createTempleCard(temples.filter(temple => {
    const small = temple.area;
    return small <10000;
  }))
})