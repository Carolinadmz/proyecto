function SearchBar({ columns, onSearch, searchTerm, searchColumn }) {
  try {
    return (
      <div className="row mb-4" data-name="search-bar" data-file="components/SearchBar.js">
        <div className="col-md-6">
          <div className="input-group">
            <select 
              className="form-select search-dropdown"
              value={searchColumn}
              onChange={(e) => onSearch(searchTerm, e.target.value)}
              style={{ maxWidth: '200px' }}
            >
              <option value="">Todas las columnas</option>
              {columns.map(col => (
                <option key={col.key} value={col.key}>
                  <i className={col.icon}></i> {col.label}
                </option>
              ))}
            </select>
            
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value, searchColumn)}
              style={{ border: '2px solid var(--purple-200)' }}
            />
            
            <button className="btn btn-purple" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        
        <div className="col-md-6 text-end">
          <button className="btn btn-purple me-2">
            <i className="fas fa-plus me-2"></i>
            Nuevo Registro
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-download me-2"></i>
            Exportar
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SearchBar component error:', error);
    reportError(error);
  }
}
