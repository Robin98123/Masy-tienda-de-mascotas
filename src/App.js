import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import Header from './components/Header';
import Banner from './components/Banner';
import Sections from './components/Sections';
import Footer from './components/Footer';
import TopPrices from './components/TopPrices';
import Anuncies from './components/Anuncies';

function App() {
  return (
      <div>
        <h1>routes</h1>
        <Routes>
          <Route path='/' element={<Layout/>}>

          </Route>
        </Routes>
      </div>
  );
}

export default App;
