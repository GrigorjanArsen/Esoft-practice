import './Ads.css';
import { Link } from 'react-router-dom';

function Ads({ ads }) {
  return (
    <div className="ads-container" style={{ backgroundColor: '#121212', color: '#eee' }}>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Ads;
