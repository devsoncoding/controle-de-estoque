function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('relogio').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

function vendas() {
  var display = document.getElementById("vendas").style.display;
  if (display == "none")
    document.getElementById("vendas").style.display = 'block';
  else
    document.getElementById("vendas").style.display = 'none';
}

function estoque() {
  var display = document.getElementById("estoque").style.display;
  if (display == "none")
    document.getElementById("estoque").style.display = 'block';
  else
    document.getElementById("estoque").style.display = 'none';
}

function faturamento() {
  var display = document.getElementById("faturamento").style.display;
  if (display == "none")
    document.getElementById("faturamento").style.display = 'block';
  else
    document.getElementById("faturamento").style.display = 'none';
}
