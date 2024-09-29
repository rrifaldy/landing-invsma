import helpThem from "@/data/helpThem";
import VideoData from "@/data/videoData";
import bg from "@/images/backgrounds/Team.webp";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import Video from "./Video";
import VideoModal from "./VideoModal";
import { Link } from "react-scroll";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const HelpThem = () => {
  const [isOpen, setOpen] = useState(false);
  const { id } = VideoData;

  return (
    <>
      <section className="help-them">
        <Jarallax className="help-them-bg" speed={0.1} imgPosition="50% 0%">
          <JarallaxImage src={bg.src} />
          <Container>
            <div className="help-them__top">
              <Row>
                <Col xl={8} lg={8}>
                  <div className="help-them__top-content">
                    <h2 className="help-them__top-content-title">
                      Get to know the incredible individuals behind our company
                    </h2>
                  </div>
                </Col>
              </Row>
              <Link href="/causes-details" className="mt-5">
                <a className="main-menu__donate-btn mt-5" style={{marginLeft:'0px'}}>Our Team</a>
              </Link>
            </div>
          </Container>
        </Jarallax>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={id} />
    </>
  );
};

export default HelpThem;
