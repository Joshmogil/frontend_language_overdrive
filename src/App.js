import SearchBar from './components/SearchBar';
import MessageDisplay from './components/MessageDisplay';
import translate from './test';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const handleSubmit = (term) => {
    const result = translate({text:term, target:"Italian"});
    console.log(result);
    result.then(
      (value) => {
        console.log(value.data); // Success!
        setMessages([...messages, {message:term,response:value.data}]);
        console.log(messages);
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
