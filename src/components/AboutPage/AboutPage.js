import aboutProgress from "@/data/aboutProgress";
import ImageWomen from "@/images/resources/women-talk.webp";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutProgressbar from "./AboutProgressbar";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={ImageWomen.src} alt="" />
                <div className="about-page__trusted">
                  <h3>
                    We’re trusted by <span>1.204</span> investors
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Introductions</span>
                <h2 className="section-title__title">
                  Building Bridges for Sustainable and Inclusive Growth
                </h2>
              </div>
              <p className="about-page__right-text">
                INVSMA SCF stands as a pioneer of innovation, leading the way in the global development and delivery of cutting-edge, Sharia-compliant financial solutions. We are dedicated to addressing the diverse financial needs of all communities, extending our unwavering commitment to financial inclusivity to a wider audience in accordance with Sharia principles.
              </p>
              <h3 className="about-page__right-title">
                Do what is right, always
              </h3>
              <div className="about-five__progress-wrap">
                {aboutProgress.map((progress) => (
                  <AboutProgressbar key={progress.id} progress={progress} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
