import "./Feature.css";

interface Props {
  title: string;
  text: string;
}

const Feature = ({ title, text }: Props) => {
  return (
    <div className="Hub_Features_Container_Feature">
      <div className="Hub_Features_Container_Feature-Title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="Hub_Features_Container_Feature-Text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
