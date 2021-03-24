function myFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Change this document";
  document.body.appendChild(btn);
  btn.addEventListener("click", change);
}
function change() {
  var header = document.getElementById("hello");
  header.innerHTML = "CSIE@CGU";
  var para = document.getElementById("hi");
  para.innerHTML = "怎麼那麼棒！！.";
}