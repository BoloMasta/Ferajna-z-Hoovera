import Lead from "../../components/Lead/Lead";
import Teaser from "../../components/Teaser/Teaser";
//import Features from "../../components/Features/Features";
import Quote from "../../components/Quote/Quote";
import Card from "../../components/3DCard/3DCard";
//import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <Lead />
      <Teaser />
      <Card />
      {/* <Features /> */}
      <Quote />
    </div>
  );
};

export default HomePage;
