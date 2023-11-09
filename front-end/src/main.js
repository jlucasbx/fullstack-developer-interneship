import ProductItem from "./utils/ProductItem";
import getProducts from "./utils/getProducts";
const productsList = document.querySelector(".products-list");
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search input");

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleSearch();
});

function renderProducts(products) {
    if (products.length === 0) {
    productsList.innerHTML = `<p class="empty-list">No items to display!</p>`;
    return;
  }

  productsList.innerHTML = "";
  for (const product of products) {
    productsList.appendChild(ProductItem(product));
  }
}

async function handleSearch() {
  const { value } = searchInput;
  const products = await getProducts(value);
  renderProducts(products);
}

export default function main() {
  renderProducts([]);
}
