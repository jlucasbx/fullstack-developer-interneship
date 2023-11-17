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
    const product = await getProductByASIN(keyword, asin);
    res.send(product ? [product] : []);
  }else if(keyword){
    const products = await getProducts(keyword);
    res.send(products);
  }else{
    res.send([]);
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
