import { type Writable, writable } from "svelte/store"

export const value: Writable<string> = writable("")