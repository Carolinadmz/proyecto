function Header({ user, onLogout }) {
  try {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [showCalendar, setShowCalendar] = React.useState(false);

    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-container')) {
          setShowDropdown(false);
          setShowCalendar(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4" data-name="header" data-file="components/Header.js">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">CRM Dashboard</h1>
          </div>

          <div className="relative dropdown-container">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="icon-user text-white text-sm"></div>
              </div>
              <span className="text-gray-700 font-medium">{user.email}</span>
              <div className="icon-chevron-down text-gray-400 text-sm"></div>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-3 border-b border-gray-100">
                  <p className="text-sm text-gray-500">Conectad@ como</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
                
                <div className="py-2">
                  <button 
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
                  >
                    <div className="icon-calendar text-gray-400"></div>
                    <span className="text-gray-700">Calendario</span>
                  </button>
                  <button 
                    onClick={onLogout}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 text-red-600"
                  >
                    <div className="icon-log-out text-red-500"></div>
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            )}
            
            {showCalendar && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Calendario</h3>
                    <button 
                      onClick={() => setShowCalendar(false)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded"
                    >
                      <div className="icon-x text-sm"></div>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="font-medium text-gray-500">Dom</div>
                    <div className="font-medium text-gray-500">Lun</div>
                    <div className="font-medium text-gray-500">Mar</div>
                    <div className="font-medium text-gray-500">Mié</div>
                    <div className="font-medium text-gray-500">Jue</div>
                    <div className="font-medium text-gray-500">Vie</div>
                    <div className="font-medium text-gray-500">Sáb</div>
                    {Array.from({length: 35}, (_, i) => {
                      const day = i - 5;
                      const isToday = day === 15;
                      return (
                        <div 
                          key={i} 
                          className={`p-2 hover:bg-blue-50 cursor-pointer rounded ${
                            isToday ? 'bg-blue-500 text-white' : day > 0 && day <= 31 ? 'text-gray-900' : 'text-gray-300'
                          }`}
                        >
                          {day > 0 && day <= 31 ? day : ''}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}