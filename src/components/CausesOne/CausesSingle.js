import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import { formatToIDR } from "src/helper/formatIDR";

const CausesSingle = ({ cause = {}, causePage }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const { image, category, title, description, raised, goal, pt, lokasi, day } =
    cause;
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100);

  return (
    <div className={causePage ? "" : "my-4"}>
      <div
        style={causePage ? {} : { userSelect: "none" }}
        className="causes-one__single animated fadeInLeft"
      >
        <div className="causes-one__img">
          <div className="causes-one__img-box">
            <Image
              src={require(`@/images/project/${image}`).default.src}
              alt=""
            />
            <Link href="/causes-details">
              <a>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          <div className="causes-one__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-one__content">
          <h3 className="causes-one__title">
            <Link href="/causes-details">{title}</Link>
          </h3>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ fontSize: "12px" }}>By {pt}</p>
            <p
              style={{ fontSize: "12px" }}
              className="d-flex align-items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="black"
                style={{ width: "18px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {lokasi}
            </p>
          </div>
          <p className="causes-one__text">{description}</p>
        </div>
        <div className="causes-one__progress">
          <ReactVisibilitySensor
            offset={{ top: 10 }}
            delayedCall={true}
            onChange={onVisibilityChange}
          >
            <div className="bar">
              <div
                className="bar-inner count-bar"
                data-percent={`${countStart ? percent : 0}%`}
                style={{ width: `${countStart ? percent : 0}%`, opacity: 1 }}
              >
                <div className="count-text" style={{ opacity: 1 }}>
                  {countStart ? percent : 0}%
                </div>
              </div>
            </div>
          </ReactVisibilitySensor>
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
          <div className="causes-one__goals mt-3">
            <div>
              <p style={{ marginBottom: "0", fontSize: "12px" }}>
                Waktu Tersisa
              </p>
              <p style={{ marginBottom: "0", fontSize: "14px" }}>{day} Days</p>
            </div>

            <Link href="/causes-details">
              <a className="main-menu__donate-btn">
                Detail Project
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CausesSingle;