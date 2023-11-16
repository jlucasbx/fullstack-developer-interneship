import * as cheerio from 'cheerio';
import { htmlSearch } from "../config.js";

// this function creates a closure that serves to avoid repeating the cheerio search expression.
function createExtractTextFunction($, element) {
  return function (cssQuery, attr = "") {
    if (!attr) {
      return $(element).find(cssQuery).first().text();
    }

    return $(element).find(cssQuery).attr(attr);
  };
}

//applies logic to obey a certain application format.
function parseProduct(product) {
  const { reviews, rating } = product;
  product.reviews = Number.parseInt(reviews) || 0;
  product.rating = Number.parseFloat(rating.split(" ")[0]) || 0;
  return product;
}

// convert a cheerio element to a javascript object
function elementToProduct($, element) {
  const getText = createExtractTextFunction($, element);

  const title = getText(htmlSearch.title);
  const image = getText(htmlSearch.image, "src");
  const rating = getText(htmlSearch.rating);
  const reviews = getText(htmlSearch.reviews);

  const product = { title, rating, reviews, image };
  const parsedProduct = parseProduct(product);

  return parsedProduct;
}

// takes all html elements on the page that represent products and converts them to an object
export default function getProductsOfHtml(content) {
  const products = [];

  if (!content) return products;

  const $ = cheerio.load(content);

  $(htmlSearch.products).each((_, element) => {
    const product = elementToProduct($, element);
    products.push(product);
  });

  return products;
}