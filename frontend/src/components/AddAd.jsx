import { useState } from 'react';
import './AddAd.css';
import { adsStore } from '../store/AdsStore';
import { useNavigate } from 'react-router-dom';

function AddAd() {
  const [form, setForm] = useState({
    title: '',
    type: '',
    city: '',
    price: '',
    description: '',
    status: 'Активно',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.type || !form.city || !form.price) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    await adsStore.addAd({ ...form, published_at: new Date().toISOString() });
    navigate('/ads');
  };

  return (
    <div className="addad-container">
      <h2>Добавить объявление</h2>
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

        <button type="submit" className="btn-submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddAd;
