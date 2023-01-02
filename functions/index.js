const functions = require("firebase-functions");
const {Configuration, OpenAIApi} = require("openai");
const cors = require("cors")({origin: true});
// Add CORS to your index.js

exports.getTranslation = functions.https.onRequest((request, response) => {
  cors(request, response, () => {});
  const data = request.body;
  console.log(data);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  // console.log(data);
  // console.log(openai);

  openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello there",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }).then((apiResponse) => {
    const apiData = apiResponse.data.choices[0].text;
    console.log(`OPENAI result: ${apiData}`);
    response.status(200).send({data: apiData});
  });
});

