import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const SukukRight = () => {
    return (
        <div className="causes-details__right">
            <div className="causes-details__donations">
                <h3 className="causes-details__donations-title">Karakteristik Sukuk</h3>
                <ul className="list-unstyled causes-details__donations-list">
                    {[
                        "Investasi yang patuh Syariah",
                        "Pengembalian yang stabil dan etis",
                        "Kepemilikan atas aset nyata",
                        "Transparansi dalam pengelolaan",
                        "Memberikan dampak sosial positif",
                    ].map((advantage, index) => (
                        <li key={index}>
                            <i className="fas fa-check-circle list-karakteristik"></i> {advantage}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default SukukRight;
