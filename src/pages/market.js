import MarketPage from "@/components/Market/MarketPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Market = () => {
    return (
        <Layout pageTitle="Pasar Sekunder">
            <PageHeader pageTitle="Pasar Sekunder" />
            <MarketPage   />
        </Layout>
    );
};

export default Market;
