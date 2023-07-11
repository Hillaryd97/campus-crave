import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(
  "https://vemgaxgqmfznpnpzzwbg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbWdheGdxbWZ6bnBucHp6d2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMDI5NjksImV4cCI6MjAwMzc3ODk2OX0.03vl0C-GwXjFqV3sb8mdLm8dsY1QwCc1ZX5uoYhoK0A"
);

export default supabase;
