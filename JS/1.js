
/*chama o retorno da função*/
function bla (){
    console.log("ola mundooo")
}

b=document.querySelector("button:nth-child(5)");

/*criar botao por aqui*/
b.innerHTML= "Clique em mim 4"
b.addEventListener("click",bla)