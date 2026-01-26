import '../src/styles/GlobalCss.css';
import './styles/themer.css';
import UseContextLoja from './context/UseContextLoja';
import Home from './pages/home';
import Header from './Components/Header';

function App() {
  return (
    <UseContextLoja>
      <Header />
      <Home />
    </UseContextLoja>
  );
}

export default App;
