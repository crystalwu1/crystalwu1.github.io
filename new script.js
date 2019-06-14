/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("navbarr").style.width = "278px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("navbarr").style.width = "0";
}

var d1m = document.getElementById("d1m");
var d1 = document.getElementById("d1");
var d1s = document.getElementById("d1s")[0];

d1.onclick = function() {
  d1m.style.display = "block";
}

d1s.onclick = function() {
  d1m.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == d1m) {
    d1m.style.display = "none";
  }
}
