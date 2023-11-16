import express from "express";
import cors from "cors";
const app = express();
import getHtmlContentByQuery from "./utils/getHtmlContentByQuery.js";
import getProductsOfHtml from "./utils/getProductsOfHtml.js";
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
