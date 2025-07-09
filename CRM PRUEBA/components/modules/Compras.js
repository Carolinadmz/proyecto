function Compras() {
  try {
    const [compras, setCompras] = React.useState([
      { id: 1, proveedor: 'Proveedor A', producto: 'Laptop Dell', cantidad: 5, precio: '$2,500', fecha: '2024-01-15', estado: 'Completada' },
      { id: 2, proveedor: 'Proveedor B', producto: 'Mouse Inalámbrico', cantidad: 20, precio: '$400', fecha: '2024-01-14', estado: 'Pendiente' },
      { id: 3, proveedor: 'Tech Solutions', producto: 'Monitor 4K', cantidad: 8, precio: '$3,200', fecha: '2024-01-13', estado: 'Completada' },
      { id: 4, proveedor: 'Office Supplies', producto: 'Sillas Ergonómicas', cantidad: 15, precio: '$1,875', fecha: '2024-01-12', estado: 'En Proceso' },
      { id: 5, proveedor: 'Digital World', producto: 'Tablets Android', cantidad: 12, precio: '$2,400', fecha: '2024-01-11', estado: 'Pendiente' }
    ]);
    const [searchColumn, setSearchColumn] = React.useState('proveedor');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState(null);

    const handleAdd = () => {
      setShowModal(true);
    };

    const handleAddItem = (newItem) => {
      setCompras([...compras, newItem]);
    };

    const handleStatusChange = (id, newStatus) => {
      setCompras(compras.map(c => 
        c.id === id ? { ...c, estado: newStatus } : c
      ));
    };

    const handleEdit = (id) => {
      const compra = compras.find(c => c.id === id);
      setEditingItem(compra);
      setShowEditModal(true);
    };

    const handleSaveEdit = (updatedItem) => {
      setCompras(compras.map(c => 
        c.id === updatedItem.id ? updatedItem : c
      ));
    };

    const calculateTotal = (cantidad, precio) => {
      const numCantidad = parseInt(cantidad) || 0;
      const numPrecio = parseFloat(precio.replace(/[$,]/g, '')) || 0;
      return (numCantidad * numPrecio).toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
      });
    };

    const handleDelete = (id) => {
      if (confirm('¿Estás seguro de que deseas eliminar esta compra?')) {
        setCompras(compras.filter(c => c.id !== id));
      }
    };

    const filteredCompras = compras.filter(compra =>
      compra[searchColumn].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="p-6" data-name="compras" data-file="components/modules/Compras.js">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Compras</h2>
              <button onClick={handleAdd} className="btn-primary flex items-center space-x-2">
                <div className="icon-plus text-sm"></div>
                <span>Agregar Compra</span>
              </button>
            </div>
            
            <div className="flex space-x-4">
              <select 
                value={searchColumn}
                onChange={(e) => setSearchColumn(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="proveedor">Proveedor</option>
                <option value="producto">Producto</option>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Proveedor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cantidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Precio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Editar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Eliminar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCompras.map((compra) => (
                  <tr key={compra.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{compra.proveedor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{compra.producto}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{compra.cantidad}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{compra.precio}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">
                      {calculateTotal(compra.cantidad, compra.precio)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{compra.fecha}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={compra.estado}
                        onChange={(e) => handleStatusChange(compra.id, e.target.value)}
                        className={`px-2 py-1 text-xs rounded-full border-0 ${
                          compra.estado === 'Completada' 
                            ? 'bg-green-100 text-green-800' 
                            : compra.estado === 'Pendiente'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        <option value="Completada">Completada</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En Proceso">En Proceso</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => handleEdit(compra.id)} 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                        title="Editar compra"
                      >
                        Editar
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => handleDelete(compra.id)} 
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                        title="Eliminar compra"
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
            type="compras" 
            onAdd={handleAddItem} 
          />
        )}
        {showEditModal && (
          <EditModal 
            isOpen={showEditModal} 
            onClose={() => setShowEditModal(false)} 
            type="compras" 
            item={editingItem}
            onSave={handleSaveEdit} 
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('Compras component error:', error);
    return null;
  }
}