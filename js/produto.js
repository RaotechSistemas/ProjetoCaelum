var inputTamanho = document.querySelector ('[name=tamanho]')
var outputTamanho = document.querySelector ('[name=valorTamanho]')

//- Função explícita
/*
function mostraTamanho () {
    inputTamanho.value = inputTamanho.value
}
inputTamanho.oninput = mostraTamanho
*/ 

// Função anônima

inputTamanho.oninput = function () {
    outputTamanho.value = inputTamanho.value
}