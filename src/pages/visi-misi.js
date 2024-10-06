import VisiMisiPage from "@/components/VisiMisi/VisiMisi";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const VisiMisi = () => {
    return (
        <Layout pageTitle="Visi Misi">
            <PageHeader pageTitle="Visi Misi" />
            <VisiMisiPage />
        </Layout>
    );
};

export default VisiMisi;
