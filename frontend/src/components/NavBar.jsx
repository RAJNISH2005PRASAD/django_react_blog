import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem('access_token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <nav className={`navbar navbar-expand-lg py-3 ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.brand}`} to="/">
          MyBrand
        </Link>
        <button
          className="navbar-toggler mb-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:"white", }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={`mx-auto ${styles.searchBarContainer}`}>
            <SearchBar />
          </div>
          <div className={`d-flex align-items-center ${styles.actions}`}>
            {isLoggedIn ? (
              <>
                <span className={`text-white ${styles.greeting}`}>
                  Hi, {user ? user.username : 'User'}
                </span>
                <Link className={`btn ${styles.createButton}`} to="/add-note">Create</Link>
                <button className={`btn ${styles.logoutButton}`} onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link className={`btn ${styles.actionButton}`} to="/login">Login</Link>
                <Link className={`btn ${styles.actionButton}`} to="/signup">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;