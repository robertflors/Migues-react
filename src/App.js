import './App.css';
import './components/navbar/navbar';

function App() {
return (
<div className="App">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="img/logoNegro.PNG" className="d-inline-block align-text-top" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex flex-row-reverse bd-highlight">
          <a class="nav-link" href="#"><img src="img/instagram.png" alt="" id="logoInstagram" /></a>
          <a class="nav-link" href="#"><img src="img/carrito.png" alt="" /></a>
          
        </div>
      </div>
    </div>
  </nav>
  
</div>
);
}

export default App;