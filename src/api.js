 import { initializeApp } from 'firebase/app';
 import { getFunctions, httpsCallable } from 'firebase/functions';

 const app = initializeApp({
     projectId: 'language-overdrive',
     apiKey: 'AIzaSyBaDJxD--QWiP3H-mhj8-1nLuRG534OGkU',
     authDomain: 'language-overdrive.firebaseapp.com',
   });
 const functions = getFunctions(app);
const sendMessage = httpsCallable(functions, 'function-1');

function getTranslatedResponse(message,target_language){
  console.log(`Trying to send message ${message} with taregt response language ${target_language}`)
  sendMessage({ text: message, language: target_language})
    .then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const data = result.data;
      console.log(data.text)
      return data.text
    });
}

export default getTranslatedResponse;
