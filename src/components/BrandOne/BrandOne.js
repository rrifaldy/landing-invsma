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

// Array with main text and subtext
const brandTexts = [
  {
    main: "Insight to light",
    subtext: "by challenging traditional thinking and ways of operating and bringing new perspectives to the toughest problems."
  },
  {
    main: "Drive inspired impact",
    subtext: "by looking beyond the next deadline to the next decade and by collaborating closely with our clients to enable and energize their organizations."
  },
  {
    main: "Conquer complexity",
    subtext: "by discovering unique sources of competitive advantage and hidden truths in dynamic, complex systems."
  },
  {
    main: "Lead with integrity",
    subtext: "by confronting the hard issues, staying true to our values, and stating our views candidly and directly."
  },
  {
    main: "Grow by growing others",
    subtext: "enabling our clients, colleagues, and the broader community to build success and achieve their full potential."
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
