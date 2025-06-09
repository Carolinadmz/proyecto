function Sidebar({ activeModule, onModuleChange }) {
  try {
    const modules = [
      { id: 'dashboard', name: 'Dashboard', icon: 'fas fa-chart-line' },
      { id: 'compras', name: 'Compras', icon: 'fas fa-shopping-cart' },
      { id: 'contactos', name: 'Contactos', icon: 'fas fa-address-book' },
      { id: 'negocios', name: 'Negocios', icon: 'fas fa-handshake' },
      { id: 'tickets', name: 'Tickets', icon: 'fas fa-ticket-alt' }
    ];

    return (
      <div className="sidebar col-md-2 p-0" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-4">
          <div className="text-center mb-4">
            <h4 className="text-white mb-0">
              <i className="fas fa-chart-pie me-2"></i>
              CRM Pro
            </h4>
          </div>
          
          <nav className="nav flex-column">
            {modules.map(module => (
              <a
                key={module.id}
                href="#"
                className={`nav-link py-3 px-3 mb-2 ${activeModule === module.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onModuleChange(module.id);
                }}
              >
                <i className={`${module.icon} me-3`}></i>
                {module.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    reportError(error);
  }
}
