import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

// Ganti URL gambar dengan yang baru
const bg = {
  src: "https://plus.unsplash.com/premium_photo-1661342516166-4a25ea17c27d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
};

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
              <h2 className="join-one__title">
                Join the community to build <br />
                a brighter future through investment
              </h2>

              <a href="#" className="join-one__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Login
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinOne;
