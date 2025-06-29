class AdsService {
    constructor(adsModel) {
        this.adsModel = adsModel;
    }

    async addAds(adsData) {
        return this.adsModel.create(adsData);
    }

    async getAll() {
        return this.adsModel.getAll();
    }
    
    async getById(adsId) {
        return this.adsModel.getById(adsId);
    }

    async updateById(adsId) {
        return this.adsModel.updateById(adsId);
    }

    async deleteAds(adsId) {
        return this.adsModel.deleteById(adsId);
    }
}

module.exports = AdsService;