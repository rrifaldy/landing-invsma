import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
const InformationPage = () => {
    const [selectedTab, setSelectedTab] = useState("publisher");

    return (
        <div>
            <section className="text-gray-600 body-font py-5">
                <Container className="py-5">
                    <Row className="d-flex justify-content-around align-items-center">
                        <Col md={4} className="text-center">
                            <Image
                                className="object-cover object-center rounded img-fluid"
                                alt="hero"
                                src="https://i.ibb.co.com/LZvZrnP/timeline-5.webp"
                            />
                        </Col>
                        <Col md={8} className="d-flex flex-column align-items-start text-left">
                            <h1 className="title-font text-3xl sm:text-4xl font-medium text-gray-900 mb-4 publisher-text">
                                Building Bridges for Sustainable and Inclusive Growth
                            </h1>
                            <h2 className="mb-8 leading-relaxed publisher-subtext">
                                Financial achievements empower dreams—comfortable retirement, new home, lasting legacy. Together, we collaborate to make it happen, transforming aspirations into reality.
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Button Selector */}
            <Container className="d-flex justify-content-around my-4">
                <Button
                    variant="success"
                    className={`mx-2 btn-informasi ${selectedTab === "publisher"
                            ? "active-btn"
                            : "inactive-btn"
                        }`}
                    onClick={() => setSelectedTab("publisher")}
                >
                    Publisher Guidelines
                </Button>
                <Button
                    variant="success"
                    className={`mx-2 btn-informasi ${selectedTab === "financier"
                            ? "active-btn"
                            : "inactive-btn"
                        }`}
                    onClick={() => setSelectedTab("financier")}
                >
                    Financier Guidelines
                </Button>
            </Container>

            {/* Publisher Container */}
            {selectedTab === "publisher" && (
                <div className="publisher-container">

                    <div className="text-center">
                        <h2 className="title-font text-3xl sm:text-4xl font-medium text-gray-900 mb-4 publisher-text">
                            Join INVSMA As Publisher
                        </h2>
                    </div>
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
                                <Image src="https://i.ibb.co.com/BH8Khp1f/information-1-1.png" alt="Account creation process" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/r2fc9Ph0/information-1-2.png" alt="Complete your profile" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/4RLXTgRd/information-1-3.png" alt="Find a business" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/1tDvFtzC/information-1-4.png" alt="Invest in the business" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/fdqZFYqM/information1-5.png" alt="Follow business development" fluid className="rounded" />
                            </section>
                        </div>
                    </div>
                </div>
            )}

            {/* Financier Container */}
            {selectedTab === "financier" && (
                <div className="financier-container">
                    <div className="text-center">
                        <h2 className="title-font text-3xl sm:text-4xl font-medium text-gray-900 mb-4 publisher-text">
                            Join INVSMA As Financier
                        </h2>
                    </div>
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
                                <Image src="https://i.ibb.co.com/BH8Khp1f/information-1-1.png" alt="Account creation process" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/r2fc9Ph0/information-1-2.png" alt="Complete your profile" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/4RLXTgRd/information-1-3.png" alt="Find a business" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/1tDvFtzC/information-1-4.png" alt="Invest in the business" fluid className="rounded" />
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
                                <Image src="https://i.ibb.co.com/fdqZFYqM/information1-5.png" alt="Follow business development" fluid className="rounded" />
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default InformationPage;
