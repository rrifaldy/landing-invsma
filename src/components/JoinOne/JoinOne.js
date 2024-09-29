import bg from "@/images/hero/Asset2.jpg";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const JoinOne = ({ className = "" }) => {
  return (
    <section className={`join-one ${className}`}>
      <Jarallax className="join-one-bg" speed={0.2} imgPosition="50% 0%">
        <JarallaxImage src={bg.src} />
      </Jarallax>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="join-one__inner">
              <h2
                className="join-one__title"
                style={{ fontSize: "40px", marginBottom: "10px" }}
              >
                Why Us
              </h2>
              <h2 className="join-one__title">
                Trusted experts with years of experience and industry
                accreditations
              </h2>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinOne;
