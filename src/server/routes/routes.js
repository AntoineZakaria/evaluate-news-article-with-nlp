const dotenv = require('dotenv');
dotenv.config();


const express = require('express')
const axios = require('axios')

//used for routing 
const router= express.Router()
//used in testing
const mockAPIResponse = require('../mockAPI')
//first get 
router.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
  })


  //post request for add-url
  router.post('/add-url', async (request, response) => {
    //getting the url from the request body 
    const { url } = request.body
    //building the url with api id and api key and the url which we got from the client 
    const fullurl =`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.APIKey}&url=${url}&lang=en`
    try {

      axios(fullurl).then((res)=>{
        const {data}=res
        const returnedData={
          text: data.sentence_list[0].text || '',
          score_tag:data.score_tag,
          agreement:data.agreement,
          subjectivity:data.subjectivity,
          confidence:data.confidence,
          irony:data.irony,
          
      }
      response.send(returnedData) // sending the required data to the client 

      })
      
  
         
        }
    catch (e) {
        console.log(e.message)
    }
  })
  

// used for testing 
  router.get('/test', function (req, res) {
    res.send(mockAPIResponse)
  })



  module.exports=router