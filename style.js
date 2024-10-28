let FruitsVegetables = [];

document
  .getElementById("FruitsAndVegetables")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    qoshish(); 
  });

function qoshish() {
  let inputElement = document.getElementById("fruits");
  let product = inputElement.value;

  if (FruitsVegetables.includes(product.toLowerCase())) {
    alert(product + " avval kiritilgan!");
  } else if (product !== "") {
    FruitsVegetables.push(product.toLowerCase());
    newlist();
  } else {
    alert("Maxsulot nomini kiritmadingiz!");
  }

  inputElement.value = "";
}

function newlist() {
  let royxatElement = document.getElementById("royxat");
  royxatElement.innerHTML = "";

  FruitsVegetables.forEach(function (product) {
    let listItem = document.createElement("li");
    listItem.textContent = product;
    royxatElement.appendChild(listItem);
  });
}
