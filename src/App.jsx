import '../src/styles/GlobalCss.css';
import './styles/themer.css';
import UseContextLoja from './context/UseContextLoja';
import Home from './pages/home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Category from './pages/category';

function App() {
  return (
    <UseContextLoja>
      <Header />
      <Category />
      <Footer />
    </UseContextLoja>
  );
}

export default App;
