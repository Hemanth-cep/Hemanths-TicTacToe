var count = 0;
game_completed = 0;
function show_error(){
    var msg = document.getElementById("error");
    if(game_completed != 1){
    msg.innerHTML="Position already filled! ~ Enter a valid position";
    setTimeout(() => {
        msg.innerHTML="";
    }, 2000);
    }
    else{
        msg.innerHTML="Game Completed!";
        setTimeout(() => {
        msg.innerHTML="";
    }, 2000);
    }
}

function winner(symbol){
    var winner_name;
    if( symbol === 'o'){
      winner_name = 'player-1';  
    }
    else{
        winner_name = 'player-2';
    }
    var win = document.getElementById("result");
    if( b1.innerHTML !== "" && b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML ){        
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b4.innerHTML !== "" && b4.innerHTML == b5.innerHTML && b5.innerHTML == b6.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b7.innerHTML !== "" && b7.innerHTML == b8.innerHTML && b8.innerHTML == b9.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b1.innerHTML !== "" && b1.innerHTML == b4.innerHTML && b4.innerHTML == b7.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b2.innerHTML !== "" && b2.innerHTML == b5.innerHTML && b5.innerHTML == b8.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b3.innerHTML !== "" && b3.innerHTML == b6.innerHTML && b6.innerHTML == b9.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b1.innerHTML !== "" && b1.innerHTML == b5.innerHTML && b5.innerHTML == b9.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(b3.innerHTML !== "" && b3.innerHTML == b5.innerHTML && b5.innerHTML == b7.innerHTML){
        win.innerHTML=winner_name + " wins!";
        game_completed = 1;
    }
    else if(count == 9){
        win.innerHTML="its a Draw!";
    }
}

var b1 = document.getElementById("btn-1");
var b2 = document.getElementById("btn-2");
var b3 = document.getElementById("btn-3");
var b4 = document.getElementById("btn-4");
var b5 = document.getElementById("btn-5");
var b6 = document.getElementById("btn-6");
var b7 = document.getElementById("btn-7");
var b8 = document.getElementById("btn-8");
var b9 = document.getElementById("btn-9");

var assist = document.getElementById("assist")
var buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        assist.innerHTML='';
        if(button.innerHTML === 'Play Again'){
            location.reload()
        }
        else{
            count+=1;
            if(game_completed != 1){
                if(count%2 != 0){
                    assist.innerHTML="player-2 is 'x'";                  
                    if (button.innerHTML === ''){
                        button.innerHTML='o'
                        winner('o')
                    }  
                    else{
                        count-=1
                        show_error()
                    }
                }
                else{
                    assist.innerHTML="player-1 is 'o'";
                    if (button.innerHTML === ''){
                        button.innerHTML='x';  
                        winner('x')
                    }
                    else{
                        count-=1
                        show_error()
                    }
                }
            }
            else{
                show_error()
            }
        }
    })
})
