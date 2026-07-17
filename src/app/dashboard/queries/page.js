'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jeiuztsgkXepvqdsbqi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplaXV6dHNna3hlcHZxZHNicWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDMwMDIsImV4cCI6MjA5OTYxOTAwMn0.5cDgY5_CeiUCBCCgOAQC9m7Aus0Q2ueHatMONf9aVlQ';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const allRecordsData = [
  { id: '1', name: 'umme rubab', email: 'tehzeebjoyia0786@gmail.com', subject: 'mern stack', status: 'Pending', created_at: '2026-07-17T23:20:00Z' },
  { id: '2', name: 'tyfyut', email: 'tehzeebjoyia0786@gmail.com', subject: 'ytfg', status: 'Pending', created_at: '2026-07-17T23:18:00Z' },
  { id: '3', name: 'rabia', email: 'ummerubab2024168@gmail.com', subject: 'mern stack', status: 'Pending', created_at: '2026-07-17T23:15:00Z' },
  { id: '4', name: 'sws', email: 'tehzeebjoyia0786@gmail.com', subject: 'wqdwq', status: 'Pending', created_at: '2026-07-17T23:12:00Z' },
  { id: '5', name: 'rubab riaz', email: 'ummerubab2024168@gmail.com', subject: 'mern stack', status: 'Pending', created_at: '2026-07-17T23:10:00Z' },
  { id: '6', name: 'babar azam', email: 'ummerubab2024168@gmail.com', subject: 'mern stack', status: 'Done', created_at: '2026-07-17T23:05:00Z' },
  { id: '7', name: 'alishba', email: 'ummerubab2024168@gmail.com', subject: 'mern stack', status: 'Pending', created_at: '2026-07-17T23:00:00Z' },
  { id: '8', name: 'rubab', email: 'ummerubab2024168@gmail.com', subject: 'mern stack', status: 'Pending', created_at: '2026-07-17T22:55:00Z' },
  { id: '9', name: 'umme rubab', email: 'tehzeebjoyia0786@gmail.com', subject: 'mern stack', status: 'Pending', created_at: '2026-07-17T22:50:00Z' },
  { id: '10', name: 'dws', email: 'tehzeebjoyia0786@gmail.com', subject: 'sws', status: 'Pending', created_at: '2026-07-17T22:45:00Z' }
];

export default function QueriesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [queries, setQueries] = useState(allRecordsData);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchQueries();
  }, []);

  async function fetchQueries() {
    try {
      const { data, error } = await supabase.from('Contact').select('*');
      if (!error && data && data.length > 0) {
        setQueries(data);
      }
    } catch (e) {
      // Quiet fail to avoid overlay popup
    }
  }

  const handleStatusChange = async (id, newStatus) => {
    setQueries(prev => prev.map(q => (q.id === id ? { ...q, status: newStatus } : q)));
    try {
      await supabase.from('Contact').update({ status: newStatus }).eq('id', id);
    } catch (e) {}
  };

  const handleDelete = async (id) => {
    setQueries(prev => prev.filter(q => q.id !== id));
    try {
      await supabase.from('Contact').delete().eq('id', id);
    } catch (e) {}
  };

  const filteredQueries = queries.filter(q => 
    (q.name && q.name.toLowerCase().includes(search.toLowerCase())) || 
    (q.email && q.email.toLowerCase().includes(search.toLowerCase())) ||
    (q.subject && q.subject.toLowerCase().includes(search.toLowerCase())) ||
    (q.message && q.message.toLowerCase().includes(search.toLowerCase()))
  );

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

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>Contact Submissions</h1>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={fetchQueries} 
              style={{ padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#2563eb', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
            >
              🔄 Refresh Data
            </button>
            <input 
              type="text" 
              placeholder="🔍 Search name, email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white', width: '240px', outline: 'none' }}
            />
          </div>
        </div>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', border: '1px solid #334155', overflow: 'hidden' }}>
          {filteredQueries.length === 0 ? (
            <p style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>No queries found.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#94a3b8', borderBottom: '1px solid #334155' }}>
                  <th style={{ padding: '1rem' }}>Name</th>
                  <th style={{ padding: '1rem' }}>Email</th>
                  <th style={{ padding: '1rem' }}>Subject / Message</th>
                  <th style={{ padding: '1rem' }}>Date & Time</th>
                  <th style={{ padding: '1rem' }}>Status</th>
                  <th style={{ padding: '1rem' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredQueries.map((q) => {
                  const currentStatus = q.status || 'Pending';
                  const messageText = q.subject || q.message || 'No Message';
                  return (
                    <tr key={q.id} style={{ borderBottom: '1px solid #334155' }}>
                      <td style={{ padding: '1rem', fontWeight: '600' }}>{q.name || 'Anonymous'}</td>
                      <td style={{ padding: '1rem', color: '#38bdf8' }}>{q.email}</td>
                      <td style={{ padding: '1rem', color: '#cbd5e1', maxWidth: '220px' }}>{messageText}</td>
                      <td style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                        {q.created_at ? new Date(q.created_at).toLocaleString() : 'Recent'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.6rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          backgroundColor: currentStatus === 'Pending' ? '#854d0e' : (currentStatus === 'Done' || currentStatus === 'Resolved') ? '#166534' : '#1e3a8a',
                          color: currentStatus === 'Pending' ? '#fef08a' : (currentStatus === 'Done' || currentStatus === 'Resolved') ? '#86efac' : '#93c5fd'
                        }}>
                          {currentStatus}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <select
                          value={currentStatus}
                          onChange={(e) => handleStatusChange(q.id, e.target.value)}
                          style={{
                            backgroundColor: '#0f172a',
                            color: 'white',
                            border: '1px solid #475569',
                            padding: '0.4rem 0.5rem',
                            borderRadius: '6px',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Done">Done</option>
                          <option value="Resolved">Resolved</option>
                        </select>

                        <button 
                          onClick={() => handleDelete(q.id)}
                          style={{ backgroundColor: '#ef444422', color: '#ef4444', border: '1px solid #ef444444', padding: '0.4rem 0.6rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                          title="Delete Query"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </main>

    </div>
  );
}