const functions = require("firebase-functions");
const {Configuration, OpenAIApi} = require("openai");
const {Translate} = require("@google-cloud/translate").v2;

const cors = require("cors")({origin: true});
// Add CORS to your index.js

exports.getTranslation = functions.https.onRequest((request, response) => {
  cors(request, response, () => {});
  const data = request.body.data;
  console.log(data);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  // console.log(data);
  // console.log(openai);

  console.log(data);

  const msgPrompt = `In ${data.target} respond in an endearing way to: ${data.text}`;
  console.log(msgPrompt);
  openai.createCompletion({
    model: "text-davinci-003",
    prompt: msgPrompt,
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

exports.translateMessage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {});
  const data = request.body.data;
  console.log(data);
  const translate = new Translate();
  translate.translate(data.text, data.target).then((translations) => {
    translations = Array.isArray(translations) ? translations : [translations];
    console.log("Translations:");
    translations.forEach((translation, i) => {
      console.log(`${data.text[i]} => (${data.target}) ${translation}`);
      response.status(200).send({data: translation});
    });
  });
});
