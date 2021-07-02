
import Card from './components/Card';
import CardContextProvider from './context/CardContext';

const App = () => {
  return (
    <div className="App">
      <CardContextProvider>
        <Card/>
      </CardContextProvider>
      
    </div>
  );
}

export default App;
