import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './AddAd.css';
import { adsStore } from '../store/AdsStore';

function EditAdForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ad = adsStore.ads.find(ad => ad.id === Number(id));

  const [form, setForm] = useState({
    title: '',
    type: '',
    city: '',
    price: '',
    description: '',
    status: 'Активно',
  });

  useEffect(() => {
    if (ad) {
      setForm({ ...ad });
    }
  }, [ad]);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.type || !form.city || !form.price) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    await adsStore.updateAd({ ...form, id: ad.id });
    navigate('/ads');
  };

  if (!ad) return <p style={{ padding: 20, color: '#eee' }}>Объявление не найдено.</p>;

  return (
    <div className="addad-container">
      <h2>Редактировать объявление</h2>
      <form className="addad-form" onSubmit={handleSubmit}>
        <label>
          Название*:
          <input type="text" name="title" value={form.title} onChange={handleChange} />
        </label>
        <label>
          Тип*:
          <input type="text" name="type" value={form.type} onChange={handleChange} />
        </label>
        <label>
          Город*:
          <input type="text" name="city" value={form.city} onChange={handleChange} />
        </label>
        <label>
          Цена*:
          <input type="number" name="price" value={form.price} onChange={handleChange} />
        </label>
        <label>
          Описание:
          <textarea name="description" value={form.description} onChange={handleChange} />
        </label>
        <label>
          Статус:
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Активно</option>
            <option>Продано</option>
            <option>Архив</option>
          </select>
        </label>

        <button type="submit" className="btn-submit">Сохранить</button>
      </form>
    </div>
  );
}

export default EditAdForm;
