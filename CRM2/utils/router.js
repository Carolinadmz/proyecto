const Router = {
  currentRoute: 'dashboard',
  listeners: [],

  navigate(route) {
    try {
      this.currentRoute = route;
      this.notifyListeners();
    } catch (error) {
      console.error('Router navigate error:', error);
    }
  },

  getCurrentRoute() {
    return this.currentRoute;
  },

  addListener(callback) {
    try {
      this.listeners.push(callback);
    } catch (error) {
      console.error('Router addListener error:', error);
    }
  },

  removeListener(callback) {
    try {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    } catch (error) {
      console.error('Router removeListener error:', error);
    }
  },

  notifyListeners() {
    try {
      this.listeners.forEach(callback => {
        if (typeof callback === 'function') {
          callback(this.currentRoute);
        }
      });
    } catch (error) {
      console.error('Router notifyListeners error:', error);
    }
  }
};

function useRouter() {
  try {
    const [currentRoute, setCurrentRoute] = React.useState(Router.getCurrentRoute());

    React.useEffect(() => {
      const handleRouteChange = (route) => {
        setCurrentRoute(route);
      };

      Router.addListener(handleRouteChange);

      return () => {
        Router.removeListener(handleRouteChange);
      };
    }, []);

    return {
      currentRoute,
      navigate: Router.navigate.bind(Router)
    };
  } catch (error) {
    console.error('useRouter hook error:', error);
    reportError(error);
  }
}
