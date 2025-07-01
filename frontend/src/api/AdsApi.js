export const adsApi = {
  getAll: async () => {
    const res = await fetch('http://localhost:3001/api/ads');
    if (!res.ok) throw new Error('Ошибка загрузки');
    return res.json();
  },

  getById: async (id) => {
    const res = await fetch(`http://localhost:3001/api/ads/${id}`);
    if (!res.ok) throw new Error('Ошибка получения объявления');
    return res.json();
  },

  addAds: async (ad) => {
    const res = await fetch('http://localhost:3001/api/ads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ad),
    });
    if (!res.ok) throw new Error('Ошибка добавления');
    return res.json();
  },

  updateById: async (id, ad) => {
    const res = await fetch(`http://localhost:3001/api/ads/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ad),
    });
    if (!res.ok) throw new Error('Ошибка обновления');
    return res.json();
  },

  deleteAds: async (id) => {
    const res = await fetch(`http://localhost:3001/api/ads/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Ошибка удаления');
    return res.json();
  },
};
