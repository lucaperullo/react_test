import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const Layout = ({ children, p = "0px" }) => {
  return (
    <div className="layout" style={{ padding: p }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
