import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';


function App() {
  return (
    <div>
      <Navbar />
      <Welcome name="Pepper"/>
      <ItemListContainer />
    </div>
  );
}

export default App;