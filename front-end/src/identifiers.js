
const getIdentifier = (function(){
    let cont = 0;
    return function(){
        return cont++;
    }
})();


export const ASIN = getIdentifier();

export const KEYWORD = getIdentifier();

export const PRODUCT_VIEW = getIdentifier();

export const SUBMIT_BUTTON = getIdentifier();