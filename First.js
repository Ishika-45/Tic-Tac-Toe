let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn=document.querySelector(".newbtn");
let message= document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let turnO = true;
let count = 0;

const resetGame = () => {
    turnO=true;
    count = 0;
    enableBox();
    message.classList.add("hide");
};

boxes.forEach((box) => {
        box.addEventListener("click",() => {
            console.log("Box was clicked")
            if(turnO){
                box.innerText="O"
                turnO=false;
            }else{
                box.innerText="X"
                turnO=true;
            }            
            box.disabled=true;
            count++;

            checkwinner();

            let isWin = checkwinner();
            if(count == 9 && !isWin){
                //it's a draw
                gameDraw();
            }
        });
});

const gameDraw = () => {
    msg.innerText = "OOPS!! It's a draw";
    message.classList.remove("hide");

}
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }

};

const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) =>{
    msg.innerText=`Congratulations !! Winner is ${winner}`;
    message.classList.remove("hide");
    disableBox();
}

const checkwinner = () =>{

    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                // alert(`WINNER is ${pos1}`);
                // console.log(`Winner is ${pos1}`);
                showWinner(pos1);
                // return true;
            }
        }

    }

};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
