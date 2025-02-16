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
      <Container>
        <Row>
          <Col xl={12}>
            <div className="about-page__right mt-5">
              <div className="section-title text-left">
                <h2 className="section-title__title">
                  <span style={{ color: "#0a412c", fontSize: "4rem" }} className="me-2">&ldquo;</span>
                  Empower SMEs, support syariah compliant business ecosystems, and be a trusted partner for innovative financial solutions in Asia and beyond.
                  <span style={{ color: "#0a412c", fontSize: "4rem" }} className="ms-2">&rdquo;</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="about-page__right mt-5">
              <div className="section-title text-center">
                <h2 className="section-title__title">Misi</h2>
              </div>
              <ul className="misi-list">
                <li>Deliver Sharia-compliant investment and financing solutions to investors and SME financing partners.</li>
                <li>Our commitment to integrity, transparency, and accountability aligns Islamic law with every transaction.</li>
                <li>We aim to provide sustainable, long-term investment growth with a positive societal impact.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="competitive-advantage-section mt-5">
        <div className="competitive-advantage-container">
          <div className="competitive-advantage-text-section">
            <h2 className="section-title__title">
              <span style={{ color: "black" }}>Nilai-Nilai </span>
              <span style={{ color: "#0a412c" }}>INVSMA</span>
              <span style={{ color: "black" }}> (INVSMA Values)</span>
            </h2>
          </div>


          <div className="competitive-advantage-features-grid">
            {features.map((feature, index) => (
              <div className="competitive-advantage-feature" key={index}>
                <div className="competitive-advantage-icon-container">
                  <span className="competitive-advantage-icon">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="competitive-advantage-feature-title">{feature.title}</h3>
                  <p className="competitive-advantage-feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

const features = [
  {
    title: 'Integrity',
    description: 'The quality of being honest and having strong moral principles. It involves consistency in actions, values, methods, and principles, and is often associated with trustworthiness and reliability.',
    icon: 'I',
  },
  {
    title: 'Niche',
    description: 'These are products or services designed to appeal to a specific segment of the market. For example, a company might produce organic, gluten-free snacks for health-conscious consumers. These products cater to a niche market rather than the mass market.',
    icon: 'N',
  },
  {
    title: 'Visionary',
    description: 'Forward-Thinking, Resilient and Persistent, Strategic Thinker.',
    icon: 'V',
  },
  {
    title: 'Sustainability',
    description: 'Consider their long-term impacts on society, the economy, and the environment.',
    icon: 'S',
  },
  {
    title: 'Muamalah',
    description: 'Governs financial and commercial dealings, ensuring they are conducted in a manner that is fair, transparent, and compliant with Islamic law.',
    icon: 'M',
  },
  {
    title: 'Amanah',
    description: 'Our key ethical concept that emphasizes integrity, honesty, and the importance of fulfilling obligations.',
    icon: 'A',
  },
];

export default AboutPage;
