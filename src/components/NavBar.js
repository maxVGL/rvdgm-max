import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/navbar.css';
import '../assets/css/animations.css';

function NavBar() {
    return(
        <div className="NavBar navbar fixed-top px-4 d-flex justify-content-between">
            <p className="m-0">DISTORSION'S SHADOW</p>
            <p className="m-0">by Max</p>
        </div>
    );
}

export default NavBar;