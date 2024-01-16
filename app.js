let question=document.querySelector(".question");
let options=document.querySelectorAll(".option");
let start=document.getElementById("start");
let reset=document.getElementById("reset");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");
let option4=document.getElementById("option4");

function loading()
{
    question.innerHTML="<b>INSTRUCTIONS:<br><br>Click <u>Start</u> to start quiz<br>Click <u>Reset</u> to Restart the Quiz<br>Click on the button with the Correct Option Number below to give your answer!!<br><br><u>For Answers</u> :<br><br> Right click on screen->Inspect->console->Write 'correctAns' on console</br>";
    option1.disabled=true;
    option2.disabled=true;
    option3.disabled=true;
    option4.disabled=true;
    start.style.visibility='visible';

    // option1.style.display='none';
    // option2.style.display='none';
    // option3.style.display='none';
    // option4.style.display='none';
    option1.style.visibility='hidden';
    option2.style.visibility='hidden';
    option3.style.visibility='hidden';
    option4.style.visibility='hidden';
}

questionArray=[
"Which of the following is correct about JavaScript?",
"Arrays in JavaScript are defined by which of the following statements?",
"Will the following JavaScript code work: var js = (function(x) {return x*x;}(10));",
"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
"Which of the following can be used to call a JavaScript Code Snippet?",
"Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
"Why JavaScript Engine is needed?",
"Output:  int a=0; for(a;a<5;a++); console.log(a);",
"Which of the following is not a framework?",
"Which of the following is not an error in JavaScript?"
];

optionArray=[
["JavaScript is an Object-Based language","JavaScript is Assembly-language","JavaScript is an Object-Oriented language","JavaScript is a High-level language"],
[" It is an ordered list of values"," It is an ordered list of objects"," It is an ordered list of strings"," It is an ordered list of functions"],
[" Exception will be thrown"," Memory leak"," Error"," Yes,Perfectly"],
[" Position"," Window"," Standard"," Location"],
[" Function/Method"," PreProcessor"," Triggering Event"," RMI"],
[" will work perfectly well on a Windows Machine"," will be displayed as JavaScript text on the browser"," will throw errors and exceptions"," must be restricted to a Unix Machine only"],
[" Both Compiling & Interpreting the JavaScript"," Parsing the javascript"," Interpreting the JavaScript"," Compiling the JavaScript"],
["4","5","0","Error"],
[" Javascript .NET","Javascript","CocoaJS","JQuery"],
[" Missing of bracket"," Syntax error"," Missing of Semicolons"," Division by Zero"]
];

let giveAns=[];
let correctAns=['1','1','4','2','1','1','3','2','2','4'];

function scoring(gA,cA)
{
    let l=0,score=0;
    while(l<giveAns.length)
    {
        if(giveAns[l]==correctAns[l])
        {
            score++;
            l++;
        }
        else
        {
            l++;
        }
    }
    return score;
}




let i=0;
function showQ(qA,i)
{
    question.innerHTML=`Question:${i+1} of ${qA.length} <br><br> ${qA[i]}`;
}
function showA(oA,i)
{
    question.innerHTML+=`<br><br>A. ${oA[i][0]}<br>B. ${oA[i][1]}<br>C. ${oA[i][2]}<br>D. ${oA[i][4]}`;

}

start.addEventListener("click",()=>
{
    if(i==0)
    {
        // let score=scoring(giveAns,correctAns);
        // question.innerHTML=`End of Question! <br><br>You got ${score} answer/s correct out of ${questionArray.length} questions`;
        // option1.disabled=true;
        // option2.disabled=true;
        // option3.disabled=true;
        // option4.disabled=true;
        showQ(questionArray,i);
        showA(optionArray,i);
        i++;
        option1.disabled=false;
        option2.disabled=false;
        option3.disabled=false;
        option4.disabled=false;

        // option1.style.display='block';
        // option2.style.display='block';
        // option3.style.display='block';
        // option4.style.display='block';
        option1.style.visibility='visible';
        option2.style.visibility='visible';
        option3.style.visibility='visible';
        option4.style.visibility='visible';

        start.style.visibility='hidden';
    }
    else
    {
        start.disabled=true;
        // start.style.display='none';
    }
})

option1.addEventListener("click",()=>
{
    giveAns.push(option1.value);
    if(i>questionArray.length-1)
    {
        let score=scoring(giveAns,correctAns);
        question.innerHTML=`End of Question! <br><br>You got ${score} question/s correct out of ${questionArray.length} questions`;
        option1.disabled=true;
        option2.disabled=true;
        option3.disabled=true;
        option4.disabled=true;

        option1.style.visibility='hidden';
        option2.style.visibility='hidden';
        option3.style.visibility='hidden';
        option4.style.visibility='hidden';

        start.style.visibility='hidden';
    }
    else
    {
        showQ(questionArray,i);
        showA(optionArray,i);
        i++;
        option1.disabled=false;
        option2.disabled=false;
        option3.disabled=false;
        option4.disabled=false;

        start.style.visibility='hidden';
    }
})
option2.addEventListener("click",()=>
{
    giveAns.push(option2.value);
    if(i>questionArray.length-1)
    {
        let score=scoring(giveAns,correctAns);
        question.innerHTML=`End of Question! <br><br>You got ${score} questions/s correct out of ${questionArray.length} questions`;
        option1.disabled=true;
        option2.disabled=true;
        option3.disabled=true;
        option4.disabled=true;

        option1.style.visibility='hidden';
        option2.style.visibility='hidden';
        option3.style.visibility='hidden';
        option4.style.visibility='hidden';

        start.style.visibility='hidden';
    }
    else
    {
        showQ(questionArray,i);
        showA(optionArray,i);
        i++;
        option1.disabled=false;
        option2.disabled=false;
        option3.disabled=false;
        option4.disabled=false;

        start.style.visibility='hidden';
    }
})
option3.addEventListener("click",()=>
{
    giveAns.push(option3.value);
    if(i>questionArray.length-1)
    {
        let score=scoring(giveAns,correctAns);
        question.innerHTML=`End of Question! <br><br>You got ${score} question/s correct out of ${questionArray.length} questions`;
        option1.disabled=true;
        option2.disabled=true;
        option3.disabled=true;
        option4.disabled=true;

        option1.style.visibility='hidden';
        option2.style.visibility='hidden';
        option3.style.visibility='hidden';
        option4.style.visibility='hidden';
        
        start.style.visibility='hidden';
    }
    else
    {
        showQ(questionArray,i);
        showA(optionArray,i);
        i++;
        option1.disabled=false;
        option2.disabled=false;
        option3.disabled=false;
        option4.disabled=false;

        start.style.visibility='hidden';
    }
})
option4.addEventListener("click",()=>
{
    giveAns.push(option4.value);
    if(i>questionArray.length-1)
    {
        let score=scoring(giveAns,correctAns);
        question.innerHTML=`End of Question! <br><br>You got ${score} question/s correct out of ${questionArray.length} questions`;
        option1.disabled=true;
        option2.disabled=true;
        option3.disabled=true;
        option4.disabled=true;

        start.style.visibility='hidden';

        option1.style.visibility='hidden';
        option2.style.visibility='hidden';
        option3.style.visibility='hidden';
        option4.style.visibility='hidden';
    }
    else
    {
        showQ(questionArray,i);
        showA(optionArray,i);
        i++;
        option1.disabled=false;
        option2.disabled=false;
        option3.disabled=false;
        option4.disabled=false;

        start.style.visibility='hidden';
    }
})

reset.addEventListener("click",()=>
{
    loading();
    i=0;  
    giveAns=[];

    start.style.visibility='visible';
})


