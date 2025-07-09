function EditModal({ isOpen, onClose, type, item, onSave }) {
  try {
    const [formData, setFormData] = React.useState(item || {});

    React.useEffect(() => {
      setFormData(item || {});
    }, [item]);

    const getFields = () => {
      switch (type) {
        case 'compras':
          return [
            { name: 'proveedor', label: 'Proveedor', type: 'text' },
            { name: 'producto', label: 'Producto', type: 'text' },
            { name: 'cantidad', label: 'Cantidad', type: 'number' },
            { name: 'precio', label: 'Precio', type: 'text' }
          ];
        case 'contactos':
          return [
            { name: 'nombre', label: 'Nombre', type: 'text' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'telefono', label: 'Teléfono 1', type: 'text' },
            { name: 'telefono2', label: 'Teléfono 2', type: 'text', required: false },
            { name: 'empresa', label: 'Empresa', type: 'text' }
          ];
        case 'negocios':
          return [
            { name: 'nombre', label: 'Nombre', type: 'text' },
            { name: 'cliente', label: 'Cliente', type: 'text' },
            { name: 'valor', label: 'Valor', type: 'text' }
          ];
        case 'tickets':
          return [
            { name: 'titulo', label: 'Título', type: 'text' },
            { name: 'cliente', label: 'Cliente', type: 'text' },
            { name: 'prioridad', label: 'Prioridad', type: 'select', options: ['Alta', 'Media', 'Baja'] }
          ];
        default:
          return [];
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
      onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96 max-w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Editar {type}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <div className="icon-x"></div>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {getFields().map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required={field.required !== false}
                  >
                    <option value="">Seleccionar...</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required={field.required !== false}
                  />
                )}
              </div>
            ))}
            <div className="flex space-x-3 pt-4">
              <button type="submit" className="btn-primary flex-1">Guardar</button>
              <button type="button" onClick={onClose} className="btn-secondary flex-1">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('EditModal component error:', error);
    return null;
  }
}