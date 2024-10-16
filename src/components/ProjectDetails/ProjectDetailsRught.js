import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { formatToIDR } from "src/helper/formatIDR";

const ProjectDetailsRught = () => {
  let goal = "2000000";
  let raised = "100000";
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";
  return (
    <div>
      <div>
        <div className="causes-details__organizer-content">
          <h5>
            Proyek Pengadaan Bahan Baku Fashion Muslim dan Pendukung Lainnya -
            PT Squada Cemerlang Indonesia Tahap 1 Tahun 2024
          </h5>
          <ul className="causes-details__organizer-list list-unstyled d-flex align-items-center justify-content-between">
            <li>
              <i className="fas fa-map-marker-alt"></i>Cikarang, Jakarta
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 45 Days
            </li>
          </ul>
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
      <div className="d-flex align-items-center mt-3">
        <Link href="/transaksi">
          <a className="main-menu__donate-btn" style={{ marginLeft: "0px" }}>
            Invest NOW
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailsRught;
