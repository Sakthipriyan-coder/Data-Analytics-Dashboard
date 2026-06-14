import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating API call to backend
    setData({
      totalRevenue: "$1,250,000",
      activeUsers: "8,430",
      monthlyGrowth: "+15%"
    });
  }, []);

  if (!data) return <div>Loading Dashboard...</div>;

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '20px', marginBottom: '40px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Data Analytics Dashboard</h1>
        <p style={{ color: '#94a3b8', marginTop: '10px' }}>Real-time Business Intelligence</p>
      </header>
      
      <main style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', flex: '1', minWidth: '250px' }}>
          <h3 style={{ margin: 0, color: '#94a3b8' }}>Total Revenue</h3>
          <p style={{ fontSize: '2.5rem', margin: '10px 0', color: '#10b981', fontWeight: 'bold' }}>{data.totalRevenue}</p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', flex: '1', minWidth: '250px' }}>
          <h3 style={{ margin: 0, color: '#94a3b8' }}>Active Users</h3>
          <p style={{ fontSize: '2.5rem', margin: '10px 0', color: '#3b82f6', fontWeight: 'bold' }}>{data.activeUsers}</p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', flex: '1', minWidth: '250px' }}>
          <h3 style={{ margin: 0, color: '#94a3b8' }}>Monthly Growth</h3>
          <p style={{ fontSize: '2.5rem', margin: '10px 0', color: '#8b5cf6', fontWeight: 'bold' }}>{data.monthlyGrowth}</p>
        </div>
      </main>
    </div>
  );
}

export default App;

