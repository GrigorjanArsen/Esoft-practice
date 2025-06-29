const pool = require('../db');

class Ads {
    async addAds(adsData) {
        try {
            const query = pool('ads');
            await query.insert(adsData); 
        } catch (err) {
            console.error('Error adding to cart', err);
        }
        
    }

    async getAll() {
        try {
            const query = pool('ads');
            
            return query.select('*')
        } catch (err) {
            console.error('Error adding to cart', err);
        }
        
        
    }
    async getById(adsId) {
        try {
            const query = pool('ads');
            return query.where('id', adsId).first();
        } catch (err) {
            console.error('Error adding to cart', err);
        }
        
    }

    async updateById(adsId, adsData) {
        try {
            const query = pool('ads');
            await query.where('id', adsId).update(adsData);
        }catch (err) {
            console.error('Error adding to cart', err);
        }
        
    }

    async deleteById(adsId) {
        try {
            const query = pool('ads');
            await query.where('id', adsId).delete();
        }catch (err) {
            console.error('Error adding to cart', err);
        }
        
    }
}
module.exports = new CartModel();
