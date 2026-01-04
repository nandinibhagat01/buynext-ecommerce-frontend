import FashionCard from "./FashionCard";
import FashionCardsData from "./FashionCardsData";

const FashionCards = () => {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {FashionCardsData.map((fashionItem)=>(
        <FashionCard key={fashionItem.id} fashionItem={fashionItem}/>
      ))}
      </div>
    </>
  );
};
export default FashionCards;