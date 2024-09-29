import causesDetails from "@/data/causesDetails";
import { social } from "@/data/NavItems";
import download from "@/images/resources/causes-details-download-icon.png";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentForm from "../CommentForm/CommentForm";
import SingleComment from "./SingleComment";
import { formatToIDR } from "src/helper/formatIDR";

const {
  comments,
  summaryList,
  raised,
  goal,
  category,
  title,
  images,
  texts,
  summaryText,
} = causesDetails;

const CausesDetailsLeft = () => {
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";

  return (
    <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box">
          <Image src={images[0].src} alt="" />
          <div className="causes-details__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-details__progress">
          <div className="bar">
            <div
              className="bar-inner count-bar"
              style={{ width: percent, opacity: 1 }}
              data-percent={percent}
            >
              <div style={{ opacity: 1 }} className="count-text">
                {percent}
              </div>
            </div>
          </div>
          <div className="causes-one__goals mt-3">
            <div>
              <p style={{ marginBottom: "0", fontSize: "12px" }}>Tercapai</p>
              <p style={{ marginBottom: "0", fontSize: "14px" }}>
                {formatToIDR(raised)}
              </p>
            </div>

            <div>
              <p style={{ marginBottom: "0", fontSize: "12px" }}>Target</p>
              <p style={{ marginBottom: "0", fontSize: "14px" }}>
                {formatToIDR(goal)}
              </p>
            </div>
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
          {images.slice(1).map((image, index) => (
            <Col xl={6} lg={6} key={index}>
              <div className="causes-details__images-single">
                <Image src={image.src} alt="" />
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
    </div>
  );
};

export default CausesDetailsLeft;
