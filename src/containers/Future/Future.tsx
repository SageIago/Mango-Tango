import "./Future.css"
import People from "../../assets/Images/TheKilled-removebg-preview.png"

const Future = () => {
  return (
    <div className="Hub_Future section_padding" id="FUTURE">
      <div className="Hub_Future_Image">
        <img src={People} alt="People" />
      </div>
      <div className="Hub_Future_Content">
        <h4>Request Early Access to Our Repertoire of Services</h4>
        <h1 className="gradient_text">Check Our Team of Seasoned Professionals</h1>
        <p>With the ongoing demand of businesses and website features. We have ready websites that can be easy to deploy within few minutes. We partner with Web-Hosting Companies like Hostinger, Vercel, Cloud-Flare Pages, etc for your various needs.</p>
        <h4>Tips on How to Get Started..</h4>
      </div>
    </div>
  )
}

export default Future