import kidImg1 from "../../images/Kids/kid_img2.jpeg";
import kidImg2 from "../../images/Kids/kid_img3.jpeg";
import kidImg3 from "../../images/Kids/kid_img4.jpeg";
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
          <img src={kidImg1} className="d-block w-100" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <img src={kidImg2} className="d-block w-100" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src={kidImg3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Right Arrow */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselCard;
