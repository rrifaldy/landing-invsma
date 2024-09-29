import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StockLeft from "./StockLeft";
import StockRight from "./StockRight";

const SukukPage = () => {
    return (
        <section className="causes-details">
            <Container>
                <Row>
                    <Col xl={8} lg={7}>
                        <StockLeft />
                    </Col>
                    <Col xl={4} lg={5}>
                        <StockRight />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SukukPage;
