import bg1 from "@/images/resources/assets-table.webp";
import bg2 from "@/images/resources/assets-laptop.jpg";
import bg3 from "@/images/resources/assets-people.jpg";
import bg4 from "@/images/resources/assets-cms.jpg";
import bg5 from "@/images/resources/assets-pen.jpg";
import bg from "@/images/hero/Asset3.jpg";
import Link from "next/link";
import React from "react";

const PageHeader = ({ pageTitle = "" }) => {
  const images = [bg1, bg2, bg3, bg4, bg5];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: `url(${randomImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container">
        <h2>{pageTitle}</h2>
        <ul className="thm-breadcrumb list-unstyled">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="color-thm-gray">/</li>
          <li>
            <span>{pageTitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
