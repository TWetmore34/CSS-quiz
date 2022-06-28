// THINGS LEFT TO DO: 
// 1. reset html and css on function end *all set*
// 2. display score 

// global DOM variables
let questionEl = document.getElementById("questionEl");
let answersEl = document.querySelectorAll('.answer');
let startEl = document.getElementById('start');
let submitEl = document.getElementById('submit');
let inputEl = document.getElementsByName('answer');
let clockEl = document.getElementById('clock');
let finalEl = document.getElementById('final')

// global variables for timer, testArr index, and score
let time = 60;
let index = 0;
let correct = 0;



// question sets. If adding more, add another multilayer array as follows: [answer, a1, a2, a3, a4, function to set correct answer]
let questionArr = [["What data type has a value of true or false?", 'strings', 'booleans', 'integers', 'numbers', function(){
    inputEl[1].setAttribute('value', 'true');
}], ['What is an object?', 'a collection of strings', 'a for in loop to display data', 'a standalone entity with properties and a type', 'the contents of the whole browser', function(){
    inputEl[2].setAttribute('value', 'true');
}], ['pretend this is a question?', 'wrong', 'wrong again', 'are you even trying?', 'Pick me!', function(){
    inputEl[3].setAttribute('value', 'true');
}], ['Wow this is a really hard one! Can you figure it out?', 'please dont look at me', 'free me from this prision of flesh you call a laptop', 'sodie pap', 'this is the right answer again.', function(){
    inputEl[3].setAttribute('value', 'true');
}]
]

let score = correct / questionArr.length * 100;


// start of quiz function
function testArr() {
    // switches display to submit button
    startEl.style.setProperty('left', '10000px');
    submitEl.style.setProperty('left', '0px');
    event.preventDefault();

    // displays questions and answers
    questionEl.innerHTML = questionArr[index][0];
    for(i=0;i<questionArr[index].length-2;i++){
        answersEl[i].textContent = questionArr[index][i+1];
        inputEl[i].removeAttribute('value');
        questionArr[index][5]();
    }
};
// listener for submit- checks for which radio element is checked, then compares it to the true value provided by each questions 5th index
submitEl.addEventListener('click', function(e){
    e.preventDefault();
    if(inputEl[0].checked && inputEl[0].value == 'true') {
        correct += 1;
    } else if(inputEl[1].checked && inputEl[1].value == 'true') {
        correct += 1;
    } else if(inputEl[2].checked && inputEl[2].value == 'true') {
        correct += 1;
    } else if(inputEl[3].checked && inputEl[3].value == 'true') {
        correct += 1;
    }
    else {
        alert('better luck next time');
        clockEl.
        time -= 3;
    }
   
    // has to be += bc index is a global variable
    if(index < questionArr.length){testArr(index += 1)}   
})

// standard timer function
function timer(){
    var timer = setInterval(function(){
        time--;
        clock.innerHTML = time + ' seconds remaining';
        if(time === 0 || index > questionArr.length - 1){
            clearInterval(timer);
            reset();
        }
    } , 1000)
}

// event listeners to run the test and the timer on start click
startEl.addEventListener('click', testArr);
startEl.addEventListener('click', timer)

// add reset button below all other html elements and make a function here. itll need to clear our form children elements and set the start button to be present, then ur good! 
function reset(){
    time = 60;
    clockEl.textContent = '';
    startEl.style.removeProperty('left');
    submitEl.style.removeProperty('left');
    alert('thanks for playing! Your score: ' + correct / questionArr.length * 100)
     console.log('hey there again')
    index = 0;
    questionEl.innerHTML = 'Click start to begin';
    for(i=0;i<questionArr[index].length-2;i++){
        answersEl[i].textContent = '';
        inputEl[i].removeAttribute('value');
    }
    finalEl.innerHTML = "thanks for playing! Your score: " + score;
    let name = prompt('Name for high score list?')
    localStorage.setItem(name, score);

}

// high score code
let olEl = document.querySelectorAll('ol');
console.log(olEl[0].children)
olEl[0].children[0].innerHTML = localStorage.getItem['name']
