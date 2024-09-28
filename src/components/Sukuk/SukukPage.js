import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SukukLeft from "./SukukLeft";
import SukukRight from "./SukukRight";

const SukukPage = () => {
    return (
        <section className="causes-details">
            <Container>
                <Row>
                    <Col xl={8} lg={7}>
                        <SukukLeft />
                    </Col>
                    <Col xl={4} lg={5}>
                        <SukukRight />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SukukPage;
