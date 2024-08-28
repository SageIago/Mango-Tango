import "./Article.css";

interface Props {
  imageUrl: string;
  Date: string;
  Title: string;
}

const Article = ({ imageUrl, Date, Title }: Props) => {
  return (
    <div className="Hub_Blog_Container_Article">
      <div className="Hub_Blog_Container_Article-Image">
        <img src={imageUrl} alt="Blog" />
      </div>
      <div className="Hub_Blog_Container_Article_Text">
        <div>
          <p>{Date}</p>
          <h3>{Title}</h3>
        </div>
        <p>READ FULL ARTICLE....</p>
      </div>
    </div>
  );
};

export default Article;
