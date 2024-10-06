import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
    return {
        providers: [
            GitHub({
                clientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
                clientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET
            })
        ],
        secret: "11d02c766f4f5900586790e17a4eeba9",
        trustHost: true
    }
})