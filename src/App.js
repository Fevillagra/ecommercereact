import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Welcome/>
      <ItemListContainer greeting="Productos de verdad. Cooming soon!"/>
      <Footer />
    </div>
  );
}

export default App;