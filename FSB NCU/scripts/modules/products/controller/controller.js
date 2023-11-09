import { doNetworkCall } from "../services/service.js";

let row;

window.addEventListener("load", bindEvents);

function bindEvents() {
  row = document.getElementById("row");
  console.log(row);
  getData();
}
async function getData() {
  const data = await doNetworkCall();
  console.log("Data in Controller ", data);
  showProducts(data);
}

function showProducts(data) {
  data.map((ele) => printCards(ele));
}

function printCards(ele) {
  let card = ` 
   <div class="card" style="width: 18rem;">
   <img src=${ele.image} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${ele.title}</h5>
     <p class="card-text">${ele.desc}</p>
     <a href="#" class="btn btn-primary">Add to Cart</a>
   </div>
 </div>
 `;
  row.innerText += card;
}
