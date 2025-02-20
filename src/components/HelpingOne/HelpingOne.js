import image from "@/images/resources/helping-one-left-img.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HelpingOne = () => {
  return (
    <section className="helping-one mb-5">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__title">Achievement</span>
          <p className="section-title_desc"> Several achievements of INVSMA</p>
        </div>
        <Row CL>
          <Col xl={12}>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-4">
              <div className="helping-  ">
                <h3 className="helping-one__title">2 Years +</h3>
                <p className="helping-one__text">
                  <span className="helping-second_title">
                    Years of experience
                  </span>
                  <br />
                  We are proud to be a leading organization in our global
                  partner ecosystem.
                </p>
              </div>
              <div className="helping-one__left">
                <h3 className="helping-one__title">19M +</h3>
                <p className="helping-one__text">
                  <span className="helping-second_title">Investment</span>{" "}
                  <br /> In 2022, we successfully executed social impact
                  consulting projects.
                </p>
              </div>
              <div className="helping-one__left">
                <h3 className="helping-one__title">150 +</h3>
                <p className="helping-one__text">
                  <span className="helping-second_title"> Client Data </span>{" "}
                  <br /> Our team includes management consultants, data
                  scientists, engineers, venture architects, and more, operating
                  in over 10 countries.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpingOne;
