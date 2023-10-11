import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page404 from './components/404';
import Home from './pages/home';
import { DataProvider } from './pages/DataContext';


function App() {
 
  return (
    <Router>
            <DataProvider>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
            </DataProvider>
    </Router>
  );
}

export default App;
