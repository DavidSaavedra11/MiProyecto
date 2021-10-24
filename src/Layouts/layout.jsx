import Footer from "Components/Footer";
import Header from "Components/header";


const Layout = ({ children }) => {
    return (
        <div className="mainContainer">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;
