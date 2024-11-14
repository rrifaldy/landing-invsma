import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const MarketRight = () => {
    return (
        <div className="causes-details__right">
            <div className="causes-details__donations">
                <h3 className="causes-details__donations-title">Karakteristik Pasar Sekunder</h3>
                <ul className="list-unstyled causes-details__donations-list">
                    {[
                        "Likuiditas tinggi",
                        "Akses cepat ke berbagai sekuritas",
                        "Perdagangan saham yang efisien",
                        "Harga dapat berfluktuasi",
                        "Mendukung diversifikasi investasi",
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

export default MarketRight;
