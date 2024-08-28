import { Feature } from "../../components";
import "./About.css";

const About = () => {
  return (
    <div className="Hub_About section_margin" id="ABOUT">
      <div className="Hub_About-Feature">
        <Feature
          title="About Mango-Tango"
          text="Mango-Tango Tech Startup is a dream startup by two specific founders, Borngreat Ikwutah, a full-stack developer and Godwin Dafoe, a Web3 Crypto Evangelist. We are bringing the latest Web3 Gossips. Mango-Tango specializes in building engimatic webapps capable of responsive business designs. Contact us at 070-800-527-61 for more info."
        />
      </div>
      <div className="Hub_About-Heading">
        <h1 className="gradient_text">
          Our Possiblities Extend Beyond Just Building Your Apps.
        </h1>
        <p>EXPLORE OUR LIBRARY</p>
      </div>
      <div className="Hub_About_Container">
        <Feature
          title="Our Goals"
          text="Our Goal is make sure we utilise block-chain technologies to build one of the best technological companies in the world."
        />
        <Feature
          title="Our Dreams"
          text="To educate a million people in technology and make them know about the Web3 space. We want to build a $MANGO Token soon."
        />
        <Feature
          title="Accomplishments"
          text="The Best Technological space in Uyo, Akwa-Ibom State. This was won in December, 2018"
        />
      </div>
    </div>
  );
};

export default About;
