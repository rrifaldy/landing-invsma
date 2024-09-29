import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Disclaimer</span>
        </div>
        <Row>
          <Col xl={12} lg={12} sm={6} className="w-full">
            <div className="w-full d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mt-4">
              <div className="">
                <p style={{ fontWeight: "200" }}>
                  Sesuai Peraturan Otoritas Jasa Keuangan (POJK)
                  No.57/POJK.04/2020 tentang “Penawaran Efek Melalui Layanan
                  Urun Dana Berbasis Teknologi Informasi” Pasal 27, kami
                  menyatakan bahwa :
                </p>
                <ul>
                  <li>
                    <p style={{ fontWeight: "200" }}>
                      OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN
                      MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA
                      MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM
                      LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN
                      DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.
                    </p>
                  </li>
                  <li>
                    <p style={{ fontWeight: "200" }}>
                      INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU
                      MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA
                      TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN
                      PENYELENGGARA.
                    </p>
                  </li>
                  <li>
                    <p style={{ fontWeight: "200" }}>
                      PENERBIT DAN PENYELENGGARA, BAIK SENDIRI SENDIRI MAUPUN
                      BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN
                      SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA
                      INI.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Disclaimer;
