import SearchBar from './components/SearchBar';
//import getTranslatedResponse from './api';
import translate from './test';

function App() {
  const handleSubmit = (term) => {
    const result = translate({text:term, target:"German"})
    console.log(result)
    result.then(
      (value) => {
        console.log(value); // Success!
      },
      (reason) => {
        console.error(reason); // Error!
      },
    );
    console.log(`Response from cloud function`)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
