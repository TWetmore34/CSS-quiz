// current issues: alerts seem to keep looping and im not sure why(might not be an issue if i get rid of alerts)
// button doesnt reset

let questionEl = document.getElementById("questionEl");
let answersEl = document.querySelectorAll('.answer')
let startEl = document.getElementById('start')
let inputEl = document.getElementsByName('answer')



// Make sure to save these to browser info and add a reset button on home menu
let correct = 0;

let questionMap = {
    q1: ["What data type has a value of true or false?", 'strings', 'booleans', 'integers', 'numbers'],
    q2: ['What is an object?', 'a collection of strings', 'a for in loop to display data', 'a standalone entity with properties and a type', 'the contents of the whole browser'],
    q3: ['pretend this is a question', 'wrong', 'wrong again', 'are you even trying?', 'Pick me!'],
    q4: ['Wow this is a really hard one! Can you figure it out?', 'please dont look at me', 'free me from this prision of flesh you call a laptop', 'sodie pap', 'this is the right answer again.']
};

function question1 (event) {
    // Display
    event.preventDefault();
    questionEl.textContent = questionMap.q1[0];
    for (let i=0;i<questionMap.q1.length-1;i++){
        answersEl[i].innerHTML = questionMap.q1[i+1];
    }
    // replace start w/ submit
    startEl.innerHTML = "submit"
    startEl.setAttribute('id', 'submit');

    // reaccess replaced button
    let submitEl = document.getElementById('submit')

    // checks for selection and true value
    submitEl.addEventListener('click', function(){

        // checks for checked attribute on correct answer
            if (inputEl[1].checked){
                    correct += 1;
                    alert("congrats, you got it right")
            } else {
                    
                    alert("sorry, not this time :/")
                }
            // question 2 function 
            question2()
        }
    )
};

function question2() {
     // Display
    questionEl.textContent = questionMap.q2[0];
    for (let i=0;i<questionMap.q2.length-1;i++){
        answersEl[i].innerHTML = questionMap.q2[i+1];
    }
    // redeclare access for button
    let submitEl = document.getElementById('submit')

    // checks for selection
    submitEl.addEventListener('click', function(){

        // checks for checked attribute on correct answer
            if (inputEl[2].checked){
                    correct += 1;
                    alert("congrats, you got it right")
            } else {
                    alert("sorry, not this time :/")
                }
            // question 3 
            question3();
        }
    )
};

function question3() {
    // Display
   event.preventDefault();
   questionEl.textContent = questionMap.q3[0];
   for (let i=0;i<questionMap.q3.length-1;i++){
       answersEl[i].innerHTML = questionMap.q3[i+1];
   }
//    redeclare button access
   let submitEl = document.getElementById('submit')

   // checks for selection and true value
   submitEl.addEventListener('click', function(){

       // checks for checked attribute on correct answer
           if (inputEl[3].checked){
                   correct += 1;
                   alert("congrats, you got it right")
           } else {
                   alert("sorry, not this time :/")
               }
           // question 4
           question4();
       }
   )
};

function question4() {
    // Display
   event.preventDefault();
   questionEl.textContent = questionMap.q4[0];
   for (let i=0;i<questionMap.q4.length-1;i++){
       answersEl[i].innerHTML = questionMap.q4[i+1];
   }
//    redeclare button
   let submitEl = document.getElementById('submit')

   // checks for selection and true value
   submitEl.addEventListener('click', function(){

       // checks for checked attribute on correct answer
           if (inputEl[3].checked){
                   correct += 1;
                   alert("congrats, you got it right")
           } else {
                   alert("sorry, not this time :/")
               }
            alert("final score: " + correct / 4);
           return;
       }
   )
};

startEl.addEventListener('click', question1)

// Also, just steal the timer funciton we have on the other game
// function for that argment takes argument of num where num on start = 0
// that will access an object questionMap[0] where 0 is num
// takes the object array, loops thru entries (0 is q, 1234 are A)



// on event listener to start, a function runs with an arg of a function.
// function says if(selected value in radio == correct answer){
    // set response = true;
    // else {response = false}
    // if(event listener for submit && response == true){
        // message telling you youre right and +1 to correct reponses
        // else {+1 to incorrect message telling you wrong}
    // }
    // this function(callback(num+1))
    // means i need to put a top on the overall loop
// }

