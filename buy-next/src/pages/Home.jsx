import Navbar from "../components/Header/Navbar";
import ProductCards from "../components/Body/ProductCards";
import FashionCards from "../components/Body/FashionCards";
import Footer from "../components/Footer/Footer";
import CarouselCard from "../components/Body/CarouselCard";
import Itemsbar from "../components/Header/Itemsbar";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Itemsbar />
      <CarouselCard />
      <div className="container py-5">
        <ProductCards />
      </div>
      <div className="container-fluid py-5">
        <FashionCards />
      </div>
      <Footer />
    </>
  );
};
export default Home;
