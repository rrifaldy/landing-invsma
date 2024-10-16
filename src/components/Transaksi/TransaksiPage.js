import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Alert } from "react-bootstrap";

const TransaksiPage = () => {
  const [stock, setStock] = useState(0);
  const investmentPrice = 100000;
  const serviceFee = 25000;
  const transactionFee = 5000; // Biaya transaksi
  const [totalInvest, setTotalInvest] = useState(0);
  const [totalCost, setTotalCost] = useState(0); // Total keseluruhan

  const projectData = {
    id: 1,
    nama: "Bisnis Dummy",
    tipe: "Saham",
  };

  // Menghitung total investasi dan biaya
  const handleStockChange = (value) => {
    const newStock = Math.max(0, stock + value);
    setStock(newStock);
    const newTotalInvest = newStock * investmentPrice;
    setTotalInvest(newTotalInvest);
    setTotalCost(newTotalInvest + serviceFee + transactionFee); // Hitung total keseluruhan
  };

  const handlePayment = () => {
    // Simulasi pembayaran berhasil
    alert("Pembayaran berhasil!");
  };

  return (
    <section className="causes-details">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xl={8} lg={6}>
            <div className="transaction px-3 py-3 shadow mt-4 rounded">
              <h5 className="font-weight-bold">Detail Pembelian</h5>
              <div className="d-flex justify-content-between">
                <p>Nama Bisnis</p>
                <p className="font-weight-bold">{projectData.nama}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tipe Investasi</p>
                <p className="font-weight-bold">{projectData.tipe}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Minimal Investasi</p>
                <p>Rp. {investmentPrice.toLocaleString()}</p>
              </div>

              <div className="harga mt-3 border rounded">
                <div className="d-flex justify-content-between p-2 border-bottom bg-primary text-white">
                  <p>Harga Investasi per {projectData.tipe}</p>
                  <p className="font-weight-bold">
                    Rp. {investmentPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-center my-2">
                  <p className="font-weight-bold">Jumlah unit</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      onClick={() => handleStockChange(-1)}
                      variant="outline-secondary"
                      disabled={stock === 0}
                    >
                      -
                    </Button>
                    <Form.Control
                      type="number"
                      value={stock}
                      readOnly
                      className="mx-2 text-center"
                      style={{ width: "60px" }}
                    />
                    <Button
                      onClick={() => handleStockChange(1)}
                      variant="outline-secondary"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <div className="detail border mt-4 rounded p-2">
                <div className="d-flex justify-content-between">
                  <p>Pemesanan</p>
                  <p>Total Harga Investasi</p>
                </div>
                <p className="font-weight-bold">
                  {projectData.nama} - {projectData.tipe}
                </p>
                <div className="d-flex justify-content-between">
                  <p>Stok: {stock}</p>
                  <p>Rp. {totalInvest.toLocaleString()}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Biaya Layanan</p>
                  <p>Rp. {serviceFee.toLocaleString()}</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p>Biaya Transaksi</p>
                  <p>Rp. {transactionFee.toLocaleString()}</p>
                </div>
              </div>

              <div className="total d-flex justify-content-between align-items-center border p-2 mt-4 rounded">
                <p className="font-weight-bold">Total</p>
                <p className="font-weight-bold">
                  Rp. {totalCost.toLocaleString()}
                </p>
              </div>

              <div className="w-100 d-flex justify-content-between align-items-center mt-4">
                <Button
                  variant="secondary"
                  onClick={() => window.history.back()}
                >
                  Kembali
                </Button>
                <Button variant="primary" onClick={handlePayment}>
                  Lanjutkan Pembayaran
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TransaksiPage;
