class AdsService {
    constructor(adsModel) {
        this.adsModel = adsModel;
    }

    async addAds(adsData) {
        return this.adsModel.addAds(adsData);
    }

    async getAll() {
        return this.adsModel.getAll();
    }
    
    async getById(adsId) {
        return this.adsModel.getById(adsId);
    }

    async updateById(adsId, adsData) {
        return this.adsModel.updateById(adsId,adsData);
    }

    async deleteById(adsId) {
        return this.adsModel.deleteById(adsId);
    }
}

module.exports = AdsService;