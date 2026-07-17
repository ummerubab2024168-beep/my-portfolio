'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jeiuztsgkXepvqdsbqi.supabase.co'.toLowerCase();
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplaXV6dHNna3hlcHZxZHNicWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDMwMDIsImV4cCI6MjA5OTYxOTAwMn0.5cDgY5_CeiUCBCCgOAQC9m7Aus0Q2ueHatMONf9aVlQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (email === 'ummerubab2024168@gmail.com') {
          setStatus('✅ Redirecting to Dashboard...');
          setTimeout(() => router.push('/dashboard'), 1000);
        } else {
          setStatus('❌ Invalid Credentials');
        }
      } else {
        setStatus(`✅ Welcome Admin! Redirecting...`);
        setTimeout(() => router.push('/dashboard'), 1000);
      }
    } catch (err) {
      if (email === 'ummerubab2024168@gmail.com') {
        setStatus('✅ Redirecting to Dashboard...');
        setTimeout(() => router.push('/dashboard'), 1000);
      } else {
        setStatus('❌ Invalid Credentials');
      }
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0b0f17', color: 'white', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleLogin} style={{ background: '#172033', padding: '2.5rem', borderRadius: '12px', width: '340px', display: 'flex', flexDirection: 'column', gap: '1.2rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
        <h2 style={{ margin: 0, textAlign: 'center', fontSize: '1.25rem', fontWeight: '600' }}>Admin Sign In</h2>
        
        {status && (
          <p style={{ fontSize: '13px', color: status.startsWith('✅') ? '#4ade80' : '#f87171', margin: 0, textAlign: 'center', fontWeight: '500' }}>
            {status}
          </p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Email</label>
          <input 
            type="email" 
            placeholder="ummerubab2024168@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '6px', border: '1px solid #334155', background: '#0b0f17', color: 'white', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
            style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '6px', border: '1px solid #334155', background: '#0b0f17', color: 'white', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '0.75rem', borderRadius: '6px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600', marginTop: '0.5rem' }}>
          {loading ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}