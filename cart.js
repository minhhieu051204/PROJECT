var takeData = localStorage.getItem("OrderList");
var listProduct = JSON.parse(takeData);

let listProductRender = listProduct.map((user) => {
    return `<tr id="table-row">
    <td id="order-name">${user.name}</td>
    <td>${user.number}</td>
    <td>${user.money} VND</td>
  </tr>`;
  })
  .join("\n");


let table = document.getElementById("table");
table.innerHTML = `
  <thead>
  <tr>
    <th>Product</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
  </thead>
  ${listProductRender}`;




if (listProduct.length < 1) {
  document.getElementById("button-checkout").innerHTML = " ";
} else {
  document.getElementById("button-checkout").innerHTML = " Checkout ";
}

