var listProduct = [];

if (localStorage.getItem("friedchicken")) {
  var friedChickenCart = localStorage.getItem("friedchicken");
  var fcCart = JSON.parse(friedChickenCart);
  listProduct.push(fcCart);
}

if (localStorage.getItem("hamburger")) {
  var hamburgercart = localStorage.getItem("hamburger");
  var hbCart = JSON.parse(hamburgercart);
  listProduct.push(hbCart);
}

if (localStorage.getItem("chickennugget")) {
  var chickennuggetcart = localStorage.getItem("chickennugget");
  var cnCart = JSON.parse(chickennuggetcart);
  listProduct.push(cnCart);
}

if (localStorage.getItem("chips")) {
  var chipsCart = localStorage.getItem("chips");
  var chCart = JSON.parse(chipsCart);
  listProduct.push(chCart);
}

if (localStorage.getItem("hotdog")) {
  var hotdogCart = localStorage.getItem("hotdog");
  var hdCart = JSON.parse(hotdogCart);
  listProduct.push(hdCart);
}

if (localStorage.getItem("taco")) {
  var tacoCart = localStorage.getItem("taco");
  var tcCart = JSON.parse(tacoCart);
  listProduct.push(tcCart);
}

if (localStorage.getItem("burrito")) {
  var burritoCart = localStorage.getItem("burrito");
  var btCart = JSON.parse(burritoCart);
  listProduct.push(btCart);
}

if (localStorage.getItem("sandwich")) {
  var sandwichCart = localStorage.getItem("sandwich");
  var swCart = JSON.parse(sandwichCart);
  listProduct.push(swCart);
}

if (localStorage.getItem("corndog")) {
  var corndogCart = localStorage.getItem("corndog");
  var cdCart = JSON.parse(corndogCart);
  listProduct.push(cdCart);
}

if (localStorage.getItem("pizza")) {
  var pizzaCart = localStorage.getItem("pizza");
  var pzCart = JSON.parse(pizzaCart);
  listProduct.push(pzCart);
}

if (localStorage.getItem("kebab")) {
  var kebabCart = localStorage.getItem("kebab");
  var kbCart = JSON.parse(kebabCart);
  listProduct.push(kbCart);
}

if (localStorage.getItem("coke")) {
  var cokeCart = localStorage.getItem("coke");
  var ckCart = JSON.parse(cokeCart);
  listProduct.push(ckCart);
}
var numberCart = 0;
if(listProduct.length > 0){ 
for (let i = 0; i < listProduct.length; i++) {
  numberCart = numberCart + listProduct[i].number;
  document.getElementById("showNumberCart").innerHTML = numberCart;
}
}if(listProduct.number > 99){
  document.getElementById("showNumberCart").innerHTML = "m";
}
