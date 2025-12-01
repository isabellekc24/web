const display = document.getElementById("display");
/*procura no html o elemetno display, que é o visor da calc*/

function adicionar(valor) {
    display.value += valor;
}
/*essa função é chamada quando ousuário clica em um botão*/

function limpar() {
    display.value = "";
}

function calcular() {
        //verifica se o que foi digitado no visor(display), senão contem algum caracter fora do desejado
        if (/^[0-9+\-*/.() ]+$/.test(display.value)) {
            //pego o valor de dentro do visor
            //calcula usando a função eval(), faz o calculo retorna o resultado no visor
            display.value = eval(display.value);
        } else {
            alert("Erro!");
        }
}

