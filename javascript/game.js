    // The arrays with puzzle display and intended right answer
    Action = {};
    Action.puzzle = [];
    Action.underLine = [];
    
    // Chances towards failure,and puzzle bank 
    Action.chances = 6;
    // Action.puzzleInBank = puzzle.length;
    Action.underLine = underLine.length;
    
    // The puzzle displayed on the screen
    Action.puzzle = "";
    Action.underLine = "";
    
    // FUNCTIONS
    
    Action.pickPuzzle = function pickFunction(){
        action.puzzle = puzzle.List[(Math.floor (Math.random()*Action.puzzleInBank))];
    
    }
    
    Action.setUnderLine = function showWordFunction() {
        Action.pickPuzzle();
        for (i = 0; i < puzzleInBank.length; i++){
            Action.puzzle[i] = Action.Word.charAt(i);
            Action.underLine[i] = "_";
        }
        Action.underLine = Action.underLine.join("");
        document.getElementById("puzzle").innerHTML = Action.underLine;
        document.getElementById("numLetters").innerHTML = Action.Word.length;
    
    }
    
    Action.UpdateLetter = function pickedLettersfunction(letter){
        Action.changes = 0;
        for (i = 0; i < Action.puzzle.length; i++){
            Action.puzzle[i] = Action.puzzle.charAt(i);
            if(Action.puzzle.charAt(i) == letter){
                Action.underLine[i] = letter;
                Action.changes += 1;
                Action.puzzle = Action.underLine.join("");
                document.getElementById("puzzle").innerHTML = Action.underLine;
            }
        }
    
        if(Action.Changes < 1){
            Action.chances -=1;
            document.getElementById("chances").innerHTML = Action.chances;
        }
    
        Action.underLine = Action.underLine.join("");
        document.getElementById("puzzle").innerHTML = Action.underLine;
    
        Action.puzzle1 = Action.puzzle.join("");
        Action.puzzle2 = Action.puzzle.join("");
    
        if (Action.puzzle1 == Action.puzzle2) {
            alert("You Win! Here's a New Puzzle");
            window.location.reload();
            }
        }
    
        if (Action.chances < 1) {
            document.getElementById("puzzle").innerHTML == Action.puzzle1;
            alert("You Have No More Chances");
            window.location.reload();
        
        }
        
    
        Action.pickPuzzle();
        Action.setUnderLine();
        
        
        
        
        
        
    