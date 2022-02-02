import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Foooter";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
