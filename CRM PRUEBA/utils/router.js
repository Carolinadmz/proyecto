function useRouter() {
  try {
    const [currentRoute, setCurrentRoute] = React.useState('dashboard');
    
    const navigate = (route) => {
      setCurrentRoute(route);
    };

    const renderComponent = () => {
      switch (currentRoute) {
        case 'dashboard':
          return React.createElement(Dashboard);
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
    };

    return { currentRoute, navigate, renderComponent };
  } catch (error) {
    console.error('Router error:', error);
    return { currentRoute: 'dashboard', navigate: () => {}, renderComponent: () => null };
  }
}