import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'
import CardContextProvider from './context/CardContext'
const App = () => {
  return (
    <div className="App">
        
        <CardContextProvider>
          <CardList/>
        </CardContextProvider>
    </div>
  );
}

export default App;
