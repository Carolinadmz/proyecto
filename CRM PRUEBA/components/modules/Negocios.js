function Negocios() {
  try {
    const [negocios, setNegocios] = React.useState([
      { id: 1, nombre: 'Proyecto Alpha', cliente: 'Tech Corp', valor: '$50,000', estado: 'En progreso', fecha: '2024-01-15' },
      { id: 2, nombre: 'Consultoría Beta', cliente: 'Innovate Ltd', valor: '$25,000', estado: 'Cerrado', fecha: '2024-01-10' },
      { id: 3, nombre: 'Sistema CRM', cliente: 'StartUp Pro', valor: '$75,000', estado: 'Propuesta', fecha: '2024-01-12' },
      { id: 4, nombre: 'App Móvil', cliente: 'Digital Agency', valor: '$45,000', estado: 'En progreso', fecha: '2024-01-08' },
      { id: 5, nombre: 'Sitio Web', cliente: 'Marketing Plus', valor: '$15,000', estado: 'Cerrado', fecha: '2024-01-05' }
    ]);
    const [searchColumn, setSearchColumn] = React.useState('nombre');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState(null);

    const handleAdd = () => setShowModal(true);
    const handleAddItem = (newItem) => setNegocios([...negocios, newItem]);

    const handleEdit = (id) => {
      const negocio = negocios.find(n => n.id === id);
      setEditingItem(negocio);
      setShowEditModal(true);
    };

    const handleSaveEdit = (updatedItem) => {
      setNegocios(negocios.map(n => (n.id === updatedItem.id ? updatedItem : n)));
    };

    const handleDelete = (id) => {
      if (confirm('¿Estás seguro de que deseas eliminar este negocio?')) {
        setNegocios(negocios.filter(n => n.id !== id));
      }
    };

    const handleStatusChange = (id, newStatus) => {
      setNegocios(negocios.map(n => n.id === id ? { ...n, estado: newStatus } : n));
    };

    const filteredNegocios = negocios.filter(n =>
      n[searchColumn].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Negocios</h2>
              <button onClick={handleAdd} className="btn-primary flex items-center space-x-2">
                <div className="icon-plus text-sm"></div><span>Agregar Negocio</span>
              </button>
            </div>
            <div className="flex space-x-4">
              <select value={searchColumn} onChange={(e) => setSearchColumn(e.target.value)} className="border px-3 py-2 rounded-lg">
                <option value="nombre">Nombre</option>
                <option value="cliente">Cliente</option>
                <option value="estado">Estado</option>
              </select>
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={`Buscar por ${searchColumn}...`} className="flex-1 border px-3 py-2 rounded-lg" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                  <th className="px-6 py-3">Cliente</th>
                  <th className="px-6 py-3">Valor</th>
                  <th className="px-6 py-3">Estado</th>
                  <th className="px-6 py-3">Fecha</th>
                  <th className="px-6 py-3">Editar</th>
                  <th className="px-6 py-3">Eliminar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {filteredNegocios.map((n) => (
                  <tr key={n.id}>
                    <td className="px-6 py-4">{n.nombre}</td>
                    <td className="px-6 py-4">{n.cliente}</td>
                    <td className="px-6 py-4">{n.valor}</td>
                    <td className="px-6 py-4">
                      <select value={n.estado} onChange={(e) => handleStatusChange(n.id, e.target.value)} className="text-xs rounded px-2 py-1">
                        <option value="En progreso">En progreso</option>
                        <option value="Cerrado">Cerrado</option>
                        <option value="Propuesta">Propuesta</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">{n.fecha}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(n.id)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Editar</button>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(n.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <AddModal isOpen={showModal} onClose={() => setShowModal(false)} type="negocios" onAdd={handleAddItem} />
        )}

        {showEditModal && (
          <EditModal
            isOpen={showEditModal}
            onClose={() => setShowEditModal(false)}
            type="negocios"
            item={editingItem}
            onSave={handleSaveEdit}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('Negocios component error:', error);
    return null;
  }
}
