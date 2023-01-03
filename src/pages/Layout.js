import Routes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () =>{
    return (
        <div>

            <Header/>

            <div><Routes/></div>

            <Footer/>

        </div>

        );
}

export default Layout;