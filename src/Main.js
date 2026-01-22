import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/main.css';
import NavBar from './components/NavBar';
import Button from './components/Button';


function Main() {
  return (
    <div className="Main container-fluid vw-100 vh-100 bg-black text-center p-0">

      <NavBar />

      <div className="MainMenu d-flex flex-column justify-content-around align-items-center w-100 h-100">
        <h1 className="Title">DISTORSION'S SHADOW</h1>

        <Button link="/char-sel" />
      </div>

    </div>

  );
}

export default Main;