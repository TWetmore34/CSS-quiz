# CSS-quiz
multiple choice css quiz using a timer as the end condition

This short multiple choice quiz begins with a simple ui layout. On pressing the start button, it is replaced with a submit button, and the timer begins. As you move through the quiz, incorrect answers will subtract 3 seconds each (this can be easily modified in the JS file). The quiz ends and requests your name for a high score list. This list takes the information from local storage to update high-score.html with the latest scores. Each new attempt will add a list element with the name and score value displayed. Currently, these values do not sort themselves.

## Code maintenance 

The code in the JS file is broken into a feew major section. First, the dom elements are listed out. This guarantees these variables will be accessable anywhere they are needed in the file. 

Next is the question storage. questionArr functions as a multi-layer array, where each new array is a question, answer set, and a function to inform the code which of our answers are correct. This method of storage lends itself to parallel looping, as we will see in the next section.

The next section is our major function: testArr. The function begins by resetting the text content in case this is not the user's first attempt. We then switch our button display to the submit button, and use a for loop to manipulate DOM elements, setting our questions and answers into place and setting the value of the correct selection to true on line 51.

After the questions are set, the event listener on submitEl checks the value of the user's selected input against its value. If it's read as true, we add one to the global variable 'correct,' and if it's false, we subtract from time. The final line of the event listener function runs our function testArr again, this time with its index value increased by one.

Lastly, the reset function runs for a few last minute additions to the game. First, it requests user input for a name to the high scores list, and saves that name in an object. This object is then pushed to local storage for display on the high-scores.html file. We then reset all DOM elements and global variables to their starting points, and the game is ready to begin again!
