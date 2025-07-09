function Tickets() {
  try {
    const [tickets, setTickets] = React.useState([
      { id: 1, titulo: 'Error en sistema', cliente: 'Ana Martínez', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-15' },
      { id: 2, titulo: 'Consulta técnica', cliente: 'Pedro Sánchez', prioridad: 'Media', estado: 'En proceso', fecha: '2024-01-14' },
      { id: 3, titulo: 'Problema de acceso', cliente: 'María González', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-13' },
      { id: 4, titulo: 'Solicitud de mejora', cliente: 'Carlos Ruiz', prioridad: 'Baja', estado: 'Cerrado', fecha: '2024-01-12' },
      { id: 5, titulo: 'Error de conexión', cliente: 'Laura Fernández', prioridad: 'Media', estado: 'En proceso', fecha: '2024-01-11' }
    ]);

    const [searchColumn, setSearchColumn] = React.useState('titulo');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState(null);

    const handleAdd = () => setShowModal(true);
    const handleAddItem = (item) => setTickets([...tickets, item]);

    const handleEdit = (id) => {
      const ticket = tickets.find(t => t.id === id);
      setEditingItem(ticket);
      setShowEditModal(true);
    };

    const handleSaveEdit = (updatedItem) => {
      setTickets(tickets.map(t => (t.id === updatedItem.id ? updatedItem : t)));
    };

    const handleDelete = (id) => {
      if (confirm('¿Estás seguro de eliminar este ticket?')) {
        setTickets(tickets.filter(t => t.id !== id));
      }
    };

    const handlePriorityChange = (id, value) => {
      setTickets(tickets.map(t => t.id === id ? { ...t, prioridad: value } : t));
    };

    const handleStatusChange = (id, value) => {
      setTickets(tickets.map(t => t.id === id ? { ...t, estado: value } : t));
    };

    const filteredTickets = tickets.filter(t =>
      t[searchColumn].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">Gestión de Tickets</h2>
              <button onClick={handleAdd} className="btn-primary flex items-center space-x-2">
                <div className="icon-plus text-sm"></div><span>Agregar Ticket</span>
              </button>
            </div>
            <div className="flex space-x-4">
              <select value={searchColumn} onChange={(e) => setSearchColumn(e.target.value)} className="border px-3 py-2 rounded-lg">
                <option value="titulo">Título</option>
                <option value="cliente">Cliente</option>
                <option value="prioridad">Prioridad</option>
                <option value="estado">Estado</option>
              </select>
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={`Buscar por ${searchColumn}...`} className="flex-1 border px-3 py-2 rounded-lg" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Título</th>
                  <th className="px-6 py-3">Cliente</th>
                  <th className="px-6 py-3">Prioridad</th>
                  <th className="px-6 py-3">Estado</th>
                  <th className="px-6 py-3">Fecha</th>
                  <th className="px-6 py-3">Editar</th>
                  <th className="px-6 py-3">Eliminar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {filteredTickets.map((t) => (
                  <tr key={t.id}>
                    <td className="px-6 py-4">{t.titulo}</td>
                    <td className="px-6 py-4">{t.cliente}</td>
                    <td className="px-6 py-4">
                      <select value={t.prioridad} onChange={(e) => handlePriorityChange(t.id, e.target.value)} className="text-xs rounded px-2 py-1">
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select value={t.estado} onChange={(e) => handleStatusChange(t.id, e.target.value)} className="text-xs rounded px-2 py-1">
                        <option value="Abierto">Abierto</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Cerrado">Cerrado</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">{t.fecha}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(t.id)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Editar</button>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(t.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <AddModal isOpen={showModal} onClose={() => setShowModal(false)} type="tickets" onAdd={handleAddItem} />
        )}

        {showEditModal && (
          <EditModal
            isOpen={showEditModal}
            onClose={() => setShowEditModal(false)}
            type="tickets"
            item={editingItem}
            onSave={handleSaveEdit}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('Tickets component error:', error);
    return null;
  }
}
