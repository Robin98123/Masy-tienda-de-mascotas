import { useState } from 'react';
import './App.css';
import Routes from "./pages/Routes"
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0)

  return (
    <div>

    <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    />

    <div>
      <Routes
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
    
    />
    </div>

    <Footer/>

</div>
  );
}

export default App;
