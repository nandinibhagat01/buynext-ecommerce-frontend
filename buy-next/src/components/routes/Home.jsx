import ProductCards from "../Body/ProductCards";
import FashionCards from "../Body/FashionCards";
import CarouselCard from "../Body/CarouselCard";
//import Itemsbar from "../Header/Itemsbar";

const Home = () => {
  return (
    <>
      <main>
        {/* <Itemsbar /> */}

        <CarouselCard />
        <div className="container py-5">
          <ProductCards />
        </div>
        <div className="container-fluid py-5">
          <FashionCards />
        </div>
      </main>
    </>
  );
};
export default Home;
