function Tickets() {
  try {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchColumn, setSearchColumn] = React.useState('');
    
    const columns = [
      { key: 'id', label: 'Ticket ID', icon: 'fas fa-ticket-alt' },
      { key: 'titulo', label: 'Título', icon: 'fas fa-heading' },
      { key: 'cliente', label: 'Cliente', icon: 'fas fa-user' },
      { key: 'prioridad', label: 'Prioridad', icon: 'fas fa-exclamation-triangle' },
      { key: 'estado', label: 'Estado', icon: 'fas fa-info-circle' },
      { key: 'asignado', label: 'Asignado a', icon: 'fas fa-user-tie' },
      { key: 'fechaCreacion', label: 'Fecha Creación', icon: 'fas fa-calendar-plus' }
    ];

    const sampleData = [
      { 
        id: 'TK-001', 
        titulo: 'Error en sistema de facturación', 
        cliente: 'Tech Solutions', 
        prioridad: 'Alta', 
        estado: 'Abierto', 
        asignado: 'Juan Pérez', 
        fechaCreacion: '2024-01-15' 
      },
      { 
        id: 'TK-002', 
        titulo: 'Solicitud de nueva funcionalidad', 
        cliente: 'Innovate Corp', 
        prioridad: 'Media', 
        estado: 'En Progreso', 
        asignado: 'María García', 
        fechaCreacion: '2024-01-14' 
      },
      { 
        id: 'TK-003', 
        titulo: 'Problema de conectividad', 
        cliente: 'StartUp Inc', 
        prioridad: 'Baja', 
        estado: 'Resuelto', 
        asignado: 'Carlos López', 
        fechaCreacion: '2024-01-13' 
      }
    ];

    const handleSearch = (term, column) => {
      setSearchTerm(term);
      setSearchColumn(column);
    };

    return (
      <div data-name="tickets" data-file="pages/Tickets.js">
        <h2 className="mb-4" style={{ color: 'var(--purple-800)' }}>
          <i className="fas fa-ticket-alt me-2"></i>
          Gestión de Tickets
        </h2>
        
        <SearchBar 
          columns={columns}
          onSearch={handleSearch}
          searchTerm={searchTerm}
          searchColumn={searchColumn}
        />
        
        <DataTable 
          data={sampleData}
          columns={columns}
          onEdit={(item) => console.log('Edit:', item)}
          onDelete={(item) => console.log('Delete:', item)}
        />
      </div>
    );
  } catch (error) {
    console.error('Tickets component error:', error);
    reportError(error);
  }
}
