let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//ordem de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acendde a proxima cor
let lightColor = (element, Number) => {
    time = time * 500;
    setTimeout(() => {
        element.classlist.add('selected')
    }, tempo - 250);
    setTimeout(() => {
        element.classlist.removed('selected')
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i]  != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: ${score}\nVocê acertou! Inicando proximo nivel!');
        nextlevel();
    }
}

//função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classlist.add('selected');

    setTimeout(() => {
        createColorElement(color).classlist.removed('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    }else if(color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let checkOrder = () => {
    score++;
    shuffleOrder();
}
//funcção para game over
let gameOver = () => {
    alert('pontuação: ${score}!\nVoce perdeu o jogo!\nClique em Ok para comecar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
}


let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo');
    score = 0;
    
    nextlevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(0));
yellow.addEventListener('click', click(0));
blue.addEventListener('click', click(0));

playGame();