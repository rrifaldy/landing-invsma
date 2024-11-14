import { social } from "@/data/NavItems";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import marketPage from "@/data/marketPage";

const {
    summaryList,
    raised,
    goal,
    title,
    texts,
    summaryText,
} = marketPage;

const MarketLeft = () => {

    return (
        <div className="causes-details__left-bar">
            <div className="causes-details__img">
                <div className="causes-details__img-box">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvY2t8ZW58MHwwfDB8fHww"
                        alt=""
                    />
                    <div className="causes-details__category">
                        <span>Pasar Sekunder</span>
                    </div>
                </div>
            </div>
            <div className="causes-details__text-box">
                <h3>{title}</h3>
                {texts.map((text, index) => (
                    <p key={index} className={`causes-details__text-${index + 1}`}>
                        {text}
                    </p>
                ))}
            </div>
            <div className="causes-details__images-box">
                <Row>
                    {marketPage.images.slice(0).map((image, index) => (
                        <Col xl={6} lg={6} key={index}>
                            <div className="causes-details__images-single">
                                <Image src={image.src} alt="image sukuk" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="causes-details__summary">
                <div className="causes-details__summary-text">
                    <p>{summaryText}</p>
                </div>
                <div className="causes-details__summary-list">
                    <ul className="causes-details__summary-list-box list-unstyled">
                        {summaryList.map((item, index) => (
                            <li key={index}>
                                <div className="icon">
                                    <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="text">
                                    <p>{item}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="causes-details__share">
                <div className="causes-details__share-btn-box">
                    <a href="#" className="causes-details__share-btn thm-btn">
                        <i className="fas fa-arrow-circle-right"></i>Login
                    </a>
                </div>
                <div className="causes-details__share-social">
                    {social.map(({ icon, link }, index) => (
                        <a href={link} key={index}>
                            <i className={`fab ${icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketLeft;
