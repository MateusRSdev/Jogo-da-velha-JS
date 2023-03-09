let x = document.querySelector(".x");
let o = document.querySelector(".o");
let caixas = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#buttons_container button");
let messageConteiner = document.querySelector("#mensagem");
let messagetext = document.querySelector('#mensagem p');
let secondPlayer;
const vitoriasP = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

// contador de jogadas
let player1 = 0;
let player2 = 0;
let para = false

console.log(botoes[1]);
// adicionando evento de clique aos boxes
for (let i = 0; i < caixas.length; i++) {
    caixas[i].addEventListener("click", function () {

        let el = checkEL(player1, player2);
        let valor = el.className;
        console.log(valor);
        checWinCondition()
        //verifica se a caixa ja foi marcada
        if (this.childNodes.length == 0) {

            let cloneEL = el.cloneNode(true);

            this.appendChild(cloneEL);
            checWinCondition()
            //computar jogada
            if (player1 == player2) {
                player1++;

                if (secondPlayer == "ia-player") {
                    //funcao para executar a jogada
                    computerPlay()
                    console.log("IA");
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

    //horizontal

    for (let i = 0; i < 8; i++) {

        let b1 = document.getElementById("box-" + vitoriasP[i][0]);
        let b2 = document.getElementById("box-" + vitoriasP[i][1]);
        let b3 = document.getElementById("box-" + vitoriasP[i][2]);

        if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
            let c1 = b1.childNodes[0].className;
            let c2 = b2.childNodes[0].className;
            let c3 = b3.childNodes[0].className;

            if (c1 == "x" && c2 == "x" && c3 == "x") {
                declareWhinner("x")
                para = true
            } else if (c1 == "o" && c2 == "o" && c3 == "o") {
                declareWhinner("o")
                para = true
            }
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
            para = true
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

    setTimeout(() => {
        para = false
    }, 50);
    
    let remover = document.querySelectorAll(".box div");
    for (let i = 0; i < remover.length; i++) {
        remover[i].parentNode.removeChild(remover[i]);
    }
    //zera as jogadas 
    player1 = 0;
    player2 = 0;

}

//logica da IA
function computerPlay() {

    if (para  === true) {
        return false
    }

    var risco = null;

    for (let c = 0; c < 8; c++) {

        let vazio = 0;
        let X = 0;
        let O = 0;

        let b1 = document.getElementById("box-" + vitoriasP[c][0]);
        let b2 = document.getElementById("box-" + vitoriasP[c][1]);
        let b3 = document.getElementById("box-" + vitoriasP[c][2]);

        let linhas = [b1, b2, b3]
        let valoresF = [null, null, null]
        // console.log(linhas);
        for (let i = 0; i < 3; i++) {
            if (linhas[i].childNodes[0] === undefined) {
                valoresF[i] = null
            } else {
                valoresF[i] = linhas[i].childNodes[0].className
            }


            if (valoresF[i] == null) {
                vazio += 1
            } else if (valoresF[i] == "x") {
                X += 1
            } else {
                O += 1
            }

        }
        //verifica se existe um risco de perder ou ganhar
        if (vazio == 1 && (X == 2 || O == 2)) {
            let p = 0
            let i = 0
            if (O == 2) {
                while (i < 3) {
                    if (valoresF[i] == null) {
                        risco = vitoriasP[c][i]
                        p = 1;
                    }
                    i++
                }
                if(p == 1 ){
                    break
                }
            } else if (X == 2) {
                while (i < 3) {
                    if (valoresF[i] == null) {
                        risco = vitoriasP[c][i]
                    }
                    i++
                }
            }
        }
    }
    let cloneO = o.cloneNode(true);
    let counter = 0;
    let filter = 0;
    console.log("risco = " + risco);

    if (risco === null) {
        for (let i = 0; i < caixas.length; i++) {

            let ramdomNumber = Math.floor(Math.random() * 5)
            //só preeencher se estiver vazio
            if (caixas[i].childNodes[0] == undefined) {

                if (ramdomNumber <= 1) {
                    caixas[i].appendChild(cloneO);
                    counter++;
                    console.log("ramdom");
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
    } else {
        risco = risco - 1
        caixas[risco].appendChild(cloneO)
    }
}