import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const visi = [
  {
    id: 0,
    title: "Integrity",
    desc: "the quality of being honest and having strong moral principles. It involves consistency in actions, values, methods, and principles, and is often associated with trustworthiness and reliability.",
  },
  {
    id: 1,
    title: "Niche",
    desc: "These are products or services designed to appeal to a specific segment of the market. For example, a company might produce organic, gluten-free snacks for health-conscious consumers. These products cater to a niche market rather than the mass market.",
  },
  {
    id: 2,
    title: "Visionary",
    desc: "Forward-Thinking, Resilient and Persistent, Strategic Thinker.",
  },
  {
    id: 3,
    title: "Sustainability",
    desc: "Consider their long-term impacts on society, the economy, and the environment.",
  },
  {
    id: 4,
    title: "Muamalah",
    desc: "Governs financial and commercial dealings, ensuring they are conducted in a manner that is fair, transparent, and compliant with Islamic law.",
  },
  {
    id: 5,
    title: "Amanah",
    desc: "Our key ethical concept that emphasizes integrity, honesty, and the importance of fulfilling obligations.",
  },
];

const CharityContent = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <Col xl={12} lg={12}>
      <div className="welcome-one__right">
        <div className="section-title text-left">
          <span className="section-title__tagline">
            Nilai-Nilai INVSMA (INVSMA Values)
          </span>
        </div>
        <div className="d-flex flex-column gap-5 flex-md-row">
          {visi.map((item) => (
            <div key={item.id} className="w-75">
              <h4>{item.title}</h4>
              <p
                className="mt-4"
                style={{ textAlign: "justify", fontSize: "14px" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default CharityContent;
