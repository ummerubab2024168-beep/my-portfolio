'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Yahan apni sahi details likhein jo aap browser mein use karti hain
    const validEmail = "ummerubab2024168@gmail.com";
    const validPassword = "ummerubab56@"; 

    if (email === validEmail && password === validPassword) {
      setError('');
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="border border-gray-700 p-8 rounded shadow-md bg-gray-800 w-80">
        <h1 className="text-xl mb-4 font-bold text-center">Admin Login</h1>
        
        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
        
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="border border-gray-600 p-2 mb-2 block w-full text-black rounded" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="border border-gray-600 p-2 mb-4 block w-full text-black rounded" 
          required 
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full font-semibold transition-colors">
          Login
        </button>
      </form>
    </div>
  );
}