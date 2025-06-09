# Estructura de Archivos
#---------------------------
    crm-application/
    ├── index.html # Página principal
    ├── styles.css # Estilos personalizados (tema púrpura)
    ├── app.js # Componente principal y enrutamiento
    ├── components/
    │ ├── Login.js # Componente de autenticación
    │ ├── Sidebar.js # Navegación lateral
    │ ├── Header.js # Encabezado con info del usuario
    │ ├── SearchBar.js # Barra de búsqueda por columnas
    │ └── DataTable.js # Tabla reutilizable
    ├── pages/
    │ ├── Dashboard.js # Página principal con estadísticas
    │ ├── Contacts.js # Gestión de contactos
    │ ├── Purchases.js # Gestión de compras
    │ ├── Business.js # Gestión de negocios
    │ └── Tickets.js # Gestión de tickets
    └── utils/
    ├── auth.js # Utilidades de autenticación
    └── data.js # Gestión de datos mock


### Explicación del CODEVIZ

 # Usuario (External Actor)
Es el usuario final que interactúa con la aplicación desde su navegador.

Su rol principal es iniciar acciones dentro de la interfaz de usuario.

# Application Shell (JavaScript / React)
Es el contenedor principal de la aplicación React.

Incluye elementos estructurales comunes como el encabezado, pie de página o navegación lateral.

Inicializa y utiliza el Navigation Router para gestionar la navegación entre páginas.

# Navigation Router (JavaScript / React Router)
Sistema de enrutamiento que permite cambiar de vista sin recargar la página (SPA).

Implementado con React Router.

Su función es:

Seleccionar la página correspondiente según la ruta.

Renderizar dinámicamente la página activa.

# Application Pages (JavaScript / React)
Son las diferentes páginas de la aplicación (por ejemplo: Panel de control, Clientes, Reportes).

Son seleccionadas por el Navigation Router.

Cada página está compuesta por varios componentes de interfaz.

# UI Components (JavaScript / React)
Son componentes reutilizables como botones, formularios, tablas, tarjetas, etc.

Se utilizan dentro de las páginas para construir la interfaz de usuario de forma modular.

# Flujo General de Funcionamiento
El usuario interactúa con la aplicación web.

El Application Shell carga y configura la estructura base.

Se inicializa el router, que determina la página que debe mostrarse.

El Navigation Router selecciona y renderiza la página activa.

La página activa utiliza componentes de UI para mostrar contenido interactivo.

# Ventajas de esta Arquitectura
Modularidad y reutilización de componentes.

Navegación fluida sin recarga de página.

Separación clara de responsabilidades (Shell, Router, Pages, Components).

Escalabilidad para agregar nuevas vistas y funcionalidades.