let html = [
    {
        "question" : "Wer hat HTML erfunden?",
        "answer1" : "Robbie Williams",
        "answer2" : "Lady Gaga",
        "answer3" : "Tim Berners-Lee",
        "answer4" : "Justin Bieber",
        "rightanswer" : 3
    },
    {
        "question" : "Was bedeutet das HTML-Tag < a >?",
        "answer1" : "Text fett",
        "answer2" : "Container",
        "answer3" : "Ein Link",
        "answer4" : "Schrift kursiv",
        "rightanswer" : 3
    },
    {
        "question" : "Was bedeutet das HTML-Tag < b >?",
        "answer1" : "Text fett",
        "answer2" : "Container",
        "answer3" : "Ein Link",
        "answer4" : "Schrift kursiv",
        "rightanswer" : 1
    },
    {
        "question" : "Wann wurde das Internet erfunden?",
        "answer1" : "1966",
        "answer2" : "1967",
        "answer3" : "1968",
        "answer4" : "1969",
        "rightanswer" : 4
    },
    {
        "question" : "Was bedeutet das HTML-Tag < div >?",
        "answer1" : "Text fett",
        "answer2" : "Container",
        "answer3" : "Ein Link",
        "answer4" : "Schrift kursiv",
        "rightanswer" : 2
    },
];


let css = [
    {
        "question" : "Wie kann man die Schriftfarbe ändern?",
        "answer1" : "font-color:",
        "answer2" : "color:",
        "answer3" : "writing-color:",
        "answer4" : "font-writing-color:",
        "rightanswer" : 2
    },
    {
        "question" : "Wie kann man die Hintergrundfarbe ändern?",
        "answer1" : "background-color:",
        "answer2" : "color-of-background:",
        "answer3" : "background:",
        "answer4" : "background-design:",
        "rightanswer" : 1
    },
];

let JS = [
    {
        "question" : "wie definiert man eine Variable?",
        "answer1" : "fun ...",
        "answer2" : "let ...",
        "answer3" : "fun:",
        "answer4" : "let:",
        "rightanswer" : 2
    },
    {
        "question" : "Wann wurde JS erfunden?",
        "answer1" : "1993",
        "answer2" : "1994",
        "answer3" : "1995",
        "answer4" : "1996",
        "rightanswer" : 3
    },
];

let Java = [
    {
        "question" : "was bedeutet das Wort Java?",
        "answer1" : "Fanta",
        "answer2" : "Cola",
        "answer3" : "Wasser",
        "answer4" : "Kaffee",
        "rightanswer" : 4
    },
    {
        "question" : "Wann wurde Java erfunden?",
        "answer1" : "1993",
        "answer2" : "1994",
        "answer3" : "1995",
        "answer4" : "1996",
        "rightanswer" : 3
    },
];


let currentQuestion = 0;
let correctAnswers = 0;
let pickedAnswer = false;
let userAnswers = [];
let gamestarted = false;
let choosenGame;
let whatQuestions = [];
let TypOfQuestions = [];
let Navlock = false;
let Quiz = "";
let QuizLength = "";


function setgame(){
    gamestarted = true;
}


function endgame(){
    gamestarted = false;
}


function checkForNavHover(){
    if (gamestarted == true){
        openErrorWindowNav();
    }
}


function openErrorWindowNav(){
    document.getElementById('errorBackgroundNav').classList.remove('d-none');
    document.getElementById('errorWindowNav').classList.remove('d-none');
}


function continueGame(){
    document.getElementById('errorBackgroundNav').classList.add('d-none');
    document.getElementById('errorWindowNav').classList.add('d-none');
}


function stopGame(){
    backToIndex();
}


function showRightQuestions(question){
    if (whatQuestions == 1){
        question.innerHTML = html[currentQuestion]['question'];
        answer1.innerHTML += html[currentQuestion]['answer1'];
        answer2.innerHTML += html[currentQuestion]['answer2'];
        answer3.innerHTML += html[currentQuestion]['answer3'];
        answer4.innerHTML += html[currentQuestion]['answer4'];
    }else if (whatQuestions == 2){
        question.innerHTML = css[currentQuestion]['question'];
        answer1.innerHTML += css[currentQuestion]['answer1'];
        answer2.innerHTML += css[currentQuestion]['answer2'];
        answer3.innerHTML += css[currentQuestion]['answer3'];
        answer4.innerHTML += css[currentQuestion]['answer4'];
    }else if (whatQuestions == 3){
        question.innerHTML = JS[currentQuestion]['question'];
        answer1.innerHTML += JS[currentQuestion]['answer1'];
        answer2.innerHTML += JS[currentQuestion]['answer2'];
        answer3.innerHTML += JS[currentQuestion]['answer3'];
        answer4.innerHTML += JS[currentQuestion]['answer4'];
    } else if(whatQuestions == 4){
        question.innerHTML = Java[currentQuestion]['question'];
        answer1.innerHTML += Java[currentQuestion]['answer1'];
        answer2.innerHTML += Java[currentQuestion]['answer2'];
        answer3.innerHTML += Java[currentQuestion]['answer3'];
        answer4.innerHTML += Java[currentQuestion]['answer4'];
    }
}


