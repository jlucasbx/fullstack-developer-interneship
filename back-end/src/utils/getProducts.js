import getHtmlContentByQuery from "./getHtmlContentByQuery.js";
import getProductsOfHtml from "./getProductsOfHtml.js";
import Cache from "./Cache.js";
import { site } from "../config.js";

// Por padrão os dados expirão apos 3000ms mas caso o parametro seja '-1' o mesmo nunca ira expirara o que para
// desenvolvimento é melhor
const cache = new Cache(site.cacheExpiration);

// Essa função pega o conteudo das 5 primeiras páginas para um determinada pesquisa feita e
// retorna as mesma em uma estrutra de dados map para uma busca mais eficiente
async function getPagesProducts(keyword) {
  const products = new Map();

  for (let page = 1; page <= 5; page++) {
    const htmlContent = await getHtmlContentByQuery(keyword, page);
    getProductsOfHtml(htmlContent, (product) => {
      product.position = products.size + 1;
      products.set(product.asin, product);
    });
  }

  return products;
}

// Essa função faz o cache do produtos toda vez que o mesmo são baixados e feito o parse do html um processo que acaba sendo
// um pouco demorado, no entando a grande necessidade disso foi para facilitar o desenvolvimento já que a amazon bloqueia o acesso
// após algumas requisições sucessivas
async function getProductsAsMap(keyword) {
  const cachedProducts = cache.get(keyword);

  if (cachedProducts) return cachedProducts;

  const products = await getPagesProducts(keyword);

  cache.set(keyword, products);

  return products;
}

// Retorna o produto em formato de array
export async function getProducts(keyword) {
  const mapProducts = await getProductsAsMap(keyword);
  const products = Array.from(mapProducts).map(([_, value]) => (value)).flat(Infinity);

  return products;
}

// faz uma busca no produtos pelo asin
export async function getProductByASIN(keyword, asin) {
  const products = await getProductsAsMap(keyword);
  const product = products.get(asin);
  return product;
}
