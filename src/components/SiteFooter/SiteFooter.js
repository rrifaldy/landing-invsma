import footerData from "@/data/footerData";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "@/images/logo/logo4.webp";

const { exploreList, email, tel, officeAddress, inside, Thingking, copyright } =
  footerData;

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-bg"></div>
      <Container>
        <div className="site-footer__top">
          <div
            className="footer-widget__column footer-widget__about d-flex align-items-center gap-5"
            style={{ borderBottom: "1px solid #464d4e", paddingBottom: "3rem" }}
          >
            <Image src={logo.src} alt="" width={120} />
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "0px",
                  color: "#8fd299",
                }}
              >
                Building wealth, creating futures.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "0px",
                  color: "#8fd299",
                }}
              >
                Admin/ Customer Service: 0812-9230-0803
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "0px",
                  color: "#8fd299",
                }}
              >
                Email: admin@invsma.com
              </p>
            </div>
          </div>
          <Row className="mt-5">
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Service</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  {exploreList.slice(0, 5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  {exploreList.slice(5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Inside</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  {inside.slice(0, 5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  {exploreList.slice(5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Thinking</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  {inside.slice(0, 5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  {Thingking.slice(5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="fadeInUp pb-5">
              <div className="footer-widget__column footer-widget__contact">
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-chat"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Call Anytime</span>
                        <a href={`tel:${tel}`}>{tel}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-message"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Send Email</span>
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-address"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Visit Office</span>
                        {officeAddress}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="400ms"
            ></Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
