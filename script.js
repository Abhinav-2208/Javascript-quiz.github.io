window.onload=function(){
    show(0);
}
// Here i have attached a url of mcq question through the api of opentdb for questions
fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple");
let questions=[{
    id:1,
    question:"What is the full form of RAM ?",
    answer:"Random Access Memory",
    options:["Random Access Memory","Randomely Access Memory","Run Accept Memory","None of these"]
},
{
    id:2,
    question:"What is the full form of CPU ?",
    answer:"Central Processing Unit",
    options:["Central Program Unit","Central Processing Unit","Central Preload Unit","None of these"]
},
{
    id:3,
    question:"What is the full form of E-mail ?",
    answer:"Electronic Mail",
    options:["Electronic Mail","Electric Mail","Engine Mail","None of these"]
}
];

function submitForm(e){
     e.preventDefault();
    let name=document.getElementById("name").value;
    // store player name by using sessionStorage
    // sessionStorage("name",name);
    // to go on the page of question
      location.href="quiz.html"
    // alert(name);
}
let question_count=0;
let quiz_point=0;
function next(){
    // we have to search a option in which active class is then i will check wheater the answer is correct or not.
    let user_answer=document.querySelector("li.option.active").innerHTML;
     // now we will check for correct answer
    if(user_answer==questions[question_count].answer){
        quiz_point+=10;//10 point per correct answer
        sessionStorage.setItem("points",quiz_point)
    }
    else{
        quiz_point-=5;//for negative marking
        sessionStorage.setItem("points",quiz_point)
    }
    // if user click on last question then we have to go on another page that is score page
    if(question_count==questions.length-1){
        // we will store how much time taken before going on the end page
        sessionStorage.setItem("time",`${minute}minutes and ${seconds}seconds`);
        // we will clearinterval which is running every second
        clearInterval(mytime);
        location.href="end.html";
        return;
    }
    question_count++;
    show(question_count);
}

function show(count){
    let question=document.getElementById("questions");
    question.innerHTML=`<h2>Q${question_count+1}.${questions[count].question}</h2>
                <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>
                `;
                toggleActive();//calling of toggleActive to show the class active effect
}

// when user click on any option then active class should add 
function toggleActive(){
    let option=document.querySelectorAll("li.option");
    // 1st of all i have accessed all the option using query selector and it will return array. now run a loop
    for(let i=0;i<option.length;i++){
        option[i].onclick=function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }

}
