import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Добро пожаловать в Систему управления рекламой</h1>
      <p>Управляйте своими объявлениями быстро и удобно</p>
      
      <div className="button-group">
        <Link to="/ads" className="btn primary-btn">
          Мои объявления
        </Link>
        <Link to="/add" className="btn secondary-btn">
          Добавить объявление
        </Link>
      </div>

      <div className="info-cards">
        <div className="card">
          <h3>Создавайте</h3>
          <p>Добавляйте объявления с детальным описанием и актуальной ценой.</p>
        </div>
        <div className="card">
          <h3>Отслеживайте</h3>
          <p>Следите за статусом и датой публикации каждого объявления.</p>
        </div>
        <div className="card">
          <h3>Редактируйте</h3>
          <p>Легко обновляйте информацию о ваших объектах в любое время.</p>
        </div>
        <div className="card">
          <h3>Удаляйте</h3>
          <p>Удалите неактуальное или неверное объявление.</p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
