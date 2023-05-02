console.log('Welcome to TIC TAC TOE');
let music = new Audio("music.mp3")
let turnAudio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"

let isgameover = false;

//Function to change the turn
const changeturn = () => {
    return turn === "X"? "O" : "X"
}

//Function to check for win

const checkwin = () => {
    let boxText = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '')){
    document.querySelector('.info').innerText = boxText[e[0]].innerText + ' ' + 'Won';
    isgameover = true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '155px'
        }
    })

}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeturn();
            turnAudio.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = 'Turn for' + ' '+ turn;
            }

        }
    })
})

//Add eventlistner to reset button

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for' + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
})