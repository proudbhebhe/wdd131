const today = new Date;
const currentYear = today.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;

const products=[
{   name:"Electric Blender",
    category:"Kitchen",
    price:"$145",
    image:"images/electric-blender.jpeg",
    description:"A powerful blender for smoothies, sauces and everyday food preparation."},

{   name:"Gas Stove",
    category:"Kitchen",
    price:"$320",
    image:"images/gas-stove.jpeg",
    description:"A practical stove and oven combination for everyday family cooking."},

{   name:"Refrigerator",
    category:"Cooling",
    price:"$480",
    image:"images/refrigerator.jpeg",
    description:"A two-door refrigerator for keeping food and drinks fresh."}
];

function displayProducts(productList){
    const container=document.querySelector("#product-container");
    if(!container){return}
    container.innerHTML="";
    
productList.forEach(function(product){
    let card=document.createElement("article");
        card.classList.add("product-card");
        card.innerHTML=`
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p class="price">${product.price}</p>`;

container.appendChild(card);
});
}

function filterProducts(category){
let filteredProducts;
if(category==="All"){
filteredProducts=products;
}else{
filteredProducts=products.filter(function(product){
return product.category===category;
});
}
displayProducts(filteredProducts);
}

function savePreference(category){
localStorage.setItem("preferredCategory",category);
const message=document.querySelector("#preference-message");
if(message){
message.textContent=`Your preferred category is ${category}. We saved your choice.`;
}
}

function loadPreference(){
const savedCategory=localStorage.getItem("preferredCategory");
const message=document.querySelector("#preference-message");
if(message && savedCategory){
message.textContent=`Your saved category is ${savedCategory}.`;
}
}

function setupProductButtons(){
const buttons=document.querySelectorAll(".filter-button");
buttons.forEach(function(button){
button.addEventListener("click",function(){
filterProducts(button.dataset.category);
});
});
}

function setupContactForm(){
const form=document.querySelector("#contact-form");
if(!form){return}
form.addEventListener("submit",function(event){
event.preventDefault();
const name=document.querySelector("#name").value;
const message=document.querySelector("#form-message");
message.textContent=`Thank you, ${name}. Your enquiry has been received.`;
form.reset();
});
}

document.addEventListener("DOMContentLoaded",function(){
displayProducts(products);
setupProductButtons();
setupContactForm();
loadPreference();
});
