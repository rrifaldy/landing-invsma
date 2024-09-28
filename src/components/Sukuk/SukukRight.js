import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

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

const SukukRight = () => {
    return (
        <div className="causes-details__right">
            <div className="causes-details__donations">
                <h3 className="causes-details__donations-title">karakteristik Sukuk</h3>
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
