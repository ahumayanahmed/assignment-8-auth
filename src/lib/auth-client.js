import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://assignment-8-auth.vercel.app"
})
export const { signIn, signUp, useSession } = createAuthClient()