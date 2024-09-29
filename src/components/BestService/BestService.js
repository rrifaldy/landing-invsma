import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const BestService = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Our Best Service</span>
        </div>
        <Row>
          <Col xl={12} lg={12} sm={6} className="w-full">
            <div className="w-full d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mt-4">
              <div className="helping-one__left">
                <h3 className="helping-one__title">Sukuk</h3>
                <p className="helping-one__text">
                  Sukuk is a sharia security in the form of a certificate or
                  proof of ownership issued by the company (Issuer), which is of
                  equal value and represents an inseparable or indivisible part
                  (syuyu’), of the underlying asset.
                </p>
              </div>
              <div className="helping-one__left">
                <h3 className="helping-one__title">Sharia Stocks</h3>
                <p className="helping-one__text">
                  Sharia shares are shares issued by a company (Issuer) and in
                  accordance with Islamic sharia principles. In this context,
                  sharia means that investing in such stocks does not involve
                  elements that are prohibited in Islam, such as riba
                  (interest), gharar (uncertainty), and haram (prohibited
                  activities or goods).
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestService;
