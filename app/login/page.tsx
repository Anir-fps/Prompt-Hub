"use client";

import { createBrowserClient } from '@supabase/ssr';
import Image from 'next/image';

export default function LoginPage() {
  // Initialize the browser client
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = async (provider: 'google' | 'facebook') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        // Ensure this matches your Supabase Dashboard redirect settings
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
      <div className="w-full max-w-md bg-[#0D1117] border border-[#30363D] rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white text-center mb-8 font-mono tracking-tight">
          JOIN <span className="text-[#00D4FF]">PROMPTHUB</span>
        </h1>
        
        <div className="space-y-4">
          {/* Google Login */}
          <button 
            onClick={() => handleLogin('google')}
            className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.98]"
          >
            <img 
              src="https://www.svgrepo.com/show/355037/google.svg" 
              className="w-5 h-5" 
              alt="Google Icon" 
            />
            Continue with Google
          </button>

          {/* Facebook Login */}
          <button 
            onClick={() => handleLogin('facebook')}
            className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white font-bold py-3 rounded-xl hover:bg-[#166fe5] transition-all active:scale-[0.98]"
          >
            <img 
              src="https://www.svgrepo.com/show/475647/facebook-color.svg" 
              className="w-5 h-5" 
              alt="Facebook Icon" 
            />
            Continue with Facebook
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          By continuing, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}