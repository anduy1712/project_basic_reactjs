import logo from './logo.svg';
import './App.css';
import ListCard from './components/ListCard'
import Action from './components/Action'
import CardContextProvider from './context/CardContext'
function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <Action/>
        <ListCard/>
      </CardContextProvider>
      
    </div>
  );
}

export default App;
