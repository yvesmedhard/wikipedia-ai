const express = require('express');
const router = express.Router();

const searchArticle = require('../modules/searchArticle');
const sumarizeAI = require('../modules/sumarizeAI');

router.post('/', async (req, res) => {
  const { text } = req.body;
  try {
    const articleContent = await searchArticle(text);
    const sumarizedContent = await sumarizeAI(articleContent);
    
    res.send(sumarizedContent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;