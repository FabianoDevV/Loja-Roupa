import '../src/styles/GlobalCss.css';
import './styles/themer.css';

import { BrowserRouter as Router } from 'react-router-dom';

import UseContextLoja from './context/UseContextLoja';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <UseContextLoja>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </UseContextLoja>
  );
}

export default App;
