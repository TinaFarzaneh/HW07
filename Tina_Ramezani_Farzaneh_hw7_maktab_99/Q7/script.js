let titles = [
  "Laptopmodel",
  "Picture",
  "Processor",
  "Ram",
  "Harddisk",
  "Display",
  "Graphics",
  "Weight",
  "Batery",
  "Price",
  "Purchase",
];
let products = [
  {
    name: "Acer Chromebook",
    src: "./image/01.jpg",
    processor: "Intel Celeron",
    ram: "2GB DDR3",
    harddisk: "16GB SSD",
    display: "11.6”HDIPS",
    graphics: "Intel HD Graphics",
    weight: "2.4 pounds",
    batery: "9h",
    price: "$228",
  },
  {
    name: "ASUS F556UASL",
    src: "./image/1.jpg",
    processor: "Core i3-6100U",
    ram: "4GB DDR4",
    harddisk: "1TB HDD",
    display: "15.6*FHD",
    graphics: "Intel HD Graphics",
    weight: "5.1 pounds",
    batery: "5h",
    price: "$145",
  },
  {
    name: "Lenovo FlexUAS",
    src: "./image/4444.jpg",
    processor: "Core 17-7500",
    ram: "12GB DDR4",
    harddisk: "1TB HDD",
    display: "15.6*FHD",
    graphics: "Intel HD Graphics",
    weight: "4.21 pounds",
    batery: "6h",
    price: "$754",
  },
];

let main = document.querySelector(".products");
let titleCountainer = document.querySelector(".products-titles");

titles.forEach((title) => creatSpan(title));
products.forEach((product) => addProduct(product));

function creatSpan(title) {
  let span = document.createElement("span");
  span.textContent = title;
  titleCountainer.append(span);
}
function addProduct(product) {
  let img = document.createElement("img");
  img.setAttribute("src", products.src);
  let div = document.createElement("div");

  div.className = "newDiv";

  div.innerHTML = `<span>${product.name}</span>
  <span></span>
  <span>${product.processor}</span>
  <span>${product.ram}</span>
  <span>${product.harddisk}</span>
  <span>${product.display}</span>
  </span>${product.graphics}</span>
  <span>${product.weight}</span>
  <span></span>
  </span>${product.batery}</span>
  <span></span>
  </span class="price">${product.price}</span>
  <button>Buy</span>
  `;
  div.append(img);
  div.insertBefore(img, div.children[1]);
  main.append(div);
}
