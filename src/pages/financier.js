import Layout from "@/components/Layout/Layout";
import FinancierPage from "@/components/Financier/FinancierPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Financier = () => {
    return (
        <Layout pageTitle="Financier">
            <PageHeader pageTitle="Financier" />
            <FinancierPage />
        </Layout>
    );
};

export default Financier;
