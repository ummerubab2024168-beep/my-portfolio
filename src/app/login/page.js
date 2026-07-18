'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Aapki real aur genuine entries jo Sir bhi check karenge
    const validEmail = "ummerubab2024168@gmail.com";
    const validPassword = "aap_ka_password_yahan_likhein"; // 👈 Apna asal password yahan likhein

    if (email.trim() === validEmail && password === validPassword) {
      // Pehle Next.js push se try karega, agar server load le raha ho toh direct window direct karega
      try {
        router.push('/dashboard');
        // Live server ke liye standard fallback taake freezing bilkul na ho
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
      } catch (err) {
        window.location.href = '/dashboard';
      }
    } else {
      setLoading(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <form onSubmit={handleLogin} className="border border-gray-700 p-8 rounded shadow-md bg-gray-800 w-full max-w-md">
        <h1 className="text-2xl mb-6 font-bold text-center text-blue-500">Admin Login</h1>
        
        {error && (
          <div className="p-3 rounded text-sm mb-4 text-center bg-red-900/50 text-red-300 border border-red-700">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="admin@example.com" 
            className="w-full border border-gray-600 p-2.5 bg-gray-700 text-white rounded focus:outline-none focus:border-blue-500" 
            disabled={loading}
            required 
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-300">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="••••••••" 
            className="w-full border border-gray-600 p-2.5 bg-gray-700 text-white rounded focus:outline-none focus:border-blue-500" 
            disabled={loading}
            required 
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full p-2.5 rounded font-semibold transition-colors text-white ${loading ? 'bg-blue-800 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Authenticating...' : 'Login'}
        </button>
      </form>
    </div>
  );
}