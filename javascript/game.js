Action = {};
Action.puzzle = [];
Action.underLine = [];

Action.chances = 6;
Action.puzzleInBank = puzzle.length;
Action.underLine = puzzle.length;

Action.puzzle = "Test";
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

}
