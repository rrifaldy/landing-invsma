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

const ProjectLeft = () => {
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";

  return (
    <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="project_left">
          <Image src={images[0].src} alt="" />
          <div className="causes-details__category">
            <span>{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeft;
