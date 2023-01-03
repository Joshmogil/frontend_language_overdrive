import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const app = initializeApp({
     projectId: 'language-overdrive',
     apiKey: 'AIzaSyBaDJxD--QWiP3H-mhj8-1nLuRG534OGkU',
     authDomain: 'language-overdrive.firebaseapp.com',
   });
const functions = getFunctions(app);

const translate = httpsCallable(functions, 'getTranslation');

export default translate;
