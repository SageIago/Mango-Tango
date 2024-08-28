import "./Features.css";
import FeaturesData from "../../components/Feature/Data";
import { Feature } from "../../components";

const Features = () => {
  return (
    <div className="Hub_Features section_padding" id="FEATURES">
      <div className="Hub_Features-Heading">
        <h1 className="gradient_text">
          We Offer a Wide Varieties of Services. Choose Yours Now
        </h1>
        <p>Check Out Our Amazing Portfolio..</p>
      </div>
      <div className="Hub_Features-Container">
        {FeaturesData.map((item) => (
          <Feature
            key={item.id + item.title}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
