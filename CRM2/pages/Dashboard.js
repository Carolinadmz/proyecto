function Dashboard() {
  try {
    const stats = [
      { title: 'Total Compras', value: '1,234', icon: 'fas fa-shopping-cart', color: 'var(--purple-500)' },
      { title: 'Contactos', value: '567', icon: 'fas fa-address-book', color: 'var(--purple-600)' },
      { title: 'Negocios Activos', value: '89', icon: 'fas fa-handshake', color: 'var(--purple-700)' },
      { title: 'Tickets Abiertos', value: '23', icon: 'fas fa-ticket-alt', color: 'var(--purple-800)' }
    ];

    return (
      <div data-name="dashboard" data-file="pages/Dashboard.js">
        <h2 className="mb-4" style={{ color: 'var(--purple-800)' }}>
          <i className="fas fa-chart-line me-2"></i>
          Dashboard
        </h2>
        
        <div className="row mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card-purple p-4 text-center">
                <div className="mb-3">
                  <i className={stat.icon} style={{ fontSize: '2.5rem', color: stat.color }}></i>
                </div>
                <h3 className="mb-1" style={{ color: 'var(--purple-800)' }}>{stat.value}</h3>
                <p className="text-muted mb-0">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-md-8">
            <div className="card-purple p-4">
              <h5 className="mb-3" style={{ color: 'var(--purple-800)' }}>
                <i className="fas fa-chart-bar me-2"></i>
                Actividad Reciente
              </h5>
              <div className="list-group list-group-flush">
                <div className="list-group-item border-0 px-0">
                  <i className="fas fa-plus-circle text-success me-2"></i>
                  Nueva compra registrada - $1,500
                </div>
                <div className="list-group-item border-0 px-0">
                  <i className="fas fa-user-plus text-info me-2"></i>
                  Nuevo contacto agregado: Juan Pérez
                </div>
                <div className="list-group-item border-0 px-0">
                  <i className="fas fa-handshake text-warning me-2"></i>
                  Negocio actualizado: Proyecto ABC
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card-purple p-4">
              <h5 className="mb-3" style={{ color: 'var(--purple-800)' }}>
                <i className="fas fa-tasks me-2"></i>
                Tareas Pendientes
              </h5>
              <div className="list-group list-group-flush">
                <div className="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                  <span>Seguimiento cliente A</span>
                  <span className="badge bg-warning">Alta</span>
                </div>
                <div className="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                  <span>Revisar propuesta B</span>
                  <span className="badge bg-info">Media</span>
                </div>
                <div className="list-group-item border-0 px-0 d-flex justify-content-between align-items-center">
                  <span>Llamar proveedor C</span>
                  <span className="badge bg-secondary">Baja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    reportError(error);
  }
}
