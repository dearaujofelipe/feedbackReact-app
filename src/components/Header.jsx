import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: '#ff6a95' }}>
      <header style={headerStyles}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    </Link>
  );
}

const headerStyles = {
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95',
};

export default Header;
