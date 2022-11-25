var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function entradaDeDados(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function concluidaAtividade(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",concluidaAtividade);

    var botaoDeletar = document.createElement("button");
    botaoDeletar.appendChild(document.createTextNode("X"));
    li.appendChild(botaoDeletar);
    botaoDeletar.addEventListener("click", deleteItem);

    function deleteItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click",adicionarClickMouse);
input.addEventListener("keypress", adicionarClickTeclado);

function adicionarClickMouse(){
    if (entradaDeDados() > 0){
        createListElement();
    }
}
    
function adicionarClickTeclado(){
    if(entradaDeDados() > 0 && event.which === 13){
        createListElement();
    }
}