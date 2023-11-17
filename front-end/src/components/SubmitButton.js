import getProductByASIN from "../api/getProductByASIN";
import { ASIN, KEYWORD, PRODUCT_VIEW, SUBMIT_BUTTON } from "../identifiers";
import getElement from "../utils/getElement";
import { handleClick } from "../utils/handleClick";
import { beforeRender } from "../utils/lifeCycle";
import LoadingSpinner from "./LoadingSpinner";
import NoResult from "./NoResult";
import Product from "./Product";

// This function returns a reusable html element like in React
export default function SubmitButton() {
  beforeRender(async () => {
    
    handleClick(SUBMIT_BUTTON, async () => {
      const { value: asin } = getElement(ASIN);
      const { value: keyword } = getElement(KEYWORD);
      const productView = getElement(PRODUCT_VIEW);
      productView.innerHTML = LoadingSpinner();
      const product = await getProductByASIN(keyword, asin);
      productView.innerHTML = product ? Product(product) : NoResult();
    });
  });

  return `
    <div class="submit-button" id="${SUBMIT_BUTTON}">
      <button>
        Search
      </button>
    </div>
  `;
}
