
// alert("Olá, mundo de novo!") - Uso do "alert"

/* 
    var mensagem = "Olá, Mundo!"
    console.log (mensagem) - Uso do "console.log"
    Para usar o console do navegador, usar o atalho CTRL + Shift + C

*/

// document.querySelector ("h1") - Acessando elementos HTML

// document.querySelector (".class") - Acessando classes CSS

// document.querySelector ("#id") - Acessando ID's CSS

// var titulo = document.querySelector ("h1") - criando uma váriavel para salvar um resultado

// titulo = textContent - para ver o contexto atual de um elemento

// titulo.textContent = "Novo titulo" - alterar valor salvo

// document.querySelectorAll (".cartao") - para selecionar todos os elementos da mesma classe e devolve uma lista de elementos (array)

// document.querySelectorAll(".cartao")[0] - para acessar o elemento da lista através do índice (entre colchetes), que sempre começa em 0.

// USO DE FUNÇÕES 

/* Criando uma função simples que será chamada automaticamente 

    function mostraAlerta () {
        alert ("Isso é uma função")
    }
    mostraAlerta() - esse trecho chama a função
*/

/* Criando uma função que será chamada pelo uso de um botão

    function mostraAlerta () {
        alert ("Isso é uma função")
    }
    var botao = document.querySelector("#botaoEnviar")
    botao.onclick = mostraAlerta // esse trecho chama a função
 */
var milNumber = 1000;
var milString = milNumber.toFixed(2);
var milFloat = parseFloat(milString);
alert (milString);


