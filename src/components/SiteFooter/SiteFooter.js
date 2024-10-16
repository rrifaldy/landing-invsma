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
                PT INVESTMENT MUAMALAH ASIA
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "0px",
                  color: "#8fd299",
                }}
              >
                Jl. Jend. Basuki Rachmat No.04 A, RT.4/RW.6, Cipinang Besar
                Selatan, Jatinegara, Kota Jakarta Timur, DKI Jakarta 13410
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
                        <span>Customer Service:</span>
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
                    <div className="icon d-flex align-items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        fill="white"
                        height="30"
                        viewBox="0 0 50 50"
                      >
                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        fill="white"
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                      >
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        fill="white"
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                      >
                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                      </svg>
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
