import { createClient } from '@supabase/supabase-js'

// Isme koi process.env use nahi ho raha, direct chalega!
const supabaseUrl = "https://jeiuztsgkxepvqdsbqi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplaXV6dHNna3hlcHZxZHNicWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDMwMDIsImV4cCI6MjA5OTYxOTAwMn0.5cDgY5_CeiUCBCCgOAQC9m7Aus0Q2ueHatMONf9aVlQ"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);