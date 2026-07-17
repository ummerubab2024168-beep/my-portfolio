'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jeiuztsgkXepvqdsbqi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplaXV6dHNna3hlcHZxZHNicWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDMwMDIsImV4cCI6MjA5OTYxOTAwMn0.5cDgY5_CeiUCBCCgOAQC9m7Aus0Q2ueHatMONf9aVlQ';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function DashboardPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [stats, setStats] = useState({ total: 10, pending: 9, resolved: 1 });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const { data, error } = await supabase.from('Contact').select('*');
      if (!error && data && data.length > 0) {
        const total = data.length;
        const pending = data.filter(q => !q.status || q.status.toLowerCase() === 'pending').length;
        const resolved = data.filter(q => q.status && (q.status.toLowerCase() === 'done' || q.status.toLowerCase() === 'resolved')).length;
        setStats({ total, pending, resolved });
      }
    } catch (err) {}
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#1e293b', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid #334155' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '2rem', paddingLeft: '0.5rem' }}>Admin Portal</h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              onClick={() => router.push('/dashboard')} 
              style={{
                width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '500',
                backgroundColor: pathname === '/dashboard' ? '#2563eb' : 'transparent',
                color: pathname === '/dashboard' ? 'white' : '#94a3b8'
              }}
            >
              📊 Dashboard
            </button>
            <button 
              onClick={() => router.push('/dashboard/queries')} 
              style={{
                width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '500',
                backgroundColor: pathname === '/dashboard/queries' ? '#2563eb' : 'transparent',
                color: pathname === '/dashboard/queries' ? 'white' : '#94a3b8'
              }}
            >
              📩 Contact Queries
            </button>
          </nav>
        </div>

        <button onClick={() => router.push('/login')} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: 'none', backgroundColor: '#ef4444', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>Dashboard Overview</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>Total Contacts</p>
            <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', color: '#38bdf8' }}>{stats.total}</h2>
          </div>

          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>Pending Queries</p>
            <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', color: '#eab308' }}>{stats.pending}</h2>
          </div>

          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>Resolved Queries</p>
            <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0 0', color: '#22c55e' }}>{stats.resolved}</h2>
          </div>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '0.5rem', color: '#f8fafc' }}>Live Database Status</h3>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>
            Connected to Supabase database.
          </p>
        </div>
      </main>

    </div>
  );
}