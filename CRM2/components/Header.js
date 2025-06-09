function Header({ user, onLogout }) {
  try {
    return (
      <header className="bg-white shadow-sm border-bottom p-3 mb-4" data-name="header" data-file="components/Header.js">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0" style={{ color: 'var(--purple-800)' }}>
              Bienvenido al Sistema CRM
            </h5>
            <small className="text-muted">Gestiona tu negocio de manera eficiente</small>
          </div>
          
          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="text-muted me-2">Usuario:</span>
              <strong style={{ color: 'var(--purple-700)' }}>{user?.username}</strong>
            </div>
            
            <button 
              className="btn btn-outline-danger btn-sm"
              onClick={onLogout}
            >
              <i className="fas fa-sign-out-alt me-1"></i>
              Salir
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}
