import "./Header.css"
import MainBackground from "../../assets/Images/Hand.png"
import People from "../../assets/Images/people.png"


const Header = () => {
  return (
    <div className="Hub_Header section_padding" id="HOME">
      <div className="Hub_Header-Content">
        <h1 className="gradient_text">A TECHNOLOGICAL HUB WITH A DIFFERENCE</h1>
        <p>Founded in 2018. Mango-Tango Tech Hub aims to impart a holistic understanding of various technological operations, including scientific services, website and app management, and  launching diversified marketing strategies, within a real-world setting. </p>
        <div className="Hub_Header-Content_InputField">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">SIGN IN</button>
        </div>
        <div className="Hub_Header-Content_Media">
          <img src={People} alt="People" />
          <p>Over 1600 people have contacted us for services...</p>
        </div>
      </div>
        <div className="Hub_Header_Image">
          <img src={MainBackground} alt="Main-Image" />
        </div>
    </div>
  )
}

export default Header