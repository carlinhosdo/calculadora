const input1 = document.getElementById("input1");
const resultado = document.getElementById("resultado");

const apagar = document.getElementById("apagar");
apagar.onclick = function() {
    input1.value = "";
    resultado.value = "";
}
const zero = document.getElementById("zero");
zero.onclick = function() {
    input1.value =input1.value + "0";
}
const um = document.getElementById("um");
um.onclick = function() {
    input1.value = input1.value + "1";
}
const dois = document.getElementById("dois");
dois.onclick = function() {
    input1.value = input1.value + "2";
}
const tres = document.getElementById("tres");
tres.onclick = function() {
    input1.value =input1.value + "3";
}
const quatro = document.getElementById("quatro");
quatro.onclick = function() {
    input1.value =input1.value + "4";
}
const cinco = document.getElementById("cinco");
cinco.onclick = function() {
    input1.value = input1.value + "5";
}
const seis = document.getElementById("seis");
seis.onclick = function() {
    input1.value =input1.value + "6";
}
const sete = document.getElementById("sete");
sete.onclick = function() {
    input1.value = input1.value + "7";
}
const oito = document.getElementById("oito");
oito.onclick = function() {
    input1.value = input1.value + "8";
}
const nove = document.getElementById("nove");
nove.onclick = function() {
    input1.value =input1.value + "9";
}
const igual = document.getElementById("igual");
igual.onclick = function() {
    resultado.value = eval(input1.value.toString());
}
const adicao = document.getElementById("adicao");
adicao.onclick = function() {
    input1.value =input1.value + "+";
}
const menos = document.getElementById("menos");
menos.onclick = function() {
    input1.value = input1.value + "-";
}
const multiplicacao = document.getElementById("multiplicacao");
multiplicacao.onclick = function() {
    input1.value = input1.value + "*";
}
const divisao = document.getElementById("divisao");
divisao.onclick = function() {
    input1.value = input1.value + "/";
}