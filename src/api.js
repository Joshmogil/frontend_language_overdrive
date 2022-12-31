import axios from 'axios';

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

export default searchImages;
