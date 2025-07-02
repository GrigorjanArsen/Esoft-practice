import './Ads.css';
import { Link } from 'react-router-dom';
import { adsStore } from '../store/AdsStore';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import ConfirmModal from './ConfirmModal';

const Ads = observer(() => {
  const {
    loading,
    error,
    fetchAds,
    filteredAds,
    selectedCity,
    selectedType,
    setCityFilter,
    setTypeFilter,
    deletingId,
    deleteAd,
  } = adsStore;

  const [modalOpen, setModalOpen] = useState(false);
  const [adToDelete, setAdToDelete] = useState(null);

  useEffect(() => {
    fetchAds();
  }, []);

  const uniqueCities = [...new Set(adsStore.ads.map(ad => ad.city))];
  const uniqueTypes = [...new Set(adsStore.ads.map(ad => ad.type))];

  const openDeleteModal = (ad) => {
    setAdToDelete(ad);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
  console.log('confirmDelete вызван'); // <-- этот лог должен быть в консоли при нажатии "Да"
  if (adToDelete) {
    try {
      await deleteAd(adToDelete.id);
      console.log('Удаление завершено');
    } catch (err) {
      console.error('Ошибка удаления:', err);
    }
    setModalOpen(false);
    console.log('modalOpen после закрытия:', modalOpen);
    setAdToDelete(null);
  }
  };


  const cancelDelete = () => {
    setModalOpen(false);
    setAdToDelete(null);
  };

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
        <select className="filters-select" value={selectedCity} onChange={(e) => setCityFilter(e.target.value)}>
          <option value="">Все города</option>
          {uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <select className="filters-select" value={selectedType} onChange={(e) => setTypeFilter(e.target.value)}>
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
                onClick={() => openDeleteModal(ad)}
                disabled={deletingId === ad.id}
              >
                {deletingId === ad.id ? 'Удаление...' : 'Удалить'}
              </button>
              <Link to={`/edit/${ad.id}`} className="edit-button">Редактировать</Link>
            </li>
          ))}
        </ul>
      )}

      <ConfirmModal
        key= {modalOpen ? 'open' : 'closed'}
        isOpen={modalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="Вы точно хотите удалить это объявление?"
      />
    </div>
  );
});

export default Ads;
