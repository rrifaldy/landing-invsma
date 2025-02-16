import Layout from "@/components/Layout/Layout";
import ServicePage from "@/components/Service/ServicePage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Service = () => {
    return (
        <Layout pageTitle="Service">
            <PageHeader pageTitle="Service" />
            <ServicePage />
        </Layout>
    );
};

export default Service;
