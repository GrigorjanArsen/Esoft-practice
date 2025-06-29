const express = require('express');

module.exports = adsController => {
    const router = express.Router();
    router.post(
        "/ads",
        adsController.addAds,
    );

    router.get(
        "/ads",
        adsController.getAll,
    );

    router.get(
        "/ads/:adsId",
        adsController.getById,
    );

    router.put(
        "/ads/:adsId",
        adsController.updateById,
    );

    router.delete(
        "/ads/:adsId",
        adsController.deleteById,
    );

    return router;
}



