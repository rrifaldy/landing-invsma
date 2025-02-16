import React from "react";
import Link from "next/link";

import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";

const ServicePage = () => {

    return (
        <div>
            <section className="text-gray-600 body-font py-5">
                <Container className="d-flex flex-column-reverse flex-md-row align-items-center py-5">
                    <Col md={12} className="d-flex flex-column align-items-start text-left mb-4 mb-md-0 mt-4">
                        <h1 className="title-font text-3xl sm:text-4xl font-medium text-gray-900 mb-4 publisher-text">
                            Opsi Pendanaan Syariah
                        </h1>
                        <p className="mb-8 leading-relaxed publisher-subtext">
                            INVSMA Menyajikan 2 Opsi Pendanaan Syariah, yakni Sukuk dan Saham Syariah. Kedua opsi ini menawarkan keuntungan yang stabil dan terukur, serta memungkinkan Anda untuk berpartisipasi dalam pertumbuhan perusahaan yang beroperasi secara etis dan sesuai dengan hukum Islam. Dengan demikian, Anda dapat berinvestasi dengan penuh keyakinan dan memenuhi kewajiban Anda sebagai seorang Muslim.
                        </p>
                    </Col>
                </Container>
            </section>

            <hr></hr>

            <Container fluid className="mx-auto mt-5 mb-5 col-12">
                <Row className="justify-content-center">
                    <Col md={5} xs={12} className="mb-4">
                        <Card className="h-100" style={{ backgroundColor: "#0a412c", color: "white" }}>
                            <Card.Body className="p-5 text-center">
                                <Card.Title className="publisher-text">Saham</Card.Title>
                                <Card.Subtitle className="mt-3">
                                    <small>
                                        Saham, juga dikenal sebagai kepemilikan ekuitas dalam sebuah perusahaan. Ketika Anda membeli saham, Anda memiliki sebagian dari perusahaan yang proporsional dengan jumlah saham yang Anda miliki. Saham diperdagangkan di bursa saham, dan nilainya dapat berfluktuasi berdasarkan kinerja perusahaan, kondisi pasar, dan sentimen investor.
                                    </small>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5} xs={12} className="mb-4">
                        <Card className="h-100" style={{ backgroundColor: "#0a412c", color: "white" }}>
                            <Card.Body className="p-5 text-center">
                                <Card.Title className="publisher-text">Sukuk</Card.Title>
                                <Card.Subtitle className="mt-3">
                                    <small>
                                        Sukuk adalah sekuritas syariah dalam bentuk sertifikat atau bukti kepemilikan yang diterbitkan oleh perusahaan (Penerbit), yang memiliki nilai yang sama dan mewakili bagian yang tidak terpisahkan atau tidak dapat dibagi (syuyu‘) dari aset yang mendasarinya.
                                    </small>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <hr></hr>

            <div className="wrapper">
                <div className="center-line">
                    <a href="/contacts" className="scroll-icon">
                        <i className="fas fa-phone"></i>
                    </a>
                </div>

                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-home"></i>
                        <div className="details">
                            <span className="title" style={{ color: "#0a412c" }}>01. Mengenal Anda</span>
                        </div>
                        <p className="timeline-subtext" style={{ color: "#0a412c" }}>
                            Sebelum keterlibatan formal, kami memprioritaskan pemahaman tentang situasi pribadi Anda, tujuan keuangan, dan kekhawatiran utama yang mendorong pencarian Anda akan nasihat keuangan. Ini menjadi dasar untuk ruang lingkup kerja yang disepakati bersama. Silakan temukan di bawah daftar kemampuan kami yang komprehensif.
                        </p>
                    </section>
                </div>

                <div className="row row-2">
                    <section>
                        <i className="icon fas fa-star"></i>
                        <div className="details">
                            <span className="title" style={{ color: "#0a412c" }}>02. Mendapatkan Kejelasan tentang Keuangan Anda</span>
                        </div>
                        <p className="timeline-subtext" style={{ color: "#0a412c" }}>
                            Keterlibatan perencanaan komprehensif kami dimulai dengan menilai bersama neraca dan arus kas Anda. Akses portal klien aman kami untuk mengunggah dokumen atau menghubungkan akun Anda secara elektronik.
                        </p>
                    </section>
                </div>

                <div className="row row-1">
                    <section>
                        <i className="icon fas fa-rocket"></i>
                        <div className="details">
                            <span className="title" style={{ color: "#0a412c" }}>03. Membangun Visi Keuangan Anda</span>
                        </div>
                        <p className="timeline-subtext" style={{ color: "#0a412c" }}>
                            Kami berkolaborasi dengan Anda untuk memprioritaskan tujuan Anda dan menilai pilihan serta risiko keuangan yang terlibat dalam mencapainya. Melalui kemitraan yang erat, kami menetapkan proyeksi dasar kekayaan finansial Anda di masa depan, memberikan peta jalan untuk kesuksesan Anda.
                        </p>
                    </section>
                </div>

                <div className="row row-2">
                    <section>
                        <i className="icon fas fa-globe"></i>
                        <div className="details">
                            <span className="title" style={{ color: "#0a412c" }}>04. Menganalisis Trade-off</span>
                        </div>
                        <p className="timeline-subtext" style={{ color: "#0a412c" }}>
                            Kami menggunakan model keuangan kami untuk mengembangkan skenario alternatif, memberikan rekomendasi tentang pajak, asuransi, dan investasi untuk menyelaraskan dengan tujuan Anda. Menjelajahi skenario untuk menyelaraskan rekomendasi.
                        </p>
                        <Link href="/causes-details">
                            <a className="main-menu__donate-btn" style={{ borderRadius: "10px" }}>
                                Dapatkan Konsultasi
                            </a>
                        </Link>
                    </section>
                </div>
            </div>

            <hr></hr>
        </div>
    );
};

export default ServicePage;