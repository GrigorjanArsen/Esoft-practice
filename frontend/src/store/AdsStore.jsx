import { makeAutoObservable, runInAction } from 'mobx';
import { adsApi } from '../api/adsApi';  

class AdsStore {
  ads = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAds = async () => {
    this.loading = true;
    this.error = null;
    try {
      const data = await adsApi.getAll();
      runInAction(() => {
        this.ads = data;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  addAd = async (ad) => {
    this.loading = true;
    this.error = null;
    try {
      const newAd = await adsApi.addAds(ad);
      runInAction(() => {
        this.ads.unshift(newAd);
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  updateAd = async (ad) => {
    this.loading = true;
    this.error = null;
    try {
      const updatedAd = await adsApi.updateById(ad.id, ad);
      runInAction(() => {
        const index = this.ads.findIndex(a => a.id === updatedAd.id);
        if (index > -1) this.ads[index] = updatedAd;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  deleteAd = async (id) => {
    this.loading = true;
    this.error = null;
    try {
      await adsApi.deleteAds(id);
      runInAction(() => {
        this.ads = this.ads.filter(ad => ad.id !== id);
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };

  getAdById = async (id) => {
    this.loading = true;
    this.error = null;
    try {
      const ad = await adsApi.getById(id);
      runInAction(() => {
        this.loading = false;
      });
      return ad;
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  };
}

export const adsStore = new AdsStore();
