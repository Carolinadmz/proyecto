function Sidebar({ activeModule, onModuleChange }) {
  try {
    const modules = [
      { id: 'dashboard', name: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'compras', name: 'Compras', icon: 'shopping-cart' },
      { id: 'contactos', name: 'Contactos', icon: 'users' },
      { id: 'negocios', name: 'Negocios', icon: 'briefcase' },
      { id: 'tickets', name: 'Tickets', icon: 'ticket' }
    ];

    return (
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="icon-zap text-white text-xl"></div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">CRM Pro</h2>
          </div>

          <nav className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => onModuleChange(module.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeModule === module.id
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`icon-${module.icon} text-lg`}></div>
                <span className="font-medium">{module.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}