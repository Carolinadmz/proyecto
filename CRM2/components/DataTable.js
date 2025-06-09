function DataTable({ data, columns, onEdit, onDelete }) {
  try {
    return (
      <div className="table-purple p-4" data-name="data-table" data-file="components/DataTable.js">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead style={{ background: 'var(--purple-100)' }}>
              <tr>
                {columns.map(col => (
                  <th key={col.key} className="py-3" style={{ color: 'var(--purple-800)' }}>
                    <i className={`${col.icon} me-2`}></i>
                    {col.label}
                  </th>
                ))}
                <th className="py-3" style={{ color: 'var(--purple-800)' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="align-middle">
                  {columns.map(col => (
                    <td key={col.key} className="py-3">
                      {col.render ? col.render(item[col.key], item) : item[col.key]}
                    </td>
                  ))}
                  <td className="py-3">
                    <button 
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => onEdit && onEdit(item)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onDelete && onDelete(item)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {data.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-inbox text-muted" style={{ fontSize: '3rem' }}></i>
            <p className="text-muted mt-3">No hay datos disponibles</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('DataTable component error:', error);
    reportError(error);
  }
}
