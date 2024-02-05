var inputCekKesehatan = {};
var args = location.search.substr(1).split("&");

for (var i = 0; i < args.length; ++i) {
  var tmp = args[i].split("=");
  if (tmp[0] !== "") {
    inputCekKesehatan[decodeURIComponent(tmp[0])] = decodeURIComponent(
      tmp.slice(1).join("").replace("+", " ")
    );
  }
}

console.log(inputCekKesehatan);

var result = false;
if (result === false) {
  document.getElementById("result-yes").removeAttribute("hidden");
  document.getElementById("result-no").setAttribute("hidden", true);
}
