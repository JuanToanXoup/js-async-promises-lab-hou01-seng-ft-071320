const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const displayQuestionOnClick = () => {
  
}


const checkQuestion = (question, answer)=>{	
  question.questionAnswer == answer	
}

const trueAndFalseButtons = () => {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

const toggleTrueAndFalseButtons = () => {	
  trueAndFalseButtons().forEach((btn)=>{	
    btn.classList.toggle("hide")	
  })	
}

const askQuestionThen = (time) => {	
  question = questions[0]	
  appendQuestion(question)
  return new Promise((resolve)=>{resolve(question), time})	
}

const appendQuestion = (quest) => {
  document.querySelector('.question-container').innerHTML = quest.questionText
}

const removeQuestion = () => {
  let questContain = document.querySelector('.question-container')
  while (questContain.firstChild) {
    questContain.removeChild(questContain.lastChild);
  }		
}

const askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time).then(removeQuestion)
}
