import "./ArticleCard.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <span className="article-card__date">
        Date de publication : {formatDate(article.publish_date)}
      </span>
      <h2 className="article-card__title">{article.title}</h2>
      <p className="article-card__chapeau">{article.subhead}</p>
    </article>
  );
}

export default ArticleCard;
