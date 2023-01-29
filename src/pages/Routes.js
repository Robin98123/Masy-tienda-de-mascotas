import { Routes, Route } from 'react-router-dom';
import About from "./About"
import Home from "./Home"
import Adopt from "./Adopt"
import Blog from "./Blog"
import Shop from "./Shop"

const Routers = ({productsInCart, setProductsInCart}) =>{
    return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/adopt' element={<Adopt/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/shop' element={<Shop productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/>

    </Routes>
    );
}

export default Routers;