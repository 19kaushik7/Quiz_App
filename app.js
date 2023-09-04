let gameBox = document.querySelector('.game-box');
let quizBox = document.querySelector('.quiz-box');
let scoreBox = document.querySelector('.score-box');
let playBtn = document.querySelector('#playBtn');
let submitBtn = document.querySelector('#submitBtn');
let optionAll = document.querySelectorAll('.option');
let playAgain = document.querySelector('#playAgain');
let exitBtn = document.querySelector('#exitBtn');
let quizCount = 0;
let right_Ans = 0;
let wrong_Ans = 0;
let point_val = 0;
playBtn.addEventListener('click', () => {
    gameBox.classList.add('in-active');
    quizBox.classList.remove('in-active');
    loadQuestion();
});


// question submit button 
submitBtn.addEventListener('click', () => {
    removeClassList();
    quizCount++;
    if (quizCount < quizQuestion.length) {
       loadQuestion();
    }
    else {
        scoreBox.classList.remove('in-active');
         quizBox.classList.add('in-active');
         document.querySelector('.ri-ans').textContent = right_Ans;
         document.querySelector('.wr-ans').textContent = wrong_Ans;
         document.querySelector('.ans').textContent = point_val;
    }
});

// loding question through loadQuistion function 
const loadQuestion = () => {
    let presentation = document.querySelector('#playOutOf');
    let question = document.querySelector('#question');
    let oneOpt = document.querySelector('#oneOpt');
    let twoOpt = document.querySelector('#twoOpt');
    let threeOpt = document.querySelector('#threeOpt');
    let fourOpt = document.querySelector('#fourOpt');
    presentation. innerHTML = `${quizCount+1} out of ${quizQuestion.length}`;
    question.innerHTML = quizQuestion[quizCount].question;
    oneOpt.innerHTML = quizQuestion[quizCount].a;
    twoOpt.innerHTML = quizQuestion[quizCount].b;
    threeOpt.innerHTML = quizQuestion[quizCount].c;
    fourOpt.innerHTML = quizQuestion[quizCount].d;
    
}

// check the ans from user onclick
for (let index = 0; index < optionAll.length; index++) {
    optionAll[index].setAttribute('onclick','checkAns(this)');
}

function checkAns(rec) {
    let currentItem = rec.innerHTML;
    if (currentItem == quizQuestion[quizCount].ans) {
        rec.classList.add('write-ans');
        right_Ans++;
        point_val += 5;
    }
    else {
        rec.classList.add('wrong-ans');
        wrong_Ans++;
        let correctAnswerIndex = findTheIndex();
       optionAll[correctAnswerIndex].classList.add('write-ans');
        
    }
    for (let i = 0; i < optionAll.length; i++) {
        optionAll[i].classList.add('inactive');
    }

}

// find out the index of currect ans 
function findTheIndex() {
 let findIndex;
 for (let b = 0; b < optionAll.length; b++ ) {
  if (optionAll[b].innerHTML == quizQuestion[quizCount].ans) {
    findIndex = b;
  }
 }
 return findIndex;
}
 
// when seccond question load remove the all class of all options 
function removeClassList() {
    for (let f = 0; f < optionAll.length; f++) {
        optionAll[f].classList.remove('inactive');
        optionAll[f].classList.remove('write-ans');
        optionAll[f].classList.remove('wrong-ans');
    }
}



// scoreCard two btn listen effect 
playAgain.addEventListener('click', () => {
    scoreBox.classList.add('in-active');
    quizBox.classList.remove('in-active');
    quizCount = 0;
    right_Ans = 0; 
    wrong_Ans = 0; 
    point_val = 0;
    loadQuestion();
});


exitBtn.addEventListener('click', () => {
    location.reload();
});


