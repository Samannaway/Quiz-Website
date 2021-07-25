const Database= [
    {
        question:"What is full form of HTML ?",
        a:"Hyper Text Markup Language",
        b:"Hyper Text Max Language",
        c:"Halo Tide Mixup Language",
        d:"Hans Time Meeting Line",
        ans:"ans1"
    },

    {
        question:"What is full form of JS ?",
        a:"Jav Stage",
        b:"Java Size",
        c:"Java script",
        d:"Java Sckit",
        ans:"ans3"
    },

    {
        question:"What is full form of CSS ?",
        a:"Class Styling Sheets",
        b:"Cascading Styled Sheets",
        c:"Case Style Section",
        d:"Computer Scroll Size",
        ans:"ans2"
    }

]

const question = document.querySelector(".questions")
const op1 = document.querySelector("#option1")
const op2 = document.querySelector("#option2")
const op3 = document.querySelector("#option3")
const op4 = document.querySelector("#option4")
const subBtn = document.querySelector("#submit")
const answers = document.querySelectorAll(".answer")
const scoreArea = document.querySelector("#showscore")

let QueCount = 0;
let score = 0;

const QueLoader = ()=>{
    question.innerHTML = (Database[QueCount].question)
    
    op1.innerHTML = (Database[QueCount].a)
    op2.innerHTML = (Database[QueCount].b)
    op3.innerHTML = (Database[QueCount].c)
    op4.innerHTML = (Database[QueCount].d)

}

QueLoader()

const QuestionChecker = ()=>{
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id
        }
    });
    return answer;
}

subBtn.addEventListener("click" ,()=>{
    const checkedAnswer = QuestionChecker()
    console.log(checkedAnswer);

    if (checkedAnswer === Database[QueCount].ans) {
        score++;
    };

    QueCount++;

    if (QueCount < Database.length) {
        QueLoader()
    }else{
        scoreArea.innerHTML = `
        <h2> You scored ${score}/${Database.length} </h2>
        <button class ="btn" onclick="location.reload()">Try Again</button>
        `;

        scoreArea.classList.remove("scorearea")
    }
})