import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page404 from './components/404';
import Home from './pages/home';


function App() {
 
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
