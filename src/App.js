import logo from './logo.svg';
import './components/css/bootstrap.css';
import Header from './components/Header';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Container/>
      <Footer></Footer>
    </div>
   
    
  );
}

export default App;
