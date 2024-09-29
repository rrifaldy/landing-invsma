import React from "react";

import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";

const FinancierPage = () => {

    return (
        <div>
            <section className="text-gray-600 body-font py-5">
                <Container className="d-flex flex-column-reverse flex-md-row align-items-center py-5">
                    <Col md={6} className="d-flex flex-column align-items-start text-left mb-4 mb-md-0 mt-4">
                        <h1 className="title-font text-3xl sm:text-4xl font-medium text-gray-900 mb-4 publisher-text">
                            Building Bridges for Sustainable and Inclusive Growth
                        </h1>
                        <p className="mb-8 leading-relaxed publisher-subtext">
                            Financial achievements empower dreams—comfortable retirement, new home, lasting legacy. Together, we collaborate to make it happen, transforming aspirations into reality.
                        </p>
                    </Col>
                    <Col md={6} className="text-center">
                        <Image
                            className="object-cover object-center rounded img-fluid"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZXN0bWVudHxlbnwwfDB8MHx8fDI%3D"
                        />
                    </Col>
                </Container>
            </section>

            <hr></hr>

            <Container fluid className="mx-auto mt-5 mb-5 col-12">
                <Row className="justify-content-center">
                    <Col md={3} xs={12} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="p-5 text-left">
                                <Card.Title className="publisher-text">Developing</Card.Title>
                                <Card.Subtitle className="text-muted mt-3">
                                    <small>
                                        The core reason behind our wealth management services is to create a solid foundation for your financial future.
                                    </small>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={12} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="p-5 text-left">
                                <Card.Title className="publisher-text">Understanding</Card.Title>
                                <Card.Subtitle className="text-muted mt-3">
                                    <small>
                                        By understanding your situation, goals, and experience, we tailor investments for your wealth goals.
                                    </small>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={12} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="p-5 text-left">
                                <Card.Title className="publisher-text">Financial plan</Card.Title>
                                <Card.Subtitle className="text-muted mt-3">
                                    <small>
                                        We conduct annual reviews to update your financial plan and address related matters like retirement planning, insurance, tax-efficiency, etc.
                                    </small>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <hr></hr>

            <div className="wrapper">
                {/* Center Line */}
                <div className="center-line">
                    <a href="/contacts" className="scroll-icon">
                        <i className="fas fa-phone"></i>
                    </a>
                </div>

                {/* Timeline Rows */}
                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-home"></i>
                        <div className="details">
                            <span className="title">01. Create an account and verify your email address and mobile number</span>
                        </div>
                        <p className="timeline-subtext">
                            Create an account on INVSMA SCF, click “Start Now” at the top of the Home Page, verify your email by clicking on the incoming email and verify your mobile number by entering the OTP sent to your mobile via SMS.
                        </p>
                        <Image src="https://i.ibb.co.com/vY9fWS8/timeline-1.webp" alt="Account creation process" fluid className="rounded" />
                    </section>
                </div>

                <div className="row row-2">
                    <section>
                        <i className="icon fas fa-star"></i>
                        <div className="details">
                            <span className="title">02. Complete your profile</span>
                        </div>
                        <p className="timeline-subtext">
                            To be able to use the core features of INVSMA SCF, first complete your profile, select the Data Validation menu from the user dashboard or the “Complete KYC” notification bar that appears on the home page.
                        </p>
                        <Image src="https://i.ibb.co.com/3dwC0rv/timeline-2.webp" alt="Complete your profile" fluid className="rounded" />
                    </section>
                </div>

                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-rocket"></i>
                        <div className="details">
                            <span className="title">03. Find a business that suits your interests</span>
                        </div>
                        <p className="timeline-subtext">
                            See the business from the list of businesses offered on the platform, study the prospectus.
                        </p>
                        <Image src="https://i.ibb.co.com/XsXckGF/timeline-3.webp" alt="Find a business" fluid className="rounded" />
                    </section>
                </div>

                <div className="row row-2">
                    <section>
                        <i className="icon fas fa-globe"></i>
                        <div className="details">
                            <span className="title">04. Invest in the selected business</span>
                        </div>
                        <p className="timeline-subtext">
                            If you have found a business that you feel is suitable, order the securities instrument through the details page of the business you are interested in, then wait until the listing period is over.
                        </p>
                        <Image src="https://i.ibb.co.com/FYSMj59/timeline-4.webp" alt="Invest in the business" fluid className="rounded" />
                    </section>
                </div>

                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-paper-plane"></i>
                        <div className="details">
                            <span className="title">05. Follow the development of your chosen business</span>
                        </div>
                        <p className="timeline-subtext">
                            After the listing period is over, you become the full owner of the securities you ordered, continue to monitor the development of your business portfolio.
                        </p>
                        <Image src="https://i.ibb.co.com/LZvZrnP/timeline-5.webp" alt="Follow business development" fluid className="rounded" />
                    </section>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default FinancierPage;