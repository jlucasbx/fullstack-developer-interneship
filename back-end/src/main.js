import express from "express";
import cors from "cors";
import { getProducts,getProductByASIN } from "./utils/getProducts.js";

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

app.get("/api/scrape", async (req, res) => {
  const { keyword, asin } = req.query;
  if (keyword && asin) {
    let product = await getProductByASIN(keyword, asin);
    if (!product) product = { error: "product no found" };
    res.send(product);
  }else{
    const products = await getProducts(keyword);
    res.send(products);
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);


});
