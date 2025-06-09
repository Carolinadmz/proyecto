function Negocios() {
  try {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchColumn, setSearchColumn] = React.useState('');
    
    const columns = [
      { key: 'id', label: 'ID', icon: 'fas fa-hashtag' },
      { key: 'nombre', label: 'Nombre del Negocio', icon: 'fas fa-handshake' },
      { key: 'cliente', label: 'Cliente', icon: 'fas fa-user-tie' },
      { key: 'valor', label: 'Valor', icon: 'fas fa-dollar-sign' },
      { key: 'etapa', label: 'Etapa', icon: 'fas fa-tasks' },
      { key: 'probabilidad', label: 'Probabilidad', icon: 'fas fa-percentage' },
      { key: 'fechaCierre', label: 'Fecha Cierre', icon: 'fas fa-calendar-check' }
    ];

    const sampleData = [
      { id: '001', nombre: 'Proyecto Alpha', cliente: 'Tech Solutions', valor: '$50,000', etapa: 'Propuesta', probabilidad: '75%', fechaCierre: '2024-02-15' },
      { id: '002', nombre: 'Implementación Beta', cliente: 'Innovate Corp', valor: '$25,000', etapa: 'Negociación', probabilidad: '60%', fechaCierre: '2024-03-01' },
      { id: '003', nombre: 'Consultoría Gamma', cliente: 'StartUp Inc', valor: '$15,000', etapa: 'Calificación', probabilidad: '40%', fechaCierre: '2024-04-10' }
    ];

    const handleSearch = (term, column) => {
      setSearchTerm(term);
      setSearchColumn(column);
    };

    return (
      <div data-name="negocios" data-file="pages/Negocios.js">
        <h2 className="mb-4" style={{ color: 'var(--purple-800)' }}>
          <i className="fas fa-handshake me-2"></i>
          Gestión de Negocios
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
    console.error('Negocios component error:', error);
    reportError(error);
  }
}
