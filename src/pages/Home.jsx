import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/accommodation/123">Accommodation Example</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
