var botaoEnter = document.getElementById("enter");
var entradaDados = document.getElementById("userInput");
var lista = document.getElementById("lista");
var item = document.getElementsByTagName("li")

// Essa função controla o número de caracteres dentro do input, para evitar que o usuário não digite nada e,
// mesmo assim, crie um elemento

function entradaDados() {
    return input.value.length;
}

// createElement: Cria um elemento HTML para ser, posteriormente, inserido em um documento HTML

function criaElemento () {
    var li = document.createElement("li"); 
    // appendChild vai pegar o elemento pai (li) e vai colocar dentro dele o valor da entradaDados en formato de texto
    li.appendChild(document.createTextNode("input.value"))
    // adicionando a li dentro do elemento pai ul que está fazia
    ul.appendChild(li);
    input.value = ""; // resetar o texto da entradaDados após apertar enter ou no lápis

    // o classList vai acessar a class e quando se usa o toggle, ele verifica o argumento e vê se ele está presente.
    // se a classe existir: ele remove ela
    // se a classe não existir: ele cria ela 

    function mudarCor () {
        li.classList.toggle("done"); // evento de clique
    }

    li.addEventListener("click", mudarCor)

    var botaoDeletar = document.createElement("button");
    botaoDeletar.appendChild(document.createTextNode("X"));
    li.appendChild(botaoDeletar);
    botaoDeletar.addEventListener("click", deletarAtividade);

    function deletarAtividade () {
        li.classList.add("delete");
    }
}

botaoEnter.addEventListener("click", adicionarListaAposClique);
entradaDados.addEventListener("keypress", adicionarListaTeclado);

function adicionarListaAposClique () {
    if (entradaDados() > 0) {
        criaElemento();
    }
}

function adicionarListaTeclado () {
    if (entradaDados() > 0 && event.keyCode === 13) {// 13 é o código chave da tecla enter
    criaElemento();
    }
}