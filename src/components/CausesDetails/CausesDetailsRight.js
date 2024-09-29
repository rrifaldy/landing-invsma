import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";

const donations = [
  {
    id: 1,
    image: "recent-donation-img-1.jpg",
    amount: 20,
    name: "David Marks",
    time: "3 hours ago",
    text: "God bless you dear",
  },
  {
    id: 2,
    image: "recent-donation-img-2.jpg",
    amount: 60,
    name: "Jessica Rose",
    time: "6 hours ago",
    text: "God bless you dear",
  },
  {
    id: 3,
    image: "recent-donation-img-3.jpg",
    amount: 30,
    name: "Kevim Martin",
    time: "1 day ago",
    text: "God bless you dear",
  },
  {
    id: 4,
    image: "recent-donation-img-4.jpg",
    amount: 180,
    name: "Anonymous",
    time: "1 day ago",
    text: "God bless you dear",
  },
];

const CausesDetailsRight = () => {
  return (
    <div className="causes-details__right">
      <div className="causes-details__organizer">
        <div className="causes-details__organizer-img">
          <Image src={organizer.src} alt="" />
        </div>
        <div className="causes-details__organizer-content">
          <p>Created 20 Jan, 2021</p>
          <h5>
            Organizer: <span>Jessica Smith</span>
          </h5>
          <ul className="causes-details__organizer-list list-unstyled">
            <li>
              <i className="fas fa-map-marker-alt"></i>Education
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>Wrightwood, Canada
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center mt-3">
        <Link href="/causes-details">
          <a className="main-menu__donate-btn" style={{ marginLeft: "0px" }}>
            Invest NOW
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CausesDetailsRight;
