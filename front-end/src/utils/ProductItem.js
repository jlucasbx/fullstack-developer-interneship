import Rating from "./Rating";

// This function returns a reusable html element like in React
export default function ProductItem({ image, title, rating, reviews }) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="products-item">
      <img src="${image}">
      <div>
          <h2>${title}</h2>
          <div>
            ${Rating(rating)}
            <strong>${reviews}</strong>
          </div>
      </div>
     </div>  
    `;

  return li;
}
