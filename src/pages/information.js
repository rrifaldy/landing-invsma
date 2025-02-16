import Layout from "@/components/Layout/Layout";
import InformationPage from "@/components/InformationPage/InformationPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Information = () => {
    return (
        <Layout pageTitle="Information">
            <PageHeader pageTitle="Information" />
            <InformationPage />
        </Layout>
    );
};

export default Information;
