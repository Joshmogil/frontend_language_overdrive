import SearchBar from './components/SearchBar';
import getTranslatedResponse from './api';

function App() {
  const handleSubmit = (term) => {
    getTranslatedResponse(term, "German")
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
