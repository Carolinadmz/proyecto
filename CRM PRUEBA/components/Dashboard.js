function Dashboard() {
  try {
    const [charts, setCharts] = React.useState({});
    const [dashboardData, setDashboardData] = React.useState({
      ventasTotal: '$125,430',
      ventasDiarias: '$4,230',
      ventasMensuales: '$45,230',
      ventasPorProducto: '$89,120',
      totalClientes: '2,543',
      ticketsGenerados: '127'
    });

    React.useEffect(() => {
      const ChartJS = window.Chart;
      
      // Gráfica de ventas
      const salesCtx = document.getElementById('salesChart');
      if (salesCtx && !charts.sales) {
        const salesChart = new ChartJS(salesCtx, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
              label: 'Ventas',
              data: [12, 19, 15, 25, 22, 30],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              tension: 0.4
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false
          }
        });
        setCharts(prev => ({ ...prev, sales: salesChart }));
      }

      // Gráfica de pastel
      const pieCtx = document.getElementById('pieChart');
      if (pieCtx && !charts.pie) {
        const pieChart = new ChartJS(pieCtx, {
          type: 'doughnut',
          data: {
            labels: ['Ventas', 'Marketing', 'Soporte'],
            datasets: [{
              data: [45, 30, 25],
              backgroundColor: ['#3B82F6', '#10B981', '#F59E0B']
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false
          }
        });
        setCharts(prev => ({ ...prev, pie: pieChart }));
      }
    }, []);

    const stats = [
      { title: 'Ventas Totales', value: dashboardData.ventasTotal, icon: 'dollar-sign', color: 'green' },
      { title: 'Ventas Diarias', value: dashboardData.ventasDiarias, icon: 'trending-up', color: 'blue' },
      { title: 'Ventas Mensuales', value: dashboardData.ventasMensuales, icon: 'calendar', color: 'purple' },
      { title: 'Ventas por Producto', value: dashboardData.ventasPorProducto, icon: 'package', color: 'yellow' },
      { title: 'Total Clientes', value: dashboardData.totalClientes, icon: 'users', color: 'indigo' },
      { title: 'Tickets Generados', value: dashboardData.ticketsGenerados, icon: 'ticket', color: 'red' }
    ];

    const topProducts = [
      { name: 'Laptop Dell', ventas: 156 },
      { name: 'Monitor 4K', ventas: 89 },
      { name: 'Mouse Inalámbrico', ventas: 67 }
    ];

    const transactions = [
      { id: 1, client: 'Juan Pérez', amount: '$1,250', status: 'Completado', date: '2024-01-15' },
      { id: 2, client: 'María García', amount: '$890', status: 'Pendiente', date: '2024-01-14' },
      { id: 3, client: 'Carlos López', amount: '$2,100', status: 'Completado', date: '2024-01-13' },
      { id: 4, client: 'Ana Rodríguez', amount: '$3,450', status: 'Completado', date: '2024-01-12' },
      { id: 5, client: 'Luis Torres', amount: '$675', status: 'Pendiente', date: '2024-01-11' }
    ];

    const recentActivities = [
      { id: 1, action: 'Nueva venta registrada', user: 'Juan Pérez', time: 'Hace 2 horas' },
      { id: 2, action: 'Ticket resuelto', user: 'María García', time: 'Hace 4 horas' },
      { id: 3, action: 'Contacto agregado', user: 'Carlos López', time: 'Hace 6 horas' },
      { id: 4, action: 'Negocio cerrado', user: 'Ana Rodríguez', time: 'Hace 1 día' }
    ];

    return (
      <div className="p-6 space-y-6" data-name="dashboard" data-file="components/Dashboard.js">
        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                  <div className={`icon-${stat.icon} text-xl text-${stat.color}-600`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Productos más vendidos */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Productos Más Vendidos</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium">{product.name}</span>
                </div>
                <span className="text-gray-600">{product.ventas} ventas</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfica de ventas mensuales */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventas Mensuales</h3>
          <div className="h-64">
            <canvas id="salesChart"></canvas>
          </div>
        </div>

        {/* Tablas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Transacciones Recientes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.slice(0, 4).map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">{transaction.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">{transaction.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          transaction.status === 'Completado' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Actividad Reciente</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    return null;
  }
}