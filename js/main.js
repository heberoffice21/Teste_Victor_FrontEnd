function somar() {
  var valor1 = Number(document.getElementById('valor1').value);
  var valor2 = Number(document.getElementById('valor2').value);
  var resultado = valor1 + valor2;
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}