var express = require('express');
var router = express.Router();

const securApiKey = process.env.OWM_API_KEY;

router.get('/articles', (req, res) => {
    fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${securApiKey}`)
    .then(response => response.json())
    .then(data => {
        res.json({articles: data.articles})
     });

})


module.exports = router;
