

/*https://github.com/AriyoOluwamayowa/api-integration
https://github.com/prabinmagar/quiz-app-using-js-with-open-trivia-DB-api
https://m.youtube.com/watch?v=-cX5jnQgqSM&pp=ygVCSG93IHRvIHVzZSBvcGVuIFRyaXZpYSBBcGkuICBodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA_YW1vdW50PTEw

*/

'use strict'
const quizQuestion =  document.querySelector('.quiz-questions')
const quizResult = document.querySelector('.result')
const quizanswerOptions = document.querySelectorAll(".options");
const nextButton = document.querySelector('.next-button');


async function loadQuestion(){

     // Clear the existing options before loading a new question
     quizanswerOptions.forEach((optionsElement) => {
        optionsElement.innerHTML = '';
    });

    //Clear the existing options before loading a new question
    quizanswerOptions.forEach((optionsElement) =>{
        optionsElement.innerHTML = '';
    })
    const APIUrl = `https:opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
    const result = await fetch(`${APIUrl}`)
    
    const data = await result.json();
    console.log(data.results[0])
  // choices.innerHTML = "";
  
const correctAnswer = data.results[0].correct_answer;
const correctQuestions = data.results[0].question
quizResult.textContent = correctAnswer
quizQuestion.textContent = correctQuestions

//fecth all answers 
const answerOptions = [...data.results[0].incorrect_answers, data.results[0].correct_answer]
console.log(answerOptions)

answerOptions.forEach((option,index)=> {
    const listItem = document.createElement('li')
    listItem.textContent = `${index + 1}. ${option}`
    
    quizanswerOptions.forEach((optionsElement) => {
        optionsElement.appendChild(listItem.cloneNode(true));
    });

    
})

}

loadQuestion()

nextButton.addEventListener('click', loadQuestion)

