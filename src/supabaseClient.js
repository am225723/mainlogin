import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://froxodstewdswllgokmu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyb3hvZHN0ZXdkc3dsbGdva211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNjgyODUsImV4cCI6MjA3Njk0NDI4NX0.PUr1-cq71PZUFsudz7lzSs3IWMzSxomNqBwlxkCG02s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)