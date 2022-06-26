// current issues: alerts seem to keep looping and im not sure why(might not be an issue if i get rid of alerts)
// button doesnt reset

let questionEl = document.getElementById("questionEl");
let answersEl = document.querySelectorAll('.answer')
let startEl = document.getElementById('start')
let inputEl = document.getElementsByName('answer')

let time = 60;


// Make sure to save these to browser info and add a reset button on home menu
let correct = 0;

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

function testArr(num) {
    questionEl.innerHTML = questionArr[num][0];
    for(i=0;i<questionArr[num].length-2;i++){
        answersEl[i].innerHTML = questionArr[num][i+1];
        inputEl[i].removeAttribute('value');
        questionArr[num][5]();
    }
    startEl.innerHTML = "submit"
    startEl.setAttribute('id', 'submit');
    let submitEl = document.getElementById('submit');

    submitEl.addEventListener('click', function(e){
        e.preventDefault()
        
        
        console.log(inputEl[0].value)
        console.log(inputEl[1].value)
        console.log(inputEl[2].value)
        console.log(inputEl[3].value)
        
        // the for loop here is causing trouble. it loops thru the for loop presenting alerts several times over for each question. could i change it to search through the array inputEl for a particular .value?
        for(i=0;i<inputEl.length;i++) {
        if (inputEl[i].checked){
            if(inputEl[i].value == 'true'){
                correct += 1;
                alert('correct!')
            } else {alert('better luck next time')}
        }}
        if(time === 0 || num > questionArr.length) {
            return alert('thanks for playing! Your score: ' + correct / questionArr.length)
        } else {testArr(num + 1)}

    })
    
};

testArr(0);

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

