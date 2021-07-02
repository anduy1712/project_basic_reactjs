import logo from './logo.svg';
import './App.css';
import TodosContextProvider from './context/TodoContext';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <Todos/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
