import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.css";

const API_URL = import.meta.env.VITE_API_URL;

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/articles`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossible de récupérer les articles");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Chargement des articles...</p>;
  }

  if (error) {
    return (
      <div className="empty-state">
        <p className="empty-state__icon">😕</p>
        <p className="empty-state__message">Oups ! Une erreur est survenue</p>
        <p className="empty-state__detail">{error}</p>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__icon">📰</p>
        <p className="empty-state__message">Aucun article disponible pour le moment</p>
        <p className="empty-state__detail">Revenez bientôt pour découvrir nos dernières actualités !</p>
      </div>
    );
  }

  return (
    <section className="articles-grid">
      {articles.map((article) => (
        <Link key={article.id} to={`/${article.id}`} className="article-card-link">
          <ArticleCard article={article} />
        </Link>
      ))}
    </section>
  );
}

export default ArticleList;
