const dialogflow = require('dialogflow')
const uuid = require('uuid')
const sessionId = uuid.v4()

const sessionsClient = new dialogflow.SessionsClient({
    keyFilename : '../config/dialogFlowService.json'
})
const projectId = require('../config/dialogFlowService.json.project_id')

const chatMessageSend = async (req, res) => {
 let {userMsg} = req.body
 const sessionPath = sessionsClient.sessionPath(projectId, sessionId)
 const request = {
    session : sessionPath,
    queryInput : {
        text : {
            text : userMsg,
            languageCode : 'en-US'
        }
    }
 }  
  try {
    const response = await sessionsClient.detectIntent(request)
    const result = response[0].queryResult;
    const finalResult = await result.fulfillmentText;
    
    res.status(200).json({message : 'Sucess', data : finalResult})
  } 
  catch (error) {
    res.status(500).json({message: 'Server error'})  }
}
module.exports = chatMessageSend;
