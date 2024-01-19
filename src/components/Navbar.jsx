import { Link } from 'react-router-dom';
export default function Navbar() {

    return (
        <div>
            <nav className="navbar">
                <h1>Priyojit blogs</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                </div>
            </nav>
        </div>
    );
}