function showAllElements(){
    let question = document.getElementById('question');
    let answer1 = document.getElementById(`answer1`);
    let answer2 = document.getElementById(`answer2`);
    let answer3 = document.getElementById(`answer3`);
    let answer4 = document.getElementById(`answer4`);
    answer1.innerHTML = '<div id="Letter1" class="letter">A</div>';
    answer2.innerHTML = '<div id="Letter2" class="letter">B</div>';
    answer3.innerHTML = '<div id="Letter3" class="letter">C</div>';
    answer4.innerHTML = '<div id="Letter4" class="letter">D</div>';
    showRightQuestions(question);
}


function htmlWasChosen(){
    if (currentQuestion < html.length){
        showAllElements(answer1, answer2, answer3, answer4);
    } else if (currentQuestion == html.length){
        showResult();
        endgame();
    }
}


function cssWasChosen(){
    if (currentQuestion < css.length){
        showAllElements(answer1, answer2, answer3, answer4);
    } else if (currentQuestion == css.length){
        showResult();
        endgame();
    }
}


function JSWasChosen(){
    if (currentQuestion < JS.length){
        showAllElements(answer1, answer2, answer3, answer4);
    } else if (currentQuestion == JS.length){
        showResult();
        endgame();
    }
}


function JavaWasChosen(){
    if (currentQuestion < Java.length){
        showAllElements(answer1, answer2, answer3, answer4);
    } else if (currentQuestion == Java.length){
        showResult();
        endgame();
    }
}


function aQuizWasChosen(){
    loadTypOfQuestions();
    if (whatQuestions == 1){
        htmlWasChosen();
    }else if (whatQuestions == 2){
        cssWasChosen();
    }else if (whatQuestions == 3){
        JSWasChosen();
    }else if (whatQuestions == 4){
        JavaWasChosen();
    }
}


function showErrorWindowBecauseNoQuizcategoryWasChosen(){
    document.getElementById('noCategoryChoosenSection').classList.remove('d-none');
    for (let k = 1; k < 5; k++){
        document.getElementById(`answer${k}`).classList.add('d-none');
    }
    document.getElementById('ProgressArea').classList.add('d-none');
    document.getElementById('backAndForward').classList.add('d-none');
}


function showquestion(){
    if (whatQuestions == '1' || whatQuestions == '2' || whatQuestions == '3' || whatQuestions == '4'){
        aQuizWasChosen();
    }else{
        showErrorWindowBecauseNoQuizcategoryWasChosen();
    }
}


function rightAnswerselected(givenAnswer){
    document.getElementById(`answer${givenAnswer}`).classList.add('rightAnswer');
    document.getElementById(`Letter${givenAnswer}`).classList.add('rightLetter');
    for (let j = 1; j < 5; j++){
        document.getElementById(`answer${j}`).classList.remove('answer');
        document.getElementById(`answer${j}`).classList.add('answerWithoutHover');    
    }        
    pickedAnswer = true;
    correctAnswers ++;
}


function firstAnswerRight(){
    document.getElementById(`answer${html[currentQuestion]['rightanswer']}`).classList.add('rightAnswer');
    document.getElementById(`Letter${html[currentQuestion]['rightanswer']}`).classList.add('rightLetter');
}


function secondAnswerRight(){
    document.getElementById(`answer${css[currentQuestion]['rightanswer']}`).classList.add('rightAnswer');
    document.getElementById(`Letter${css[currentQuestion]['rightanswer']}`).classList.add('rightLetter');
}


function thirdAnswerRight(){
    document.getElementById(`answer${JS[currentQuestion]['rightanswer']}`).classList.add('rightAnswer');
    document.getElementById(`Letter${JS[currentQuestion]['rightanswer']}`).classList.add('rightLetter');
}


