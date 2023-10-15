
let game = 'start';
var boxs = document.querySelectorAll(".image");
var tips = document.getElementById("tips"); 
var player = 'o';
let won = false;

var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");

var spanX = document.getElementById("x_score");
var spanO = document.getElementById("o_score");
var scoreX = 0;
var scoreO = 0;

function reset_game() {
    for (var i = 0; i < boxs.length; i++) {
        boxs[i].src = 'blank.png';
        boxs[i].alt = 'b';
        boxs[i].classList.remove("fade_in_image");
    }
    tips.innerHTML ="game is reset and player "+ player +" turn";
    game = 'start';
    won = false;
}

function changeImage(image) {
    if (game == 'start'){
        if (player == 'o' && image.alt == 'b') {
            image.src = 'o.png';
            image.alt = 'o';
            image.classList.add("fade_in_image");
    
            player = 'x';
            tips.innerHTML ="player X turn";
        }else if (player == 'x' && image.alt == 'b') {
            image.src = 'x.png';
            image.alt = 'x';
            image.classList.add("fade_in_image");
    
            player = 'o';
            tips.innerHTML ="player O turn";
        }
    
        if( checkIfWon('x')){
            tips.innerHTML ="X has won";
            scoreX  = scoreX +1;
            spanX.innerHTML = ""+scoreX;
            game = 'stop';
        } else if ( checkIfWon('o')){
            tips.innerHTML ="O has won";
            scoreO  = scoreO +1;
            spanO.innerHTML = ""+scoreO;
            game = 'stop';
        }
    }
}

function checkIfWon(player){
    if ( (box1.alt == player && box4.alt == player && box7.alt == player)
        || (box2.alt == player && box5.alt == player && box8.alt == player)
        || (box3.alt == player && box6.alt == player && box9.alt == player)

        || (box1.alt == player && box2.alt == player && box3.alt == player)
        || (box4.alt == player && box5.alt == player && box6.alt == player)
        || (box7.alt == player && box8.alt == player && box9.alt == player)

        || (box1.alt == player && box5.alt == player && box9.alt == player)
        || (box3.alt == player && box5.alt == player && box7.alt == player)
        ){
        won = true;
    }

    return won;
}
