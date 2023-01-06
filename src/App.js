import SearchBar from './components/SearchBar';
import MessageDisplay from './components/MessageDisplay';
import { getMessage, getTranslation } from './getFunctions';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const handleSubmit = (term) => {
    const result = getMessage({text:term, target:"Italian"});
    //console.log(result);
    
    result.then(
      (value) => {
        //console.log(value.data); // Success!
        
        //console.log(messages);
        const translatedResult = getTranslation({text:value.data, target: "en"})
        translatedResult.then(
          (translatedValue) => {
            setMessages([...messages, {message:term,response:value.data,translatedResponse:translatedValue.data}]);
          }
        )
      },
      (reason) => {
        console.error(reason); // Error!
      },
    );
  };



  return (
    <div>
      <MessageDisplay messages={messages} />
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
