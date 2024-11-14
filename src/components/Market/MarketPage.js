import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MarketLeft from "./MarketLeft";
import MarketRight from "./MarketRight";

const SukukPage = () => {
    return (
        <section className="causes-details">
            <Container>
                <Row>
                    <Col xl={8} lg={7}>
                        <MarketLeft />
                    </Col>
                    <Col xl={4} lg={5}>
                        <MarketRight />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SukukPage;
