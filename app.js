let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontiner=document.querySelector(".msg-containrr");



let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];
const resetGame=()=>{
  turn0=true;
  enablebox();
  msgcontiner.classList.add("hide");
}
const disablebox=()=>{
  for (const box of boxes) {
    box.disabled=true;

  }
}
const enablebox=()=>{
  for (const box of boxes) {
    box.disabled=false;
    box.innerHTML="";
  }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled=true;
    checkWinner();
  });
});
const showWinner=(winner)=>{
  msg.innerHTML=(`Congratulation ,Winner is ${winner}`);
  msgcontiner.classList.remove("hide")
  disablebox();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`${pos3} wins!`);
        showWinner(pos3);
        
      }
    }
  }
};
newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);