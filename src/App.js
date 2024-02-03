import './App.css';
import CardsList from './components/CardsList';

function App() {
  return (
    <div className="App">
      <h2 className='title'>Click on a card to see the answer!</h2>
      <CardsList />
    </div>
  );
}

export default App;
