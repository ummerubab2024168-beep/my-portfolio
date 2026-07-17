import { createClient } from '@supabase/supabase-js';

// Capital 'X' ke saath correct URL
const SUPABASE_URL = 'https://jeiuztsgkXepvqdsbqi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplaXV6dHNna3hlcHZxZHNicWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDMwMDIsImV4cCI6MjA5OTYxOTAwMn0.5cDgY5_CeiUCBCCgOAQC9m7Aus0Q2ueHatMONf9aVlQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seedAdmin() {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'AdminPassword123!';

  console.log('⏳ Creating Admin account...');

  // 1. Supabase Auth mein user sign up karwana
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: adminEmail,
    password: adminPassword,
  });

  if (authError) {
    console.error('❌ Auth Error:', authError.message);
    return;
  }

  if (authData.user) {
    // 2. Profiles table mein Admin record insert karna
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: authData.user.id,
        email: adminEmail,
        role: 'admin',
      });

    if (profileError) {
      console.error('❌ Profile Error:', profileError.message);
    } else {
      console.log('✅ SUCCESS! Admin Account ban gaya!');
      console.log('📧 Email:', adminEmail);
      console.log('🔑 Password:', adminPassword);
    }
  }
}

seedAdmin();