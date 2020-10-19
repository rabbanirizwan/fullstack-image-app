const router = require('express').Router();
const { getTrendingData, getSearchedImages } = require('../services/API');

router.route('/').get(async (req, res) => {
    res.json(await getTrendingData('gifs', 15));
});

router.route('/').post(async (req, res) => {
    const searchTerm = req.body.searchTerm;
    res.json(await getSearchedImages('gif', 15, searchTerm));
});

module.exports = router;
