 import { initializeApp } from 'firebase/app';
 import { getFunctions, httpsCallable } from 'firebase/functions';

 const app = initializeApp({
     projectId: 'language-overdrive',
     apiKey: 'AIzaSyDZQsX5MVCZ9rcfXthtOglYmZbE03IL_RY',
     authDomain: 'language-overdrive.firebaseapp.com',
   });
 const functions = getFunctions(app);
const sendMessage = httpsCallable(functions, 'function-1');

function getTranslatedResponse(message,target_language){
  console.log(`Trying to send message ${message} with taregt response lamguage ${target_language}`)
  sendMessage({ text: message, language: target_language})
    .then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const data = result.data;
      const sanitizedMessage = data.text;
      console.log(data)
      return data
    });
}

/*import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.post(
    'https://us-central1-language-overdrive.cloudfunctions.net/function-1',
    // '{\n    "message":"hello!",\n    "language":"German"\n}',
    {
        'message': term,
        'language': 'Italian'
    },
    {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 70000
    }
  );
  console.log(response);
  return response;
};
*/

export default getTranslatedResponse;
