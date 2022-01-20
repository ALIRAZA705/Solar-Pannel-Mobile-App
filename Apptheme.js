var data = {
    A: {
      color: "#FF0000",
    },
    B: {
      color: "#006600",
    },
  },
  rules = [];

for (var i in data) {
  var rule = `.${i}{`;
  for (var j in data[i]) {
    rule += `${j}:${data[i][j]};`;
  }
  rule += `}`;
  rules.push(rule);
}

var injectedStyles = document.createElement("style");
injectedStyles.setAttribute("type", "text/css");
injectedStyles.innerHTML = rules.join("");
document.head.appendChild(injectedStyles);
