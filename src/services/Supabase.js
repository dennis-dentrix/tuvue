import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ibnsguqfxusqjfawlltm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlibnNndXFmeHVzcWpmYXdsbHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MjA3MjgsImV4cCI6MjAxMTI5NjcyOH0.O3iqxmc7eW9tQaq9FBZQ9vLDK57_30YrIKW5UoQ9HBI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
