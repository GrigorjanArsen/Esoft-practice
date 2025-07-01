class AdsController{
    constructor(adsService) {
        this.adsService = adsService;
    }

    addAds = async (req, res) => {
        try {
            const ad = await this.adsService.addAds(req.body);
            res.status(200).json(ad);
        }
        catch {
            throw new Error(400, "Не удалось создать объявление")
        }
    }

    getAll = async (req, res) => {
        try {
            const ads = await this.adsService.getAll();
            res.status(200).json(ads);
        }
        catch {
            throw new Error(400, "Не удалось получить объявления")
        }
    }

    getById = async(req, res) => {
        try{
            const adsId = parseInt(req.params.adsId, 10);
            const ad = await this.adsService.getById(adsId);
            res.status(200).json(ad)
        }
        catch{
            throw new Error(400, "Не удалось получить объявления")
        }
    }

    updateById = async(req, res) => {
        try{
            const adsId = parseInt(req.params.adsId, 10);
            const ad = await this.adsService.updateById(adsId, req.body);
            res.status(200).json(ad)
        }
        catch{
            throw new Error(400, "Не удалось получить объявления")
        }
    }

    deleteById = async(req,res) => {
        try{
            const adsId = parseInt(req.params.adsId, 10);
            const ad = await this.adsService.deleteById(adsId);
            res.status(200);
        }
        catch{
            throw new Error(400, "Не удалось получить объявления")
        }
    }

}
module.exports = AdsController;