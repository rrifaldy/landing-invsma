// import mainSliderData from "@/data/mainSliderData";
import React from "react";
// import SwiperCore, {
//   Autoplay,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper";
import SliderCounter from "./SliderCounter";
import image2 from "@/images/hero/Asset4.jpg";
import bg2 from "@/images/hero/Asset3.jpg";
import { Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";

// SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination]);

// const mainSlideOptions = {
//   slidesPerView: 1,
//   loop: true,
//   effect: "fade",
//   pagination: {
//     el: "#main-slider-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: "#main-slider__swiper-button-next",
//     prevEl: "#main-slider__swiper-button-prev",
//   },
//   autoplay: {
//     delay: 5000,
//   },
// };

const MainSlider = () => {
  const slide = {
    id: 1,
    image: image2,
    href: "/news-details",
    date: "10 Feb, 2025",
    comments: 5,
    title1: "GROW YOUR BUSINESS FINANCIAL",
    title2: "GROW YOUR INVESMENT POTENTIAL",
  };

  return (
    <section className="main-slider-new">
      <Container fluid className="d-flex justify-content-center">
        <Col xl={10}>
          <div className="main-wrapper-new d-flex flex-column flex-md-row align-items-center justify-content-between">
            {/* Konten Teks */}
            <div className="text-content">
              <p>{slide.title1}</p>
              <p>{slide.title2}</p>

              <a href={slide.href} className="main-new_btn mt-3">
                GET STARTED
              </a>
            </div>

            {/* Kotak Gambar di Kanan */}
            <div className="d-flex gap-3 align-items-baseline">
              <div className="image-box">
                <Image
                  src={slide.image.src} // Karena menggunakan import
                  alt={slide.title}
                />
              </div>
              <div className="image-box-bottom">
                {/* <Image
            src={slide.image.src} // Karena menggunakan import
            alt={slide.title}
          /> */}
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default MainSlider;
