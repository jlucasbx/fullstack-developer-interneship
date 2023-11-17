import getHtmlContentByQuery from "./getHtmlContentByQuery.js";
import getProductsOfHtml from "./getProductsOfHtml.js";
import Cache from "./Cache.js";
import { site } from "../config.js";

// By default the data will expire after 3000ms but if the parameter is '-1' it will never expire, which stops
// development is better
const cache = new Cache(site.cacheExpiration);

// This function takes the content of the first 5 pages for a given search and
// returns them in a map data structure for a more efficient search
async function getPagesProducts(keyword) {
  const products = new Map();

  for (let page = 1; page <= 5; page++) {
    const htmlContent = await getHtmlContentByQuery(keyword, page);
    getProductsOfHtml(htmlContent, (product) => {
      products.set(product.asin, product);
    });
  }

  return products;
}

// This function caches the products every time they are downloaded and parses the html, a process that ends up being
// a little time consuming, however the great need for this was to facilitate development since Amazon blocks access
// after a few successive requests
async function getProductsAsMap(keyword) {
  const cachedProducts = cache.get(keyword);

  if (cachedProducts) return cachedProducts;

  const products = await getPagesProducts(keyword);

  cache.set(keyword, products);

  return products;
}

// Returns products in array format
export async function getProducts(keyword) {
  const mapProducts = await getProductsAsMap(keyword);
  const products = Array.from(mapProducts).map(([_, value]) => (value)).flat(Infinity);

  return products;
}

// search for products by asin, using the map that searches quickly
export async function getProductByASIN(keyword, asin) {
  const products = await getProductsAsMap(keyword);
  const product = products.get(asin);
  return product;
}
