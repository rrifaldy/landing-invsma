import StockPage from "@/components/Stock/StockPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Stock = () => {
    return (
        <Layout pageTitle="Sharia Stock">
            <PageHeader pageTitle="Sharia Stock" />
            <StockPage   />
        </Layout>
    );
};

export default Stock;