function fourthAnswerRight(){
    document.getElementById(`answer${Java[currentQuestion]['rightanswer']}`).classList.add('rightAnswer');
    document.getElementById(`Letter${Java[currentQuestion]['rightanswer']}`).classList.add('rightLetter');
}


function wrongAnswerselected(givenAnswer){
    document.getElementById(`answer${givenAnswer}`).classList.add('wrongAnswer');
    document.getElementById(`Letter${givenAnswer}`).classList.add('wrongLetter');
    if (whatQuestions == 1){
        firstAnswerRight();
    }else if (whatQuestions == 2){
        secondAnswerRight();
    }else if (whatQuestions == 3){
        thirdAnswerRight();
    }else if (whatQuestions == 4){
        fourthAnswerRight();
    }
    for (let j = 1; j < 5; j++){
        document.getElementById(`answer${j}`).classList.remove('answer');
        document.getElementById(`answer${j}`).classList.add('answerWithoutHover');    
    }
    pickedAnswer = true;
}


function htmlQuizSelectAnswer(givenAnswer){
    if (givenAnswer == html[currentQuestion]['rightanswer']){
        rightAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    } else {
        wrongAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    }
}


function cssQuizSelectAnswer(givenAnswer){
    if (givenAnswer == css[currentQuestion]['rightanswer']){
        rightAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    } else {
        wrongAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    }
}


function JSQuizSelectAnswer(givenAnswer){
    if (givenAnswer == JS[currentQuestion]['rightanswer']){
        rightAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    } else {
        wrongAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    }
}


function JavaQuizSelectAnswer(givenAnswer){
    if (givenAnswer == Java[currentQuestion]['rightanswer']){
        rightAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    } else {
        wrongAnswerselected(givenAnswer);
        saveGivenAnswersInLocalStorage(givenAnswer);
    }
}


function selectAnswer(givenAnswer){
    if(pickedAnswer == false){
        if (whatQuestions == 1){
            htmlQuizSelectAnswer(givenAnswer);
        }else if (whatQuestions == 2){
            cssQuizSelectAnswer(givenAnswer);
        }else if (whatQuestions == 3){
            JSQuizSelectAnswer(givenAnswer);
        }else if (whatQuestions == 4){
            JavaQuizSelectAnswer(givenAnswer);
        }
    }
    showprogress();
}


function resetLocalStorage(){
    for (i = 0; i < userAnswers.length; i++){
        userAnswers.splice(i,1);
    }
}


function saveGivenAnswersInLocalStorage(givenAnswer){ // speichert gegebene Antwort in LS
    let UserAnswers = givenAnswer;
    userAnswers.push(UserAnswers);
    setArray('Answers',userAnswers);
}


function setArray(key, array){ // speichert gegebene Antwort in LS
    localStorage.setItem(key,JSON.stringify(array));
}


function loadGivenAnswersFromLocalStorage(){ //speichert die Werte aus dem LS wieder im Array userAnswers
    userAnswers = getArray('Answers');
}


function getArray(key){ // ruft Werte aus LS ab
    return JSON.parse(localStorage.getItem(key));
}


function removeAllColors(){ // entfernt alle Farben vom Spielfeld
    for (let j = 1; j <5; j++){
        document.getElementById(`answer${j}`).classList.remove('rightAnswer')
        document.getElementById(`answer${j}`).classList.remove('rightLetter');
        document.getElementById(`answer${j}`).classList.remove('wrongAnswer');
        document.getElementById(`answer${j}`).classList.remove('wrongLetter');
    }
}


function deleteLocalStorage(){ // leert den LS vor jedem Spielstart
    let UserAnswers = '';
    userAnswers.push(UserAnswers);
    setArray('Answers',userAnswers);
    let WhatQuestions;
    whatQuestions.push(WhatQuestions);
    setArray('Questions',whatQuestions);
}


function addHover(){
    for (let j = 1; j < 5; j++){
        document.getElementById(`answer${j}`).classList.remove('answerWithoutHover');
        document.getElementById(`answer${j}`).classList.add('answer');     
    }
}


function showprogress(){
    let progress = 0;
    if (whatQuestions == 1){
        progress = Math.round((currentQuestion+1)/html.length*100);
    }else if (whatQuestions == 2){
        progress = Math.round((currentQuestion+1)/css.length*100);
    }else if (whatQuestions == 3){
        progress = Math.round((currentQuestion+1)/JS.length*100);
    }else if (whatQuestions == 2){
        progress = Mah.round((currentQuestion+1)/Java.length*100);
    }
    document.getElementById('newProgressbar').style.width= `${progress}%`;
    document.getElementById('newProgressbar').innerHTML = `${progress}%`;
}


