import Navbar from "../components/Header/Navbar";
import ProductCards from "../components/Body/ProductCards";
import FashionCards from "../components/Body/FashionCards";
import Footer from "../components/Footer/Footer";
import CarouselCard from "../components/Body/CarouselCard";
import Itemsbar from "../components/Header/Itemsbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Itemsbar/>
      <CarouselCard />
      <ProductCards />
      <FashionCards />
      <Footer />
    </>
  );
};
export default Home;
