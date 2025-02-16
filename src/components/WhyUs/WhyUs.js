import causesData from "@/data/causesData";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ThreeBoxes from "../ThreeBoxes/ThreeBoxes";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  navPosition: "bottom",
  gutter: 0,
  responsive: {
    768: {
      items: 2,
      gutter: 20,
    },
    992: {
      items: 3,
      gutter: 30,
    },
  },
};

const WhyUs = () => {
  return (
    <section className="causes-one">
      <div className="section-title text-center">
        <h2 className="section-title__title">Why Us?</h2>
        <h2 className="section-title_desc">
          Explore investment opportunities handpicked for growth.
          <br />
          Join us in shaping tomorrow&#39;s success stories.
        </h2>
      </div>
      <Row>
        <Col xl={12}>
          <div className="causes-one__carousel">
            <ThreeBoxes />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WhyUs;