function showprogressreverse(){
    if (currentQuestion == 0){ 
        Question0();
    } else if(currentQuestion == 1){
        Question1();
    } else if(currentQuestion == 2){
        Question2();
    } else if(currentQuestion == 3){
        Question3();
    } else if(currentQuestion == 4){
        Question4();
    }
}


function checkAnsweredThisQuestionBefore(){
    alert(currentQuestion);
    alert(userAnswers[currentQuestion]);
}


function showErrorWindow(){
    document.getElementById('errorBackground').classList.add('darkBackground');
    document.getElementById('errorBackground').classList.remove('d-none');
    document.getElementById('errorWindow').classList.remove('d-none');
    document.getElementById('errorWindow').classList.add('errorWindow');
    document.getElementById('errorMessage').innerHTML = 'Bitte wähle erst eine Antwortmöglichkeit aus!';
}


function nextquestion(){
    if (pickedAnswer == true){ // wenn eine Antwort angeklickt wurde, dann....
        currentQuestion ++;
        addHover();
        removeAllColors()
        showquestion();
        if(userAnswers.length > currentQuestion){ // muss noch bearbeitet werden - evt. wieder löschen
            whatAnswerWasGiven(); //evt. wieder löschen
        }else{//evt. wieder löschen
        pickedAnswer = false;
        }
    }else{ // Wenn keine Antwort angeklickt wurde, dann..
        showErrorWindow();
    }
}


function updateLocalStorage(){
    loadGivenAnswersFromLocalStorage(); // läd LS
    setArray('Answers',userAnswers);//Arry wieder im LS speichern
}


function givenAnswerOne(){
    let rightAnswerOfCurrentQuestion = html[currentQuestion]['rightanswer'];
    let wrongAnswerOfCurrentQuestion = userAnswers[currentQuestion];
    document.getElementById(`answer${rightAnswerOfCurrentQuestion}`).classList.add('rightAnswer');
    document.getElementById(`Letter${rightAnswerOfCurrentQuestion}`).classList.add('rightLetter');
    if (rightAnswerOfCurrentQuestion != userAnswers[currentQuestion]){
        document.getElementById(`answer${wrongAnswerOfCurrentQuestion}`).classList.add('wrongAnswer');
        document.getElementById(`Letter${wrongAnswerOfCurrentQuestion}`).classList.add('wrongLetter');
    }
    createCover();
}


function givenAnswerTwo(){
    let rightAnswerOfCurrentQuestion = css[currentQuestion]['rightanswer'];
    let wrongAnswerOfCurrentQuestion = userAnswers[currentQuestion];
    document.getElementById(`answer${rightAnswerOfCurrentQuestion}`).classList.add('rightAnswer');
    document.getElementById(`Letter${rightAnswerOfCurrentQuestion}`).classList.add('rightLetter');
    if (rightAnswerOfCurrentQuestion != userAnswers[currentQuestion]){
        document.getElementById(`answer${wrongAnswerOfCurrentQuestion}`).classList.add('wrongAnswer');
        document.getElementById(`Letter${wrongAnswerOfCurrentQuestion}`).classList.add('wrongLetter');
    }
    createCover();
}


function givenAnswerThree(){
    let rightAnswerOfCurrentQuestion = JS[currentQuestion]['rightanswer'];
    let wrongAnswerOfCurrentQuestion = userAnswers[currentQuestion];
    document.getElementById(`answer${rightAnswerOfCurrentQuestion}`).classList.add('rightAnswer');
    document.getElementById(`Letter${rightAnswerOfCurrentQuestion}`).classList.add('rightLetter');
    if (rightAnswerOfCurrentQuestion != userAnswers[currentQuestion]){
        document.getElementById(`answer${wrongAnswerOfCurrentQuestion}`).classList.add('wrongAnswer');
        document.getElementById(`Letter${wrongAnswerOfCurrentQuestion}`).classList.add('wrongLetter');
    }
    createCover();
}


function givenAnswerFour(){
    let rightAnswerOfCurrentQuestion = Java[currentQuestion]['rightanswer'];
    let wrongAnswerOfCurrentQuestion = userAnswers[currentQuestion];
    document.getElementById(`answer${rightAnswerOfCurrentQuestion}`).classList.add('rightAnswer');
    document.getElementById(`Letter${rightAnswerOfCurrentQuestion}`).classList.add('rightLetter');
    if (rightAnswerOfCurrentQuestion != userAnswers[currentQuestion]){
        document.getElementById(`answer${wrongAnswerOfCurrentQuestion}`).classList.add('wrongAnswer');
        document.getElementById(`Letter${wrongAnswerOfCurrentQuestion}`).classList.add('wrongLetter');
    }
    createCover();
}


