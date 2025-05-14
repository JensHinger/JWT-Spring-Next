"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { URL } from "@/api/api.definitions";

const AUTH_COOKIE_NAME = "session"

export async function registerUser(previousState: InitialState, formData: FormData) {
    const response: Response = await fetch(`${URL}/auth/register`, 
        {
            method:"POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        }
    );

    if (!response.ok){
        return {
            message: "Something went wrong!"
        }
    }
    const body = await response.json();
    (await cookies()).set(AUTH_COOKIE_NAME, body.token)
    redirect("/profile?status=success")
}

export async function loginUser(previousState: InitialState, formData: FormData) {
    const response: Response = await fetch(`${URL}/auth/authenticate`, 
        {
            method:"POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        }
    )

    if (response.ok){
        const body = await response.json();
        (await cookies()).set(AUTH_COOKIE_NAME, body.token)
        return {
            message: ""
        }
    } else {
        return {
            message: "This Email/Password combination does not exist"
        }
    }
}

export async function getAuthCookie(): Promise<string>{

    const jwtCookie = (await cookies()).get(AUTH_COOKIE_NAME)
    if (!jwtCookie) {
        return ""
    }

    return jwtCookie.value
}

export async function deleteAuthCookie() {
    (await cookies()).set("session", "useless", { maxAge: 0 })
    redirect("/")
}