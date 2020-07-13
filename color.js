var numsq = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    setupModeBtn();
    setupSquares();
    resetfun();
}


function resetfun(){
    colors = generateRandomColors(numsq);
    message.textContent = "";
    colorPicked = pickcolor();
    colorDisplay.textContent = colorPicked;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }    
        else
            squares[i].style.display = "none";
    }    
    h1.style.background = "steelblue";
    reset.textContent = "New Colors";
}

reset.addEventListener("click",function(){
    resetfun();
});

function setupModeBtn(){
    for(var i=0;i<modeBtn.length;i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") numsq = 3;
            else numsq = 6;
            resetfun();  
        });
    }
}

function setupSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var colorClicked = this.style.background;     
            if(colorClicked === colorPicked){
                message.textContent = "Correct";
                reset.textContent = "Play Again?"
                changeColor(colorClicked);
                h1.style.background = colorClicked;
            }
            else{
                this.style.background = "#232323";
                message.textContent = "Try Again";
            }
        });
    }
}

function changeColor(color){
    for(var i=0;i<squares.length;i++)
        squares[i].style.background = color;
}

function pickcolor(){
    var index = Math.floor(Math.random()*colors.length);
    return colors[index];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i<num;i++)
        arr.push(getRandomColor());
    return arr;
}

function getRandomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}