function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!email.trim()) newErrors.email = 'El correo es obligatorio';
    if (!password.trim()) newErrors.password = 'La contraseña es obligatoria';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin({ email, name: email.split('@')[0] });
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`, // paisaje sin personas
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay azul claro */}
      <div className="absolute inset-0 bg-[rgba(173,216,230,0.4)]"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center rounded-3xl backdrop-blur-xl bg-white bg-opacity-10 shadow-2xl p-8">

          {/* Columna izquierda: Imagen PNG transparente */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/048/303/340/small/wolf-hand-drawn-silhouette-illustration-for-vintage-logo-design-png.png" // imagen sin fondo
              alt="Ilustración transparente"
              className="w-80 h-80 object-contain mb-6"
            />
            <h1 className="text-4xl font-bold text-white mb-2">Bienvenido al CRM</h1>
            <p className="text-lg text-blue-100">Gestiona tu negocio de manera eficiente</p>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="w-full">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <div className="icon-user text-white text-3xl"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Iniciar Sesión</h2>
              <p className="text-blue-100">Accede a tu CRM</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Usuario */}
              <div>
                <label className="block text-white font-medium mb-3">Usuario</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <div className="icon-user text-white text-opacity-70"></div>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white bg-opacity-15 border border-white border-opacity-30 text-white font-bold placeholder-white placeholder-opacity-70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ${
                      errors.email ? 'border-red-400 ring-2 ring-red-400' : ''
                    }`}
                    placeholder="Tu usuario"
                  />
                </div>
                {errors.email && <p className="text-red-200 text-sm mt-2">{errors.email}</p>}
              </div>

              {/* Contraseña */}
              <div>
                <label className="block text-white font-medium mb-3">Contraseña</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <div className="icon-lock text-white text-opacity-70"></div>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white bg-opacity-15 border border-white border-opacity-30 text-white font-bold placeholder-white placeholder-opacity-70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ${
                      errors.password ? 'border-red-400 ring-2 ring-red-400' : ''
                    }`}
                    placeholder="Tu contraseña"
                  />
                </div>
                {errors.password && <p className="text-red-200 text-sm mt-2">{errors.password}</p>}
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="icon-log-in text-white text-lg"></div>
                <span className="text-lg">{loading ? 'Ingresando...' : 'Ingresar'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
