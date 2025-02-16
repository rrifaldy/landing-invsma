import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const organizar = [
    {
        id: 1,
        image: "recent-donation-img-1.jpg",
        amount: 20,
        name: "PT DHUHA",
        time: "24 Oktober 2024",
        text: "Jakarta, Indonesia",
        createdDate: "20 Jan, 2024",
        organizerName: "PT DHUHA",
        category: "Jakarta, Indonesia",
    }
];

const CausesDetailsRight = () => {
    const organizerData = organizar[0];
    const [units, setUnits] = useState(2);
    const pricePerUnit = 100000;
    const couponRate = 0.015;
    const period = 3;
    const tenor = 6;
    
    const totalPayment = units * pricePerUnit;
    const totalCoupon = (couponRate * totalPayment) * (tenor / period);
    const tax = totalCoupon * 0.1;
    const netCoupon = totalCoupon - tax;
    const projectedReturn = totalPayment + netCoupon;
    
    return (
        <div className="causes-details__right">
            <Card className="causes-details__card mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title className="causes-details__card-title">{organizerData.organizerName}</Card.Title>
                    <Card.Text className="causes-details__card-text">{organizerData.createdDate}</Card.Text>
                    <Card.Text className="causes-details__card-text">
                        <i className="fas fa-map-marker-alt"></i> {organizerData.category}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" className="causes-details__button me-2">Unduh Proposal Bisnis</Button>
                        <Button variant="success" className="causes-details__button">Beli Unit</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="causes-details__card shadow-sm">
                <Card.Body>
                    <Card.Title className="causes-details__card-title">Kalkulator Investasi</Card.Title>
                    <div className="causes-details__investment-units d-flex align-items-center mb-3">
                        <Button variant="outline-secondary" className="causes-details__unit-button" onClick={() => setUnits(units > 1 ? units - 1 : 1)}>-</Button>
                        <span className="causes-details__unit-count mx-3 fs-5">{units}</span>
                        <Button variant="outline-secondary" className="causes-details__unit-button" onClick={() => setUnits(units + 1)}>+</Button>
                    </div>
                    <div className="causes-details__investment-details">
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Jumlah Bayar:</p>
                            <p className="causes-details__investment-value">Rp {totalPayment.toLocaleString()}</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Kupon / Bulan:</p>
                            <p className="causes-details__investment-value">{(couponRate * 100).toFixed(2)}%</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Periode Kupon:</p>
                            <p className="causes-details__investment-value">{period} Bulan</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Tenor:</p>
                            <p className="causes-details__investment-value">{tenor} Bulan</p>
                        </div>
                    </div>
                    <h6 className="mt-3 causes-details__estimation-title">Estimasi Keuntungan Kamu</h6>
                    <div className="causes-details__investment-details">
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Kupon sesuai tenor (%):</p>
                            <p className="causes-details__investment-value">{(couponRate * (tenor / period) * 100).toFixed(1)}%</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Nilai Kupon (Rp):</p>
                            <p className="causes-details__investment-value">Rp {totalCoupon.toLocaleString()}</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Pajak Nilai Kupon (Rp):</p>
                            <p className="causes-details__investment-value">Rp {tax.toLocaleString()}</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Nilai Kupon Bersih (Rp):</p>
                            <p className="causes-details__investment-value">Rp {netCoupon.toLocaleString()}</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Pengembalian Pokok:</p>
                            <p className="causes-details__investment-value">Rp {totalPayment.toLocaleString()}</p>
                        </div>
                        <div className="causes-details__investment-item">
                            <p className="causes-details__investment-label">Proyeksi Pengembalian Dana:</p>
                            <p className="causes-details__investment-value fw-bold text-success">Rp {projectedReturn.toLocaleString()}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CausesDetailsRight;
