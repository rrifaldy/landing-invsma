import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectLeft from "./ProjectDetailsLeft";
import ProjectDetailsRught from "./ProjectDetailsRught";

const ProjectDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("Informasi Project");
  const data = [
    {
      id: 1,
      menu: "Informasi Project",
    },
    {
      id: 2,
      menu: "Finansial",
    },
    {
      id: 3,
      menu: "Laporan Laba Rugi",
    },
    {
      id: 4,
      menu: "Analisa Resiko",
    },
    {
      id: 5,
      menu: "Lokasi Project",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Informasi Project":
        return <p>Informasi Project</p>;
      case "Finansial":
        return <p>Konten Finansial</p>;
      case "Laporan Laba Rugi":
        return <p>Konten Laporan Laba Rugi</p>;
      case "Analisa Resiko":
        return <p>Konten Analisa Resiko</p>;
      case "Lokasi Project":
        return <p>Konten Lokasi Project</p>;
      default:
        return <p>Pilih menu di atas untuk melihat detail.</p>;
    }
  };
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={5} lg={7}>
            <ProjectLeft />
          </Col>
          <Col xl={6} lg={7}>
            <ProjectDetailsRught />
          </Col>
          <Col xl={12} lg={12}>
            <div
              style={{
                marginTop: "4rem",
              }}
            >
              <ul
                className="d-flex align-items-center gap-4"
                style={{
                  listStyleType: "none",
                  cursor: "pointer",
                  marginLeft: "0px",
                  paddingLeft: "0px",
                  fontWeight: "200",
                }}
              >
                {data.map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(item.menu); 
                      }}
                      style={{
                        borderRadius: "5px",
                        backgroundColor:
                          activeTab === item.menu ? "#006400" : "transparent",
                        color: activeTab === item.menu ? "#fff" : "#000",
                      }}
                      className="px-3 py-2"
                    >
                      {item.menu}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={6} lg={7}>
            <div>{renderContent()}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsPage;
