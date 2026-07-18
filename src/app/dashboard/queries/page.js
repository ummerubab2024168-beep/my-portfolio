'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export default function QueriesPage() {
  const router = useRouter();
  const [queries, setQueries] = useState([]);

  async function fetchQueries() {
    const { data, error } = await supabase.from('Contact').select('*');
    if (error) {
      console.error("Fetch Error:", error);
    } else {
      setQueries(data || []);
    }
  }

  useEffect(() => {
    fetchQueries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const { error } = await supabase.from('Contact').update({ status: newStatus }).eq('id', id);
    if (!error) fetchQueries();
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('Contact').delete().eq('id', id);
    if (!error) fetchQueries();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '250px', backgroundColor: '#1e293b', padding: '2rem 1rem' }}>
        <h2 style={{ color: '#38bdf8' }}>Admin Portal</h2>
        <button onClick={() => router.push('/dashboard')} style={{ display: 'block', margin: '1rem 0', background: 'transparent', color: '#94a3b8', border: 'none', cursor: 'pointer' }}>📊 Dashboard</button>
        <button style={{ background: '#2563eb', color: 'white', padding: '0.5rem', width: '100%', border: 'none', borderRadius: '5px' }}>📩 Contact Queries</button>
      </aside>

      <main style={{ flex: 1, padding: '2.5rem' }}>
        <h1>Contact Submissions</h1>
        <button onClick={fetchQueries} style={{ marginBottom: '1rem', padding: '0.5rem', cursor: 'pointer' }}>🔄 Refresh Data</button>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1e293b' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <th style={{ padding: '1rem' }}>Name</th>
              <th style={{ padding: '1rem' }}>Email</th>
              <th style={{ padding: '1rem' }}>Subject</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((q) => (
              <tr key={q.id} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '1rem' }}>{q.name}</td>
                <td style={{ padding: '1rem' }}>{q.email}</td>
                <td style={{ padding: '1rem' }}>{q.subject}</td>
                <td style={{ padding: '1rem' }}>{q.status || 'Pending'}</td>
                <td style={{ padding: '1rem' }}>
                  <select value={q.status || 'Pending'} onChange={(e) => handleStatusChange(q.id, e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Done">Done</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                  <button onClick={() => handleDelete(q.id)} style={{ marginLeft: '10px' }}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}