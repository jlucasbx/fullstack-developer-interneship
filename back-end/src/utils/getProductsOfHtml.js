const cheerio = require("cheerio");
const { htmlSearch } = require("../config");

function createExtractTextFunction($, element) {
  return function (cssQuery, attr = "") {
    if (!attr) {
      return $(element).find(cssQuery).first().text();
    }

    return $(element).find(cssQuery).attr(attr);
  };
}

function parseProduct(product) {
  const { reviews } = product;
  product.reviews = Number.parseInt(reviews);
  return product;
}

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

function getProductsOfHtml(content) {
  const products = [];

  if (!content) return products;

  const $ = cheerio.load(content);

  $(htmlSearch.products).each((_, element) => {
    const product = elementToProduct($, element);
    products.push(product);
  });

  return products;
}

module.exports = getProductsOfHtml;
