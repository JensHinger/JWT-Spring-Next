import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getUserLoggedInToken } from "./JWT/jwtService";

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("session")

    if (request.nextUrl.pathname.startsWith("/profile")) {
        if (!sessionCookie){
            console.error("No session cookie in request")
            return NextResponse.redirect(new URL("/", request.url))
        }
        return checkCookieValid(sessionCookie.value, request.url)
    }

    if (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register")){
        if (sessionCookie) {
            return checkCookieValid(sessionCookie.value, request.url)
        }
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: ["/profile", "/login", "/register"]
}

function checkCookieValid(cookieValue: string, baseUrl: string) {
    try {
        getUserLoggedInToken(cookieValue)
        return NextResponse.next()
    } catch {
        // If cookie is not correct
        const response = NextResponse.redirect(new URL("/", baseUrl));
        response.cookies.delete("session")
        return response
    }
}