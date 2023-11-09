const express = require("express");
const app = express();
const getProductsOfHtml = require("./src/utils/getProductsOfHtml");
const getHtmlContentByQuery = require("./src/utils/getHtmlContentByQuery");
const cors = require("cors");


const port = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204 
}))

app.get("/api/scrape", async (req, res) => {
  const { keyword } = req.query;
  const htmlContent = await getHtmlContentByQuery(keyword);
  const products = getProductsOfHtml(htmlContent);
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
