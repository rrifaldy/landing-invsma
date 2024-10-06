import NilaiPage from "@/components/Nilai/Nilai";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Nilai = () => {
    return (
        <Layout pageTitle="Nilai">
            <PageHeader pageTitle="Nilai" />
            <NilaiPage />
        </Layout>
    );
};

export default Nilai;
