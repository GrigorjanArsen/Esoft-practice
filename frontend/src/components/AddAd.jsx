import { useState } from 'react';
import './AddAd.css';

function AddAd({ onAdd }) {
  const [form, setForm] = useState({
    title: '',
    type: '',
    city: '',
    price: '',
    description: '',
    status: 'Активно',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.type || !form.city || !form.price) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    onAdd({ ...form, id: Date.now(), published_at: new Date().toISOString() });
    setForm({
      title: '',
      type: '',
      city: '',
      price: '',
      description: '',
      status: 'Активно',
    });
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
