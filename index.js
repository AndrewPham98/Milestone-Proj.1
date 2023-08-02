// https://www.deviantart.com/nick-ian/art/Gundam-00-Raiser-and-Setsuna-F-Seiei-333307492

const gameBoard = document.querySelector(.gameBoard);
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector(.scoreText);
const resstButton = document.querySelector(.resetButton);
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightblue";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0; 
let foodX; 
let foodY; 
let score = 0; 
let snake = [
    {x:unitSize * 4 y:0},
    {x:unitSize * 3 y:0},
    {x:unitSize * 2 y:0},
    {x:unitSize y:0},
    {x:0 y:0}
]
    
window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){
    function randomFood(min , max){
        const RandNum = Math.round((Math.random() * (max = min) + min))
        return RandNum
    }
    foodX = randomFood(0, gameWidth - unitSize);
    console.log(foodX); 
};
function drawFood()();
function moveSnake()();
function drawSnake()();
function changeDirection()();
function checkGameOver()();
function displayGameOver()();
function resetGame()(); 