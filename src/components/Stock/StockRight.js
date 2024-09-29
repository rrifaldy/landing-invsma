import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const StockRight = () => {
    return (
        <div className="causes-details__right">
            <div className="causes-details__donations">
                <h3 className="causes-details__donations-title">Karakteristik Saham Syariah</h3>
                <ul className="list-unstyled causes-details__donations-list">
                    {[
                        "Bebas dari riba (bunga)",
                        "Investasi di sektor halal",
                        "Kepemilikan langsung atas aset",
                        "Pengelolaan berbasis syariah",
                        "Transparansi informasi finansial",
                    ].map((characteristic, index) => (
                        <li key={index}>
                            <i className="fas fa-check-circle list-karakteristik"></i> {characteristic}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StockRight;
