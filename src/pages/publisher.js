import Layout from "@/components/Layout/Layout";
import PublisherPage from "@/components/Publisher/PublisherPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Publisher = () => {
    return (
        <Layout pageTitle="Publisher">
            <PageHeader pageTitle="Publisher" />
            <PublisherPage />
        </Layout>
    );
};

export default Publisher;