function whatAnswerWasGiven(){
    if (whatQuestions == 1){
        givenAnswerOne();
    }else if (whatQuestions == 2){
        givenAnswerTwo();
    }else if (whatQuestions == 3){
        givenAnswerThree();
    }else if (whatQuestions == 4){
        givenAnswerFour();
    }
}


function createCover(){
    document.getElementById('matchfield').classList.add('cover');
    for (let i = 0; i <4; i++){
        document.getElementById(`answer${i}`).classList.remove('answer');
        document.getElementById(`answer${i}`).classList.add('answerWithoutHover');
    }
    pickedAnswer = true;
}


function previousquestion(){
    if (currentQuestion != 0){//pickedAnswer == false &&
        removeAllColors(); 
        currentQuestion --;
        showquestion();
        whatAnswerWasGiven();
        updateLocalStorage();
    }
}


function closeErrorWindow(){
    document.getElementById('errorBackground').classList.remove('darkBackground');
    document.getElementById('errorBackground').classList.add('d-none');
    document.getElementById('errorWindow').classList.remove('errorWindow');
    document.getElementById('errorMessage').innerHTML = '';
}


function removeAllIdForResult(){
    document.getElementById('questions').classList.add('d-none');
    document.getElementById('question').classList.add('d-none');
    document.getElementById('answers').classList.add('d-none');
    for (let i = 1; i < 5; i++){
        document.getElementById(`answer${i}`).classList.add('d-none');
        document.getElementById(`Letter${i}`).classList.add('d-none');
    }
}


function showAllIDForResult(){
    document.getElementById('resultfield').classList.remove('d-none');
    document.getElementById('scoreContainer').classList.remove('d-none');
    document.getElementById('score').classList.remove('d-none');
    document.getElementById('scoreNo').classList.remove('d-none');
    document.getElementById('correctAnswers').classList.remove('d-none');
    document.getElementById('maxCorrectAnswers').classList.remove('d-none');
    document.getElementById('resultButtons').classList.remove('d-none');
    document.getElementById('shareButton').classList.remove('d-none');
    document.getElementById('replayButton').classList.remove('d-none');
}


function showAmountOfQUestions(){
    if (whatQuestions == 1){
        document.getElementById('maxCorrectAnswers').innerHTML = html.length;
    }else if (whatQuestions == 2){
        document.getElementById('maxCorrectAnswers').innerHTML = css.length;
    }else if (whatQuestions == 3){
        document.getElementById('maxCorrectAnswers').innerHTML = JS.length;
    }else if (whatQuestions == 4){
        document.getElementById('maxCorrectAnswers').innerHTML = Java.length;
    }
}


function showResult(){
    removeAllIdForResult();
    showAllIDForResult();
    document.getElementById('correctAnswers').innerHTML = correctAnswers;
    showAmountOfQUestions();
    document.getElementById('backAndForward').classList.add('d-none');
    document.getElementById('matchfield').classList.add('removePadding');
}


function backToIndex(){
    document.getElementById('replayButton').onclick=window.location.href="index.html";
}


function TypOfQuiz(){
    if (whatQuestions == 1){
        Quiz = "HTML";
        QuizLength = html.length;
    }else if(whatQuestions == 2){
        Quiz = "CSS";
        QuizLength = css.length;
    }else if(whatQuestions == 3){
        Quiz = "Javascript";
        QuizLength = JS.length;
    }else if(whatQuestions == 4){
        Quiz = "Java";
        QuizLength = Java.length;
    }
}


function sendmail() {  
    let e = document.getElementById('mail');
    e.href+= ` ${Quiz}-Quiz ${correctAnswers} von ${QuizLength} Fragen richtig beantwortet!%0A%0A`;
    return true;
}


function removeNavlockClasses(){
    for (let i = 1; i<5; i++){
        document.getElementById(`nav${i}`).classList.remove('navlock')
    }
}


function resetNavlock(){
    Navlock = false;
}


function navlock(i){
    Navlock = true;
    removeNavlockClasses();
    document.getElementById(`nav${i}`).classList.add('navlock');
    whatQuestions = i;
}


function saveTypOfQuestionsInLS(i){
    setArray('Questions',i);
}


function loadTypOfQuestions(){
    whatQuestions = getArray('Questions');
}


function startGame(){
    deleteLocalStorage();
}