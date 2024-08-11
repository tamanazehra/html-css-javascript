let boxes = document.querySelectorAll(".box");        //This selects all HTML elements with the class .box,
                                                      // which rep the individual cells in the Tic-Tac-Toe grid.

 let resetBtn = document.querySelector("#reset-btn");  //This selects the HTML element with the id #reset-btn,
                                                        //which is a button to reset the game.

let newGameBtn = document.querySelector("#new-btn");  //This selects the HTML element with the id #new-btn,
                                                         //  a button to start a new game.

let msgContainer = document.querySelector(".msg-container"); //This selects the HTML element with the class
                                                             // .msg-container,
                                                              // likely used to display game messages 
                                                              //(e.g., winner or draw).

let msg = document.querySelector("#msg");    //This selects the HTML element with the id #msg, 
                                             //which would contain the actual message text inside msgContainer.

let turnO = true; //This boolean variable tracks whose turn it is. If true,
                  // it’s player O's turn; if false, it’s player X's turn.

let count = 0; // This variable tracks the number of moves made.
                // It's used to detect a draw when all 9 moves have been made.

const winPatterns = [     //2D Arrays
  [0, 1, 2],         // This array contains the possible winning combinations. 
  [0, 3, 6],           //Each sub-array represents the indices in 
  [0, 4, 8],            //the boxes collection that would form a win if they all contain the same 
  [1, 4, 7],           // player's mark (either O or X).
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => { //This function resets the game state
  turnO = true;       //is reset to true, so player O starts.
  count = 0;          // is reset to 0
  enableBoxes();        //re-enables all the boxes and clears their content.
  msgContainer.classList.add("hide"); //hides the message container.
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {  //This loops through each box and adds a click event listener.
                                            //When a box is clicked, the following happens:
    if (turnO) {                            
      box.innerText = "O";                    //If turnO is true, the box is filled with "O", 
      turnO = false;                          //and turnO is set to false.
    } else {
      box.innerText = "X";                      //If turnO is false, the box is filled with "X",
      turnO = true;                             //and turnO is set to true.
    }
    box.disabled = true;               //The box is then disabled to prevent further clicks.
    count++;                                //count is incremented by 1 to track the number of moves.


    let isWinner = checkWinner();         //this func is called to see if the current move resulted in a win

    if (count === 9 && !isWinner) {       //If all 9 moves are made and there is no winner (isWinner is false)
      gameDraw();                          //the gameDraw() function is called to declare a draw.
    }
  });
});

const gameDraw = () => {                    // This function handles a draw situation
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {      //This function disables all boxes, preventing any more clicks.
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {  //This function enables all boxes and clears their content, resetting the game board.
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {                       // This function displays the winner
  msg.innerText = `Congratulations, Winner is ${winner}`;  //Sets the msg text to "Congratulations, Winner is X/0"
  msgContainer.classList.remove("hide");   //Displays the message container by removing the hide class
  disableBoxes();      //Disables all boxes
};

const checkWinner = () => {            //This function checks if there is a winner
  for (let pattern of winPatterns) {          //Loops through each pattern in winPatterns.
    let pos1Val = boxes[pattern[0]].innerText; 
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") { //If all three positions are non-empty 
      if (pos1Val === pos2Val && pos2Val === pos3Val) {     //and contain the same value, 
        showWinner(pos1Val);           //it calls showWinner() with that value and returns true.
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);  //Both buttons are linked to the resetGame func 
resetBtn.addEventListener("click", resetGame);     //which resets the game when either button is clicked.

