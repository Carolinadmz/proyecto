import { tabs } from './components/tabs.js';

function Contactos() {
  try {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchColumn, setSearchColumn] = React.useState('');
    
    const columns = [
      { key: 'id', label: 'ID', icon: 'fas fa-hashtag' },
      { key: 'nombre', label: 'Nombre', icon: 'fas fa-user' },
      { key: 'empresa', label: 'Empresa', icon: 'fas fa-building' },
      { key: 'email', label: 'Email', icon: 'fas fa-envelope' },
      { key: 'telefono', label: 'Teléfono', icon: 'fas fa-phone' },
      { key: 'cargo', label: 'Cargo', icon: 'fas fa-briefcase' },
      { key: 'estado', label: 'Estado', icon: 'fas fa-circle' }
    ];

    const sampleData = [
      { id: '001', nombre: 'Juan Pérez', empresa: 'Tech Solutions', email: 'juan@tech.com', telefono: '555-0123', cargo: 'Gerente', estado: 'Activo' },
      { id: '002', nombre: 'María García', empresa: 'Innovate Corp', email: 'maria@innovate.com', telefono: '555-0124', cargo: 'Directora', estado: 'Activo' },
      { id: '003', nombre: 'Carlos López', empresa: 'StartUp Inc', email: 'carlos@startup.com', telefono: '555-0125', cargo: 'CEO', estado: 'Inactivo' }
    ];

    const handleSearch = (term, column) => {
      setSearchTerm(term);
      setSearchColumn(column);
    };

    return (
      

      
      <div data-name="contactos" data-file="pages/Contactos.js">
        <h2 className="mb-4" style={{ color: 'var(--purple-800)' }}>
          <i className="fas fa-address-book me-2"></i>
          Gestión de Contactos
        </h2>
        <tabs />


    
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
    console.error('Contactos component error:', error);
    reportError(error);
  }
}
export default Contactos;