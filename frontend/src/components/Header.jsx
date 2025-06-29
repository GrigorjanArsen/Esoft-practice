import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="mainbar">
      <div className='progname'>
        <Link to="/" style={{textDecoration: "none", color: "white"}}>Система управления рекламой</Link>
        </div>
      <div className='textbox'>
        <Link to="/ads" style={{textDecoration: "none", color: "white"}}>Мои объявления</Link>
      </div>
    </div>
  );
}

export default Header;
