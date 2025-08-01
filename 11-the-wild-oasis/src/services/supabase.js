import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qqimahcdknxfsuloqoxz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaW1haGNka254ZnN1bG9xb3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTY3NTAsImV4cCI6MjA2Njc5Mjc1MH0.efX7vbT3C8zBzSixhdU25nj9JeqIBtAiFnsPG2ijqng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
