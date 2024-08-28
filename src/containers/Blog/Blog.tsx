import { Article } from "../../components";
import "./Blog.css";
import {
  Cortana,
  AI,
  Building,
  Food,
  Questions,
} from "../../components/Brand/imports";

const Blog = () => {
  return (
    <div className="Hub_Blog section_padding" id="BLOG">
      <div className="Hub_Blog_Heading">
        <h1 className="gradient_text">
          In Our Tech Spaces, We are Up-To-Date With Latest Info
        </h1>
      </div>
      <div className="Hub_Blog_Container">
        <div className="Hub_Blog_Container_GroupA">
          <Article
            imageUrl={AI}
            Date="August 15th 2024"
            Title="is DALLE-3 Going to be The Future of Comics Design?"
          />
        </div>
        <div className="Hub_Blog_Container_GroupB">
          <Article
            imageUrl={Cortana}
            Date="August 18th 2024"
            Title="A view on Windows Cortana and her industry AI Counterparts"
          />
          <Article
            imageUrl={Building}
            Date="August 20th 2024"
            Title="Check Mango-Tango Spaces in Our New Facilities"
          />
          <Article
            imageUrl={Food}
            Date="August 19th 2024"
            Title="$MANGO is Adding native food to the Web3 World."
          />
          <Article
            imageUrl={Questions}
            Date="August 21st 2024"
            Title="What are the Questions Most Developers Ask?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
