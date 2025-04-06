let user = 0;
let comp = 0;
let pointscomp = document.querySelector("#yourpoint");
let pointsuser = document.querySelector("#comppoint");
let board = document.querySelector("#info");
let information = document.querySelector("h1");
const choices = document.querySelectorAll(".choice");
const resetbutton = document.querySelector("#reset");


const compchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}


const playgame = (choiceid) => {
    console.log(choiceid);
    const computer = compchoice();
    console.log(computer);
    if ((choiceid === "rock" && computer === "paper") || (choiceid === "paper" && computer === "scissor") || (choiceid === "scissor" && computer === "rock")) {
        comp++;
        pointsuser.innerHTML = comp;
        board.innerHTML = "computer won";
    } else if ((computer === "rock" && choiceid === "paper") || (computer === "paper" && choiceid === "scissor") || (computer === "scissor" && choiceid === "rock")) {
        user++;
        pointscomp.innerHTML = user;
        board.innerHTML = "you won";
    } else {
        board.innerHTML = "it 's a draw";
    }
    information.innerHTML=`you choose <font color = "red"> ${choiceid}  </font> and computer choose <font color = "red"> ${computer} </font>`;
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {   
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});

resetbutton.addEventListener("click",()=>{
    user = 0;
    comp= 0;
    pointsuser.innerHTML = comp;
    pointscomp.innerHTML = user;
    board.innerHTML = "new game";
    information.innerHTML="Rock Paper Scissor Game";
});



