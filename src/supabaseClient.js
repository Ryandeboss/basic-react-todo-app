// src/supabaseClient.js (made by chatgpt)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;



console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
