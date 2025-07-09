class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [user, setUser] = React.useState(null);
    const { currentRoute, navigate, renderComponent } = useRouter();

    const handleLogin = (userData) => {
      setUser(userData);
    };

    const handleLogout = () => {
      setUser(null);
    };

    if (!user) {
      return <Login onLogin={handleLogin} />;
    }

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <div className="flex">
          <Sidebar activeModule={currentRoute} onModuleChange={navigate} />
          <div className="flex-1">
            <Header user={user} onLogout={handleLogout} />
            <main className="min-h-screen bg-gray-50">
              {renderComponent()}
            </main>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);