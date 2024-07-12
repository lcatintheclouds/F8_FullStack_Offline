var container = document.querySelector("#container");
var product = document.querySelector("#product");
var cart = document.querySelector("#cart");
var list_item = document.querySelector("#list-item");

var list = [
  { id: 1, name: "Sản phẩm 1", price: 1000 },
  { id: 2, name: "Sản phẩm 2", price: 2000 },
  { id: 3, name: "Sản phẩm 3", price: 3000 },
  { id: 4, name: "Sản phẩm 4", price: 4000 },
];

list.forEach(function (item) {
  var trEl = document.createElement("tr");
  var idProduct = document.createElement("td");
  var nameProduct = document.createElement("td");
  var priceProduct = document.createElement("td");
  var btnCart = document.createElement("td");
  idProduct.innerText = item.id;
  nameProduct.innerText = item.name;
  priceProduct.innerText = item.price;
  btnCart.innerHTML = `<input type="number" class="input_quantity" value="0" /> <button type="button" class="btn-add">Thêm vào giỏ</button>`;
  btnCart.setAttribute("id", "card_add");
  trEl.appendChild(idProduct);
  trEl.appendChild(nameProduct);
  trEl.appendChild(priceProduct);
  trEl.appendChild(btnCart);
  list_item.appendChild(trEl);
});
var setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
var listProduct = [];
if (localStorage.getItem("listProduct")) {
  listProduct = JSON.parse(localStorage.getItem("listProduct"));
} else {
  setLocalStorage("listProduct", listProduct);
}

var showCart = () => {
  setLocalStorage("listProduct", listProduct);
  if (listProduct.length >= 1) {
    var total = 0;
    var totalQuantity = 0;
    listProduct.forEach((item) => {
      var trEl = document.createElement("tr");
      var idProduct = document.createElement("td");
      var nameProduct = document.createElement("td");
      var priceProduct = document.createElement("td");
      var quantityProduct = document.createElement("td");
      var totalProduct = document.createElement("td");
      idProduct.innerText = item.id;
      nameProduct.innerText = item.name;
      priceProduct.innerText = item.price;
      quantityProduct.innerText = item.quantity;
      totalProduct.innerText = item.price * item.quantity;
      total += item.price * item.quantity;
      totalQuantity += item.quantity;
      trEl.appendChild(idProduct);
      trEl.appendChild(nameProduct);
      trEl.appendChild(priceProduct);
      trEl.appendChild(quantityProduct);
      trEl.appendChild(totalProduct);
      cart.appendChild(trEl);
    });
    var trTotal = document.createElement("tr");
    var tdTotal = document.createElement("td");
    tdTotal.innerText = `Tổng: ${total}`;
    var tdTotalQuantity = document.createElement("td");
    tdTotalQuantity.innerText = `Số lượng: ${totalQuantity}`;
    trTotal.appendChild(tdTotal);
    trTotal.appendChild(tdTotalQuantity);
    cart.appendChild(trTotal);
  } else {
    cart.innerHTML = "Giỏ hàng không có sản phẩm";
  }
};
showCart();
var btns = document.querySelectorAll(".btn-add");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var value = e.target.previousElementSibling.value;
    if (value > 0) {
      listProduct.push({
        id: listProduct.length + 1,
        name: list[listProduct.length].name,
        price: list[listProduct.length].price,
        quantity: value,
      });
      showCart();
    }
  });
});
