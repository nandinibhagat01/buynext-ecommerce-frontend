const FashionCard = ({ fashionItem }) => {
  return (
    <>
      <div className="bg-body-tertiary pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden h-100">
        <div className="my-3 p-4">
          <h2 className="display-6">{fashionItem.headline}</h2>
          <p className="lead">{fashionItem.para}</p>
        </div>

        <img
          src={fashionItem.image}
          alt={fashionItem.headline}
          className="shadow-sm mx-auto d-block"
          style={{
            width: "80%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "25px 25px 0 0",
          }}
        />
      </div>
    </>
  );
};
export default FashionCard;
