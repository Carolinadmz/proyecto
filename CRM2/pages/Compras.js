function Compras() {
  try {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchColumn, setSearchColumn] = React.useState('');
    
    const columns = [
      { key: 'id', label: 'ID', icon: 'fas fa-hashtag' },
      { key: 'proveedor', label: 'Proveedor', icon: 'fas fa-building' },
      { key: 'producto', label: 'Producto', icon: 'fas fa-box' },
      { key: 'cantidad', label: 'Cantidad', icon: 'fas fa-sort-numeric-up' },
      { key: 'precio', label: 'Precio', icon: 'fas fa-dollar-sign' },
      { key: 'fecha', label: 'Fecha', icon: 'fas fa-calendar' },
      { key: 'estado', label: 'Estado', icon: 'fas fa-info-circle' }
    ];

    const sampleData = [
      { id: '001', proveedor: 'Proveedor A', producto: 'Laptop Dell', cantidad: 5, precio: '$7,500', fecha: '2024-01-15', estado: 'Completado' },
      { id: '002', proveedor: 'Proveedor B', producto: 'Mouse Logitech', cantidad: 20, precio: '$600', fecha: '2024-01-14', estado: 'Pendiente' },
      { id: '003', proveedor: 'Proveedor C', producto: 'Monitor Samsung', cantidad: 3, precio: '$1,200', fecha: '2024-01-13', estado: 'En Proceso' }
    ];

    const handleSearch = (term, column) => {
      setSearchTerm(term);
      setSearchColumn(column);
    };

    return (
      <div data-name="compras" data-file="pages/Compras.js">
        <h2 className="mb-4" style={{ color: 'var(--purple-800)' }}>
          <i className="fas fa-shopping-cart me-2"></i>
          Gestión de Compras
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
    console.error('Compras component error:', error);
    reportError(error);
  }
}
