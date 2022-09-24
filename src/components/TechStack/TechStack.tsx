import HTMLIcon from "../../../src/assets/icons/html-5.png";
import CSSIcon from "../../assets/icons/css-3.png";
import JSIcon from "../../assets/icons/js.png";
import TSIcon from "../../assets/icons/typescript.png";
import TailwindIcon from "../../assets/icons/tailwindCSS.png";
import ReactIcon from "../../assets/icons/react.png";
import GatsbyIcon from "../../assets/icons/Gatsby.png";
import NextIcon from "../../assets/icons/next-js.svg";
import AngularIcon from "../../assets/icons/angular.png";
import CPPIcon from "../../assets/icons/cpp.png";
import "./TechStack.css";
const TechStack = () => {
  return (
    <>
      <p className="techstack-heading">Techstack</p>

      <div style={{ background: "blue" }} className="techstack-container">
        <Card name="HTML" detail={HTMLIcon} />
        <Card name="CSS" detail={CSSIcon} />
        <Card name="JS" detail={JSIcon} />
        <Card name="TS" detail={TSIcon} />
        <Card name="Tailwind CSS" detail={TailwindIcon} />
        <Card name="React JS" detail={ReactIcon} />
        <Card name="Gatsby JS" detail={GatsbyIcon} />
        <Card name="Next JS" detail={NextIcon} />
        <Card name="Angular" detail={AngularIcon} />
        <Card name="C++" detail={CPPIcon} />
      </div>
    </>
  );
};
interface property {
  name: string;
  detail?: any;
}
const Card = (props: property) => {
  return (
    <div>
      <img
        src={props.detail}
        style={{
          position: "static",
          width: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      ></img>
      <p>{props.name}</p>
    </div>
  );
};
export default TechStack;
