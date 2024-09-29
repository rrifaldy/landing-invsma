import SukukPage from "@/components/Sukuk/SukukPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Sukuk = () => {
    return (
        <Layout pageTitle="Sukuk">
            <PageHeader pageTitle="Sukuk" />
            <SukukPage   />
        </Layout>
    );
};

export default Sukuk;
