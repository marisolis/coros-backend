
export default function Filtrar() {

  return (
    <div
      style={{ maxWidth: "100%", alignItems: 'center', justifyContent: 'center', padding: '50px'}}
    >
      <h2 className="fw-light text-center">Búsqueda</h2>
      <p className="lead text-center mb-5">Filtre por fecha o búsque un proveedor</p>
      <div className="col-12 text-center d-flex" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div className="input-group">
          <input type="date" className="form-control me-3 shadow" placeholder="Fecha"/>
        </div>
        <div className="input-group">
          <input type="text" className="form-control ms-3 shadow" placeholder="Búscar proveedor..." aria-label="Búscar proveedor..." aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-secondary rounded-end shadow" style={{borderRadius: '0'}} type="button">Búscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
