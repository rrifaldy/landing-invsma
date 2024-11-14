import BestService from "@/components/BestService/BestService";
import Charity from "@/components/Charity/Charity";
import Disclaimer from "@/components/Disclaimer/Disclaimer";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import HelpThem from "@/components/HelpThem/HelpThem";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import ReachUs from "@/components/ReachUs/ReachUs";
import ThreeBoxes from "@/components/ThreeBoxes/ThreeBoxes";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <MainSlider />
      <Charity />
      <JoinOne />
      <ThreeBoxes />
      <HelpingOne />
      <BestService />
      <HelpThem />
      <ReachUs/>
      <Disclaimer/>
    </Layout>
  );
};

export default Home;
