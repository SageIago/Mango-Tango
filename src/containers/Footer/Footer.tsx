import "./Footer.css"
import MangoTango from "../../assets/logo.jpg"
const Footer = () => {
  return (
    <div className="Hub_Footer section_padding">
      <div className="Hub_Footer_Heading">
        <h1 className="gradient_text">Do you want to Step Into the Future Before Others</h1>
      </div>
      <div className="Hub_Footer_Btn">
        <p>Get Started</p>
      </div>

      <div className="Hub_Footer_Links">
        <div className="Hub_Footer_Links_Logo">
          <img src={MangoTango} alt="Logo"/>
          <p>20 Udo-Ekong Avenue, Uyo. Nigeria All Rights Reserved</p>
        </div>
        <div className="Hub_Footer_Links_Div">
          <h4>Links</h4>
          <p>Meet the Founders</p>
          <p>Social Media</p>
          <p>Our Tech Platforms</p>
          <p>Contact</p>
        </div>
        <div className="Hub_Footer_Links_Div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Vite Packages</p>
        </div>
        <div className="Hub_Footer_Links_Div">
          <h4>Get in Touch</h4>
          <p>20 Udo-Ekong Avenue, Uyo.</p>
          <p>070-800-527-61</p>
          <p>MangoTango3456@gmail.com</p>
        </div>
      </div>
      <div className="Hub_Footer_Copyright">
        <p>© 2024 Mango-Tango Studios. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer