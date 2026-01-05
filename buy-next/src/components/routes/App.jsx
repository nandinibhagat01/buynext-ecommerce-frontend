import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LoadingSpinner from "../Body/LoadingSpinner";
import Navbar from "../Header/Navbar";
import FetchItems from "../Body/FetchItems";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store)=>store.fetchStatus)
  return (
    <>
      <Navbar />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
