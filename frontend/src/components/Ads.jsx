import './Ads.css';
import { Link } from 'react-router-dom';
import { adsStore } from '../store/AdsStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const Ads = observer(() => {
  const { ads, loading, error, fetchAds } = adsStore;

  useEffect(() => {
    fetchAds();
  }, []); // пустой массив, чтобы вызвать только один раз

  if (loading) return <p style={{ color: '#eee' }}>Загрузка...</p>;
  if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;

  return (
    <div className="ads-container" style={{ backgroundColor: '#121212', color: '#eee' }}>
      <Link to="/add" className="floating-add-button" title="Добавить объявление">
        <span className='plus-sign'>+</span>
      </Link>

      <h2>Мои объявления</h2>
      {ads.length === 0 ? (
        <p>Объявлений пока нет. <Link to="/add">Добавить первое</Link></p>
      ) : (
        <ul className="ads-list">
          {ads.map(ad => (
            <li key={ad.id} className="ad-card">
              <h3>{ad.title}</h3>
              <p><strong>Тип:</strong> {ad.type} | <strong>Город:</strong> {ad.city}</p>
              <p><strong>Цена:</strong> {ad.price} ₽</p>
              <p><strong>Статус:</strong> {ad.status}</p>
              <p>{ad.description}</p>
              <p className="ad-date">Дата публикации: {new Date(ad.published_at).toLocaleDateString()}</p>
              <button className="delete-button" onClick={() => adsStore.deleteAd(ad.id)} disabled={adsStore.deletingId === ad.id}>
                Удалить
                {adsStore.deletingId === ad.id && <span className="spinner"></span>}
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
