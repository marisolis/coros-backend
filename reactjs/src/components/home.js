import cardImg from '../components/resources/cardImg.jpg';
import './styles.css';

export default function Home() {
  return (
    <div className="container-fluid mw-100 m-0 p-0">
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="fw-light">Vertically Centered Masthead Content</h1>
              <p className="lead">A great starter layout for a landing page</p>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          maxWidth: "100%",
          backgroundColor: "skyblue",
          height: "250px",
        }}
      >
        <div className="col-12 text-center">
          <h1 className="fw-light">Seccion para filtrado</h1>
          <p className="lead">Filtrado para encontrar proveedores</p>
        </div>
      </div>
      <div className="cards d-flex justify-content-between">
        <div className="card" style={{ width: "22rem" }}>
          <img className="card-img-top" src={cardImg} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/producto" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "22rem" }}>
          <img className="card-img-top" src={cardImg} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "22rem" }}>
          <img className="card-img-top" src={cardImg} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "22rem" }}>
          <img className="card-img-top" src={cardImg} alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/producto" element={<Product />} />
      </Routes>
    </div>
  );
}
