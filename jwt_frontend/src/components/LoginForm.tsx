"use client"

import { loginUser } from "@/JWT/jwtHandler";
import Form from "next/form";
import { Suspense, useActionState } from "react";
import PasswordInput from "./PasswordInput";
import RegistrationSearchParams from "./RegistrationStatusSearchParams";

export default function LoginForm() {
    // TODO: Password needs to be secret in fontend as well

    const initialState: InitialState = {message: ""} 

    const [state, formAction, isPending] = useActionState<InitialState, FormData>(
        loginUser,
        initialState
    )

    return (
        <>
            <h2>
                Login Form
            </h2>
            <Form action={formAction}>
                <label>
                    Email: <input 
                    name="email" 
                    type="email"
                    placeholder="Enter your email adress"
                    required/>
                </label>
                <br></br>
                    <PasswordInput />
                <br></br>
                <button type="submit" disabled={isPending}>
                    {isPending ? "Loading...":("Login ->")}
                </button>
                <Suspense>
                    <RegistrationSearchParams/>
                </Suspense>
                <div className="ErrorMessage">
                    {state?.message} 
                </div>
            </Form>
        </>
    )
}