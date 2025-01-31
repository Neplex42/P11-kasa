import './carousel.scss'
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <section className='carousel__container'>
      {images &&
        <div className='carousel'>
          {/* Slide showing */}
          <div className='slide' style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>

          {/* Pagination & next / prev arrows*/}
          {images?.length > 1 && (
            <>
              <div className='button-prev' onClick={prevSlide}></div>
              <div className='button-next' onClick={nextSlide}></div>
              <div className='pagination'>
                <span className="pagination-current">{currentIndex + 1}</span> / <span
                className="pagination-total">{images.length}</span>
              </div>
            </>
          )}
        </div>
      }
    </section>
  );
};

export default Carousel;