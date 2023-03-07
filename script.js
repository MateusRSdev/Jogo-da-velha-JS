
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let caixas = document.querySelectorAll(".box");
let botoes = document.querySelector("#buttons_container button");
let messageConteiner = document.querySelector("mensagem");
let messagetext = document.querySelector('#mensagem p');
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando evento de clique aos boxes
for (let i = 0; i < caixas.length; i++) {
    caixas[i].addEventListener("click", function () {

        let el;

        if (player1 == player2) {
            //x
            el = x;
        } else {
            //o
            el = o;
        }

        //verifica se a caixa ja foi marcada
        if (this.childNodes.length == 0) {

            let cloneEL = el.cloneNode(true);

            this.appendChild(cloneEL);

            //computar jogada
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }
        }

    });
}