import React from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const ImagesSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip_link">Skip Image Slider Controls</a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            className="img_slider_img"
            src={url}
            key={url}
            style={{ translate: `${-100 * imageIndex}%` }}
            alt={alt}
            aria-hidden={index !== imageIndex}
          />
        ))}
      </div>
      <button
        className="img_slider_btn"
        style={{ left: 0 }}
        onClick={showPrevImage}
        aria-label="View Previous image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        className="img_slider_btn"
        style={{ right: 0 }}
        onClick={showNextImage}
        aria-label="View Next image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        className=""
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: "0.25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImagesSlider;
