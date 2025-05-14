import { cookies } from "next/headers"
import { getAuthCookie } from "./jwtHandler"
import { parseJwtToUser } from "./jwtParser"

export async function getUserLoggedIn(): Promise<User | null>{
    return parseJwtToUser(await getAuthCookie())
}

export function getUserLoggedInToken(token:string): User | null {
    return parseJwtToUser(token)
}

export async function isUserLoggedIn(): Promise<boolean> {
    return (await cookies()).has("session") 
}