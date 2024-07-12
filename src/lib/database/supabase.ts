import { createClient } from "@supabase/supabase-js"
import type { Database } from "../types/supabase.types"

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient<Database>(
    VITE_SUPABASE_URL,
    VITE_SUPABASE_KEY,
)