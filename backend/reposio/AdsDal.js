const { pool } = require('../db');

class AdsDal {
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
            console.log('DAL: получаем объявления');
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
    const deletedCount = await pool('ads').where('id', adsId).del();
    if (deletedCount === 0) {
      throw new Error('Объявление не найдено');
    }
    return true;
  } catch (err) {
    console.error('Ошибка удаления объявления:', err);
    throw err;
  }
}
}
module.exports = new AdsDal();

