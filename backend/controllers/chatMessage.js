// const dialogflow = require("@google-cloud/dialogflow");
// const uuid = require("uuid");
// const path = require("path");

// const projectId = "tekvibeagent";
// console.log("projectId ==>", projectId);

// const sessionClient = new dialogflow.SessionsClient({
//   keyFilename: path.join(__dirname, "../config/dialogFlowService.json"),
// });

const chatMessage = async (req, res) => {
//   try {
//     const sessionId = uuid.v4();
//     const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

//     const request = {
//       session: sessionPath,
//       queryInput: {
//         text: {
//           text: req.body.message,
//           languageCode: "en",
//         },
//       },
//     };

//     const responses = await sessionClient.detectIntent(request);
//     const result = responses[0].queryResult;

//     res.status(200).json({ response: result.fulfillmentText });
//   } catch (error) {
//     console.error("Dialogflow Error:", error);
//     res.status(500).json({ error: "Failed to get response from Dialogflow" });
//   }
};

module.exports = chatMessage;
