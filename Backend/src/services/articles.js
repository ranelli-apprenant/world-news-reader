const prisma = require("./../lib/prisma");

class ArticlesService {
  async getLastTenByMostRecent() {
    return prisma.article.findMany({
      orderBy: {
        publish_date: "desc",
      },
      take: 10,
    });
  }

  async getById(id) {
    return prisma.article.findUnique({
      where: { id },
    });
  }
}

module.exports = ArticlesService;
