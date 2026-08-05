const today = new Date();
const CurrentYear = today.getFullYear();

document.getElementById("currentyear").innerHTML = CurrentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


function populateProductDropdown() {
  // Grab the select element from the DOM (assuming id="product")
  const productSelect = document.getElementById("great");
  
  // Make sure the element exists on the page before trying to populate it
  if (productSelect) {
    products.forEach(product => {
      // Create a new option element
      const option = document.createElement("option");
      
      // Set the value to the product id
      option.value = product.id;
      
      // Set the display text to the product name
      option.textContent = product.name;
      
      // Append the option to the select element
      productSelect.appendChild(option);
    });
  }
}

// Run the function when the script loads
populateProductDropdown();