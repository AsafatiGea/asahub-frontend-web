import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vfnexplohyqqjofglubs.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbmV4cGxvaHlxcWpvZmdsdWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxNTE0NTksImV4cCI6MjA4NzcyNzQ1OX0.brQOZ4fnM3eko87EIjqLz45gJ4V8EYUqXyAU-93tqVM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
