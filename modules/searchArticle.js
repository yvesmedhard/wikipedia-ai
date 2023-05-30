const wikipedia = require('wikipedia');

async function searchArticle(articleTitle) {
  try {
    const results = await wikipedia.search(articleTitle);
    if (results.length === 0) {
      return 'No Articles found';
    }
    foundArticlesTitles = getTitles(results['results']);
    const page = await wikipedia.page(foundArticlesTitles[0]);
    const content = await page.content();
    return result = `Found articles: \n- ${foundArticlesTitles.join(';\n- ')} \n\nUsing: ${foundArticlesTitles[0]} as source:\n\n${content} `;
  } catch (error) {
    console.log(error);
    return `Article ${firstArticleTitle} not found`;
  }
}

function getTitles(results) {
    const titles = [];
    for (let i = 0; i < results.length; i++) {
      titles.push(results[i].title);
    }
    return titles;
  }

module.exports = searchArticle;