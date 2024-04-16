
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Rounting from './components/Routing';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      < Header />
     
       < Rounting />  
       <Footer />
      
    </div>
  );
}

export default App;
