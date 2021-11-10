import { checkUrl } from './URLChecker'


function handleSubmit(event){
  event.preventDefault();
  const  url = document.getElementById('article-url').value
  console.log(url)
 if (checkUrl(url))
 {
  document.getElementById("loading").innerHTML = "Please wait, Data is being Fetched"
      fetch("http://localhost:3000/add-url", {
                      "method": "POST",
                      mode: 'cors',
                      "credentials": "same-origin",
                      headers: {"Content-Type": "application/json"},
                      body:  JSON.stringify({url})
                      }).then(res=> res.json())
                      .then(returnedData=>{
                              //fetching elements from dom 
                              const text = document.getElementById('text')
                              const agreement=document.getElementById('agreement')
                              const confidence=document.getElementById('confidence')
                              const score=document.getElementById('score_tag')
                              const subjectivity=document.getElementById('subjectivity')
                              const irony=document.getElementById('irony')
                              const loading=document.getElementById("loading")
                              
                              //setting the values 
                              loading.textContent = ""
                              text.textContent = `text:${returnedData.text}`
                              agreement.textContent = `agreement: ${returnedData.agreement}`
                              confidence.textContent = `confidence: ${returnedData.confidence}`
                              score.textContent = `score tag: ${returnedData.score_tag}`
                              subjectivity.textContent = `subjectivity: ${returnedData.subjectivity}`
                              irony.textContent = `irony: ${returnedData.irony}`
                              
                      }) 
                      .catch(error=>console.log(error))
  } 
          


  else {
    alert('this URL is not valid please enter a valid url ')
  }
}

export default handleSubmit