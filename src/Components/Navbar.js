import { Link } from 'react-router-dom';
import '../Components/Styles/Navbar.css';

function Navbar() {   
    return (
        <nav className="navbar">
            <h1>My Stories...</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/admin'>Admin</Link>
                <Link>
                </Link>
            </div>
        </nav>
    );
}
export default Navbar;
