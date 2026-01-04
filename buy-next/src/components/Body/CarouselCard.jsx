import "./CarouselCard.css";

const CarouselCard = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" />
        <button data-bs-target="#myCarousel" data-bs-slide-to="1" />
        <button data-bs-target="#myCarousel" data-bs-slide-to="2" />
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/Kids/kid_img1.jpeg"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/Kids/kid_img6.jpeg"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/Kids/kid_img5.jpeg"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default CarouselCard;
