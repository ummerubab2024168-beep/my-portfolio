'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      alert(error.message);
    } else {
      // Login kamyab hone par dashboard par bhej do
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="border p-8 rounded shadow-md">
        <h1 className="text-xl mb-4 font-bold">Admin Login</h1>
        <input 
            type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} 
            className="border p-2 block mb-4 w-64" required 
        />
        <input 
            type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} 
            className="border p-2 block mb-4 w-64" required 
        />
        <button type="submit" className="bg-blue-600 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}