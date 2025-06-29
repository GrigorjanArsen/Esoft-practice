require('dotenv').config();
const express = require('express');

const AdsModel = require('../reposio/AdsDal');
const AdsRoutes = require('../Routes/AdsRoutes');
const AdsController = require('../Controllers/AdsController');
const AdsService = require('../Service/AdsService');

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());

const adsService = new AdsService(AdsModel);
const adsController = new AdsController(adsService);
app.use('/api', AdsRoutes(adsController));

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT localhost:${port}`);
})
