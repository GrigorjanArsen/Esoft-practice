
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const AdsModel =   require('../reposio/AdsDal.js');
const AdsRoutes = require('../Routes/AdsRoutes');
const AdsController = require('../Controllers/AdsController');
const AdsService = require('../Service/AdsService');

const app = express();
const port = Number(process.env.PORT);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

const adsService = new AdsService(AdsModel);
const adsController = new AdsController(adsService);
app.use('/api', AdsRoutes(adsController));

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT localhost:${port}`);
})
