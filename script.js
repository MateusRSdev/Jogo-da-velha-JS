
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let caixas = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#buttons_container button");
let messageConteiner = document.querySelector("#mensagem");
let messagetext = document.querySelector('#mensagem p');
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;
console.log(botoes[1]);
// adicionando evento de clique aos boxes
for (let i = 0; i < caixas.length; i++) {
    caixas[i].addEventListener("click", function () {

        let el = checkEL(player1, player2);

        //verifica se a caixa ja foi marcada
        if (this.childNodes.length == 0) {

            let cloneEL = el.cloneNode(true);

            this.appendChild(cloneEL);

            //computar jogada
            if (player1 == player2) {
                player1++;

                if (secondPlayer == "ia-player") {

                    //funcao para executar a jogada
                    computerPlay()
                    console.log("ia");
                    player2++;

                }
            } else {
                player2++;
            }
        }

        checWinCondition();
    });
}

// evento de clique
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {

        secondPlayer = this.getAttribute("id");
        console.log(secondPlayer);

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].style.display = "none";
        }

        setTimeout(() => {
            let container = document.querySelector("#conteiner");
            console.log(container);
            container.classList.remove("hide");
        }, 500);

    })
}

//ve quem vai jogar
function checkEL(p1, p2) {
    if (p1 == p2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}

function checWinCondition() {

    let b1 = document.getElementById("box-1");
    let b2 = document.getElementById("box-2");
    let b3 = document.getElementById("box-3");
    let b4 = document.getElementById("box-4");
    let b5 = document.getElementById("box-5");
    let b6 = document.getElementById("box-6");
    let b7 = document.getElementById("box-7");
    let b8 = document.getElementById("box-8");
    let b9 = document.getElementById("box-9");

    //horizontal

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let c1 = b1.childNodes[0].className;
        let c2 = b2.childNodes[0].className;
        let c3 = b3.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let c1 = b4.childNodes[0].className;
        let c2 = b5.childNodes[0].className;
        let c3 = b6.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let c1 = b7.childNodes[0].className;
        let c2 = b8.childNodes[0].className;
        let c3 = b9.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }

    //vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let c1 = b1.childNodes[0].className;
        let c2 = b4.childNodes[0].className;
        let c3 = b7.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let c1 = b2.childNodes[0].className;
        let c2 = b5.childNodes[0].className;
        let c3 = b8.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let c1 = b3.childNodes[0].className;
        let c2 = b6.childNodes[0].className;
        let c3 = b9.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }

    //diagonais

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let c1 = b1.childNodes[0].className;
        let c2 = b5.childNodes[0].className;
        let c3 = b9.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let c1 = b3.childNodes[0].className;
        let c2 = b5.childNodes[0].className;
        let c3 = b7.childNodes[0].className;

        if (c1 == "x" && c2 == "x" && c3 == "x") {
            declareWhinner("x")
        } else if (c1 == "o" && c2 == "o" && c3 == "o") {
            declareWhinner("o")
        }
    }

    //deu velha

    let counter = 0;
    for (let i = 0; i < caixas.length; i++) {
        if (caixas[i].childNodes[0] != undefined) {
            counter++
        }

        if (counter == 9) {
            declareWhinner("deu velha")
        }

    }
}

//limpa o jogo, decalra um vencedor e atualiza o placar


function declareWhinner(whinner) {

    let scoreboardx = document.querySelector("#scoreboard-1")
    let scoreboardy = document.querySelector("#scoreboard-2")
    let msg = "";

    if (whinner == "x") {
        scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
        msg = "O Jogador 1 venceu";
    } else if (whinner == "o") {
        scoreboardy.textContent = parseInt(scoreboardy.textContent) + 1;
        msg = "O Jogador 2 venceu";
    } else {
        msg = "Deu Velha";
    }

    //exibe a mensagem
    messagetext.innerHTML = msg;
    messageConteiner.classList.remove("hide");

    //esconde mensagem
    setTimeout(function () {
        messageConteiner.className = "hide"
    }, 2000)

    //zera as jogadas 
    player1 = 0;
    player2 = 0;

    let remover = document.querySelectorAll(".box div");

    for (let i = 0; i < remover.length; i++) {
        remover[i].parentNode.removeChild(remover[i]);
    }

}

//logica da IA
function computerPlay() {

    let cloneO = o.cloneNode(true);
    let counter = 0;
    let filter = 0;

    for (let i = 0; i < caixas.length; i++) {

        let ramdomNumber = Math.floor(Math.random() * 5)
        //só preeencher se estiver vazio
        if (caixas[i].childNodes[0] == undefined) {
            if (ramdomNumber <= 1) {
                caixas[i].appendChild(cloneO);
                counter++;
                break;
                //checagem de quantas estao preenchidas

            }
        } else {
            filter++;
        }

    }

    if (counter == 0 && filter < 9) {
        computerPlay()
    }

}
