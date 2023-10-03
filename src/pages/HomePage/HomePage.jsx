import Lead from "../../components/Lead/Lead";
import Teaser from "../../components/Teaser/Teaser";
//import Features from "../../components/Features/Features";
import Quote from "../../components/Quote/Quote";
import Card from "../../components/3DCard/3DCard";
//import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Lead />
      <Teaser />
      <Card />
      {/* <Features /> */}
      <Quote />
    </>
  );
};

export default HomePage;
