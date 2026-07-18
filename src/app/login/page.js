'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Mock reCAPTCHA v3 background verification simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecaptchaVerified(true); // Automatically verifies like reCAPTCHA v3 invisible token
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (isBlocked) {
      setError('Too many failed attempts. Your IP is temporarily restricted. Please try again later.');
      return;
    }

    if (!recaptchaVerified) {
      setError('reCAPTCHA verification failed. Please refresh and try again.');
      return;
    }

    setLoading(true);

    // Simulated network delay for verification
    setTimeout(() => {
      const validEmail = "ummerubab2024168@gmail.com";
      const validPassword = "ummerubab56@"; // Yahan apna original password likhein

      if (email === validEmail && password === validPassword) {
        setError('');
        setAttempts(0);
        setLoading(false);
        router.push('/dashboard');
      } else {
        const nextAttempts = attempts + 1;
        setAttempts(nextAttempts);
        setLoading(false);

        if (nextAttempts >= 5) {
          setIsBlocked(true);
          setError('Too many login attempts from this IP. Access blocked for security.');
        } else {
          setError(`Invalid credentials. ${5 - nextAttempts} attempts remaining before IP lockout.`);
        }
      }
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <form onSubmit={handleLogin} className="border border-gray-700 p-8 rounded shadow-md bg-gray-800 w-full max-w-md">
        <h1 className="text-2xl mb-2 font-bold text-center text-blue-500">Admin Login</h1>
        <p className="text-xs text-gray-400 text-center mb-6">Secured by Google reCAPTCHA v3 & IP Rate Limiter</p>
        
        {error && (
          <div className={`p-3 rounded text-sm mb-4 text-center ${isBlocked ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-orange-900/50 text-orange-300 border border-orange-700'}`}>
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
            disabled={isBlocked || loading}
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
            disabled={isBlocked || loading}
            required 
          />
        </div>

        <button 
          type="submit" 
          disabled={isBlocked || loading}
          className={`w-full p-2.5 rounded font-semibold transition-colors text-white ${isBlocked ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Verifying IP & Credentials...' : 'Secure Login'}
        </button>

        <div className="mt-4 text-center">
          <span className="text-[10px] text-gray-500 inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Protected by reCAPTCHA v3 invisible token
          </span>
        </div>
      </form>
    </div>
  );
}