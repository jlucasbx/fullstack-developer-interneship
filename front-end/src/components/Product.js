import Rating from "./Rating";

// This function returns a reusable html element like in React
export default function Product({ image, title, rating, reviews ,position}) {
  return `
    <div class="product">
      <img src="${image}">
      <div>
          <h2>${title}</h2>
          <div>
            ${Rating(rating)}
            <strong>${reviews}</strong>
          </div>
          <div><strong>Position:</strong>${position}</div>
          </div>
     </div>  
    `;
}
