import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../App.css'

const Layout = () => {
    return <div className="wrapper">
    <div className="wrapper-home-details-about-pricing">

        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    </div>
}
export default Layout;