const ArticlesService = require("./../services/articles");

const articlesService = new ArticlesService();

async function getLastTenArticlesByMostRecent(req, res) {
    try {
        const articles = await articlesService.getLastTenByMostRecent();

        if(!articles || articles.length === 0){
            return res.status(404).json({ error: "Aucun article retrouvé" });
        }
        res.status(200).json(articles);
    } catch (e) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
}

async function getArticleById(req, res) {
    try {
        const { id } = req.params;

        const article = await articlesService.getById(id);

        if (!article) {
            return res.status(404).json({ error: "Article non trouvé" });
        }

        res.status(200).json(article);
    } catch (e) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
}

module.exports = { getLastTenArticlesByMostRecent, getArticleById };
