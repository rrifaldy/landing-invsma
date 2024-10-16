import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import TransaksiPage from "@/components/Transaksi/TransaksiPage";

const Transaksi = () => {
    return (
        <Layout pageTitle="Sukuk">
            <PageHeader pageTitle="Sukuk" />
            <TransaksiPage   />
        </Layout>
    );
};

export default Transaksi;
