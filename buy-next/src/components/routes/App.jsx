import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Itemsbar from "../Header/Itemsbar";
import Navbar from "../Header/Navbar";
import FetchItems from "../Body/FetchItems";


function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "140px" }}>
        <FetchItems/>
        <Itemsbar />
        <Outlet />
      </main> 
      <Footer />
    </>
  );
}

export default App;
