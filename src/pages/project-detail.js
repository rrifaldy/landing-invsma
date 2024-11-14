import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectDetailsPage from "@/components/ProjectDetails/ProjectDetails";
import React from "react";

const ProjectDetails = () => {
  return (
    <Layout pageTitle="Project Details">
      <PageHeader pageTitle="Project Details" />
      <ProjectDetailsPage />
    </Layout>
  );
};

export default ProjectDetails;
