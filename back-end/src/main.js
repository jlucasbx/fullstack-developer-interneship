const express = require("express");
const app = express();
const getProductsOfHtml = require("./utils/getProductsOfHtml");
const getHtmlContentByQuery = require("./utils/getHtmlContentByQuery");
const port = process.env.PORT;

app.get("/api/scrape", async (req, res) => {
  const { keyword } = req.query;
  const htmlContent = await getHtmlContentByQuery(keyword);
  const products = getProductsOfHtml(htmlContent);
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
