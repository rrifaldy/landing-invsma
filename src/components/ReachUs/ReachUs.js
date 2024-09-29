import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ReachUs = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Or Reach Us At:</span>
        </div>
        <Row>
          <Col xl={12} lg={12} sm={6} className="w-full">
            <div className="w-full d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mt-4">
              <div className="helping-one__left">
                <p className="reach_text">
                  Admin/ Customer Service: 0812-9230-0803
                </p>
                <p className="reach_text">Email: admin@invsma.com</p>
                <p className="reach_text">
                  PT INVESTMENT MUAMALAH ASIA (INVSMA)
                </p>
                <p className="reach_text">
                  Alamat <br />
                  Jl. Jend. Basuki Rachmat No.04 A, RT.4/RW.6, Cipinang Besar
                  Sel., Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus
                  Ibukota Jakarta 13410
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReachUs;
