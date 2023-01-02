const functions = require("firebase-functions");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors")({origin: true});
// Add CORS to your index.js


// Automatically allow cross-origin requests


exports.getTranslation = functions.https.onRequest((request, response) => {
  cors(request, response, () => {});
  const data = request.body;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });


  functions.logger.info("Hello logs!", {structuredData: true});
  functions.logger.info(data, {structuredData: true});
  response.status(200).send({data: "json"});
});




