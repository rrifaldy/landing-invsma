import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  responsive: {
    576: {
      items: 2,
      gutter: 10,
    },
    768: {
      items: 3,
      gutter: 15,
    },
    992: {
      items: 4,
      gutter: 15,
    },
    1200: {
      items: 5,
      gutter: 20,
    },
  },
};

const brandTexts = [
  {
    main: "Integrity",
    subtext: "the quality of being honest and having strong moral principles. It involves consistency in actions, values, methods, and principles, and is often associated with trustworthiness and reliability."
  },
  {
    main: "Niche",
    subtext: "These are products or services designed to appeal to a specific segment of the market. For example, a company might produce organic, gluten-free snacks for health-conscious consumers. These products cater to a niche market rather than the mass market."
  },
  {
    main: "Visionary",
    subtext: "Forward-Thinking, Resilient and Persistent, Strategic Thinker."
  },
  {
    main: "Sustainability",
    subtext: "Consider their long-term impacts on society, the economy, and the environment."
  },
  {
    main: "Muamalah",
    subtext: "Governs financial and commercial dealings, ensuring they are conducted in a manner that is fair, transparent, and compliant with Islamic law."
  }
];

const BrandOne = ({ brandClass = "" }) => {
  return (
    <section className={`brand-one ${brandClass}`}>
      <Container>
        <Row>
          <Col xl={12}>
            <TinySlider settings={settings} className="brand-one__carousel">
              {brandTexts.map((item, index) => (
                <div key={index}>
                  <div
                    style={{ 
                      userSelect: "none", 
                      textAlign: "left", 
                      fontSize: "0.6em",
                      fontWeight: "normal"  
                    }}
                    className="brand-one__single"
                  >
                    <div className="brand-one__text">
                      <h5 className="font-bold">{item.main}</h5> {/* Main text */}
                      <p>{item.subtext}</p> {/* Subtext */}
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandOne;
