function Contactos() {
  try {
    const [contactos, setContactos] = React.useState([
      { id: 1, nombre: 'Ana Martínez', email: 'ana@email.com', telefono: '+34 666 123 456', telefono2: '+34 777 123 456', empresa: 'Tech Corp', estado: 'Activo' },
      { id: 2, nombre: 'Pedro Sánchez', email: 'pedro@email.com', telefono: '+34 666 789 012', telefono2: '', empresa: 'Innovate Ltd', estado: 'Inactivo' },
      { id: 3, nombre: 'María González', email: 'maria@gmail.com', telefono: '+34 666 345 678', telefono2: '+34 777 345 678', empresa: 'StartUp Pro', estado: 'Activo' },
      { id: 4, nombre: 'Carlos Ruiz', email: 'carlos@hotmail.com', telefono: '+34 666 901 234', telefono2: '', empresa: 'Digital Agency', estado: 'Activo' },
      { id: 5, nombre: 'Laura Fernández', email: 'laura@yahoo.com', telefono: '+34 666 567 890', telefono2: '+34 777 567 890', empresa: 'Marketing Plus', estado: 'Inactivo' }
    ]);
    const [searchColumn, setSearchColumn] = React.useState('nombre');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState(null);

    const handleAdd = () => setShowModal(true);

    const handleAddItem = (newItem) => {
      setContactos([...contactos, newItem]);
    };

    const handleStatusChange = (id, newStatus) => {
      setContactos(contactos.map(c => c.id === id ? { ...c, estado: newStatus } : c));
    };

    const handleEdit = (id) => {
      const contacto = contactos.find(c => c.id === id);
      setEditingItem({ ...contacto }); // copia editable
      setShowEditModal(true);
    };

    const handleSaveEdit = (updatedItem) => {
      setContactos(contactos.map(c => c.id === updatedItem.id ? updatedItem : c));
      setShowEditModal(false);
    };

    const handleDelete = (id) => {
      if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
        setContactos(contactos.filter(c => c.id !== id));
      }
    };

    const filteredContactos = contactos.filter(contacto =>
      contacto[searchColumn].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="p-6" data-name="contactos" data-file="components/modules/Contactos.js">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Contactos</h2>
              <button onClick={handleAdd} className="btn-primary flex items-center space-x-2">
                <div className="icon-user-plus text-sm"></div>
                <span>Agregar Contacto</span>
              </button>
            </div>

            <div className="flex space-x-4">
              <select 
                value={searchColumn}
                onChange={(e) => setSearchColumn(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="nombre">Nombre</option>
                <option value="email">Email</option>
                <option value="empresa">Empresa</option>
                <option value="estado">Estado</option>
              </select>
              <input
                type="text"
                placeholder={`Buscar por ${searchColumn}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teléfono 1</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teléfono 2</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Empresa</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Editar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Eliminar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredContactos.map((contacto) => (
                  <tr key={contacto.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{contacto.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{contacto.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{contacto.telefono}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{contacto.telefono2 || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{contacto.empresa}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={contacto.estado}
                        onChange={(e) => handleStatusChange(contacto.id, e.target.value)}
                        className={`px-2 py-1 text-xs rounded-full border-0 ${
                          contacto.estado === 'Activo' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => handleEdit(contacto.id)} 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                        title="Editar contacto"
                      >
                        Editar
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => handleDelete(contacto.id)} 
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                        title="Eliminar contacto"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <AddModal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            type="contactos" 
            onAdd={handleAddItem} 
          />
        )}

        {showEditModal && editingItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
              <button 
                onClick={() => setShowEditModal(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-semibold"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Editar contacto</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" value={editingItem.nombre} onChange={(e) => setEditingItem({...editingItem, nombre: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" value={editingItem.email} onChange={(e) => setEditingItem({...editingItem, email: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono 1</label>
                  <input type="text" value={editingItem.telefono} onChange={(e) => setEditingItem({...editingItem, telefono: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono 2</label>
                  <input type="text" value={editingItem.telefono2} onChange={(e) => setEditingItem({...editingItem, telefono2: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Empresa</label>
                  <input type="text" value={editingItem.empresa} onChange={(e) => setEditingItem({...editingItem, empresa: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estado</label>
                  <select value={editingItem.estado} onChange={(e) => setEditingItem({...editingItem, estado: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button onClick={() => handleSaveEdit(editingItem)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                  Guardar
                </button>
                <button onClick={() => setShowEditModal(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded-lg">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Contactos component error:', error);
    return null;
  }
}
