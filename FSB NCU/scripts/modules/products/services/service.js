import { Model } from "../models/model.js";

export async function doNetworkCall() {
  const response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  data = data.map(
    (ele) => new Model(ele.id, ele.title, ele.image, ele.price, ele.description)
  );
  console.log(data);

  return data;
}
