## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`
Builds to ./build directory

### `firebase deploy --only hosting`
Deploys the website files in ./build to the live host

### `firebase deploy --only functions`

-> Deploys the functions in the functions folder


### `FAQS`

-> The exposed api key in api.js is limited to being used in just requests from the client's URL (language_overdrive.app.whatever). This seems sketchy to me but looks like common practice for Firebase apps ... and is TECHNICALLY secure.

-> The react app is being built on commit using github actions.
-> Firebase is configured to look at the build folder for the JS,HTML,CSS which is rebuilt in the CICD pipeline.
