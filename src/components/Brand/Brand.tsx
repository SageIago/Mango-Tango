import "./Brand.css"
import { Shopify, GoogleImg, AtlasImg, DropBox, Slack } from "./imports"
const Brand = () => {
  return (
    <div className="Hub_Brand section_padding">
      <div>
        <img src={GoogleImg} alt="Google"/>
      </div>
      <div>
        <img src={Shopify} alt="Shopify"/>
      </div>
      <div>
        <img src={AtlasImg} alt="Gmail"/>
      </div>
      <div>
        <img src={DropBox} alt="" />
      </div>
      <div>
      <img src={Slack} alt="" />
      </div>
    </div>
  )
}

export default Brand