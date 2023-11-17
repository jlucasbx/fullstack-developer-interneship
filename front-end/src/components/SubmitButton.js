import getProductByASIN from "../api/getProductByASIN";
import { ASIN, PRODUCT_VIEW, SEARCH, SUBMIT_BUTTON } from "../identifiers";
import getElement from "../utils/getElement";
import { handleClick } from "../utils/handleClick";
import { beforeRender } from "../utils/lifeCycle";
import LoadingSpinner from "./LoadingSpinner";
import NoResult from "./NoResult";
import Product from "./Product";

export default function SubmitButton() {
  beforeRender(async () => {
    
    handleClick(SUBMIT_BUTTON, async () => {
      const { value: asinValue } = getElement(ASIN);
      const { value: searchValue } = getElement(SEARCH);
      const productView = getElement(PRODUCT_VIEW);
      productView.innerHTML = LoadingSpinner();
      const product = await getProductByASIN(searchValue, asinValue);
      productView.innerHTML = product ? Product(product) : NoResult();
    });
  });

  return `
    <div class="submit-button" id="${SUBMIT_BUTTON}">
      <button>
        Submit
      </button>
    </div>
  `;
}
