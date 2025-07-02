import './Ads.css';
import { Link } from 'react-router-dom';
import { adsStore } from '../store/AdsStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const Ads = observer(() => {
  const { loading, error, fetchAds, filteredAds, selectedCity, selectedType, setCityFilter, setTypeFilter } = adsStore;

  useEffect(() => {
    fetchAds();
  }, []);

  const uniqueCities = [...new Set(adsStore.ads.map(ad => ad.city))];
  const uniqueTypes = [...new Set(adsStore.ads.map(ad => ad.type))];

  if (loading) return <p style={{ color: '#eee' }}>Загрузка...</p>;
  if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;

  return (
    <div className="ads-container" style={{ backgroundColor: '#121212', color: '#eee' }}>
      <Link to="/add" className="floating-add-button" title="Добавить объявление">
        <span className='plus-sign'>+</span>
      </Link>

      <h2>Мои объявления</h2>

      {/* Фильтры */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <select className = "filters-select" value={selectedCity} onChange={(e) => setCityFilter(e.target.value)}>
          <option value="">Все города</option>
          {uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <select className = "filters-select" value={selectedType} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">Все типы</option>
          {uniqueTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {filteredAds.length === 0 ? (
        <p>Нет объявлений по текущим фильтрам.</p>
      ) : (
        <ul className="ads-list">
          {filteredAds.map(ad => (
            <li key={ad.id} className="ad-card">
              <h3>{ad.title}</h3>
              <p><strong>Тип:</strong> {ad.type} | <strong>Город:</strong> {ad.city}</p>
              <p><strong>Цена:</strong> {ad.price} ₽</p>
              <p><strong>Статус:</strong> {ad.status}</p>
              <p>{ad.description}</p>
              <p className="ad-date">Дата публикации: {new Date(ad.published_at).toLocaleDateString()}</p>
              <button
                className="delete-button"
                onClick={() => adsStore.deleteAd(ad.id)}
                disabled={adsStore.deletingId === ad.id}
              >
                {adsStore.deletingId === ad.id ? 'Удаление...' : 'Удалить'}
              </button>
              <Link to={`/edit/${ad.id}`} className="edit-button">Редактировать</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Ads;
