function App() {
  try {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const { currentRoute, navigate } = useRouter();

    const handleLogin = (credentials) => {
      try {
        setUser(credentials);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Login error:', error);
        alert('Error al iniciar sesión');
      }
    };

    const handleLogout = () => {
      try {
        setUser(null);
        setIsAuthenticated(false);
        navigate('dashboard');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    const renderCurrentPage = () => {
      try {
        switch (currentRoute) {
          case 'compras':
            return React.createElement(Compras);
          case 'contactos':
            return React.createElement(Contactos);
          case 'negocios':
            return React.createElement(Negocios);
          case 'tickets':
            return React.createElement(Tickets);
          default:
            return React.createElement(Dashboard);
        }
      } catch (error) {
        console.error('Render page error:', error);
        reportError(error);
        return React.createElement('div', { className: 'alert alert-danger' }, 'Error al cargar la página');
      }
    };

    if (!isAuthenticated) {
      return React.createElement(Login, { onLogin: handleLogin });
    }

    return React.createElement('div', { className: 'container-fluid' },
      React.createElement('div', { className: 'row' },
        React.createElement(Sidebar, {
          activeModule: currentRoute,
          onModuleChange: navigate
        }),
        React.createElement('div', { className: 'col-md-10' },
          React.createElement(Header, {
            user: user,
            onLogout: handleLogout
          }),
          React.createElement('div', { className: 'px-4' },
            renderCurrentPage()
          )
        )
      )
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
