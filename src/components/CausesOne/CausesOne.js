import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "./CausesSingle";
import { getDataProject } from "src/api";

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

const CausesOne = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await getDataProject();
        setProject(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getList();
  }, []);

  return (
    <section className="causes-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Our Project</span>
          <h2 className="section-title__title">
            Our Projects Explore investment opportunities handpicked for growth.{" "}
            <br />
            Join us in shaping tomorrow&#39;s success stories.
          </h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="causes-one__carousel">
              {project.length > 0 ? (
                <TinySlider settings={settings}>
                  {project.map((cause) => (
                    <CausesSingle cause={cause} key={cause.id} />
                  ))}
                </TinySlider>
              ) : (
                <p>Loading projects...</p> // Pesan saat data belum tersedia
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesOne;
