function Login({ onLogin }) {
  try {
    const [credentials, setCredentials] = React.useState({
      username: '',
      password: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (credentials.username && credentials.password) {
        onLogin(credentials);
      }
    };

    return (
      <div className="login-container d-flex align-items-center justify-content-center" data-name="login-container" data-file="components/Login.js">
        <div className="card shadow-lg" style={{ width: '400px', borderRadius: '16px' }}>
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <i className="fas fa-user-circle text-purple-600" style={{ fontSize: '4rem', color: 'var(--purple-600)' }}></i>
              <h2 className="mt-3 mb-0" style={{ color: 'var(--purple-800)' }}>Iniciar Sesión</h2>
              <p className="text-muted">Accede a tu CRM</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <div className="input-group">
                  <span className="input-group-text" style={{ background: 'var(--purple-100)', border: '1px solid var(--purple-300)' }}>
                    <i className="fas fa-user" style={{ color: 'var(--purple-600)' }}></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    style={{ border: '1px solid var(--purple-300)' }}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="form-label">Contraseña</label>
                <div className="input-group">
                  <span className="input-group-text" style={{ background: 'var(--purple-100)', border: '1px solid var(--purple-300)' }}>
                    <i className="fas fa-lock" style={{ color: 'var(--purple-600)' }}></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    style={{ border: '1px solid var(--purple-300)' }}
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="btn btn-purple w-100 py-2">
                <i className="fas fa-sign-in-alt me-2"></i>
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Login component error:', error);
    reportError(error);
  }
}
