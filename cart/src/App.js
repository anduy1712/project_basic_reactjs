import './App.scss';
import ListCart from './components/ListCart';
import CartContextProvider from './contexts/CartContext';
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ListCart/>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
