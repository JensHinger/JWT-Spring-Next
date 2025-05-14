'use client'

import { registerUser } from "@/JWT/jwtHandler";
import Form from "next/form"
import { Suspense, useActionState } from "react";
import PasswordInput from "./PasswordInput";
import styles from "./registerForm.module.css"
import RegistrationSearchParams from "./RegistrationStatusSearchParams";

export default function RegisterForm() {
    // TODO: Add input validation with e-mail and min password requirements
    // TODO: Password needs to be secret in fontend as well

    const initialState: InitialState = {message: ""} 

    const [message, formAction, isPending] = useActionState<InitialState, FormData>(
        registerUser,
        initialState
    )

    return (
        <>
            <h1>Register Form</h1>
            <Form action={formAction} className={styles.formContainer}>
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
                <div>
                    <label>
                        First name: <input 
                        name="firstname" 
                        placeholder="Enter your firstname"/>
                    </label>
                </div>
                <br></br>
                <label>
                    Last name: <input 
                    name="lastname" 
                    placeholder="Enter your lastname"/>
                </label>
                <button type="submit" disabled={isPending}>
                    {isPending ? "Loading...":("Register ->")}
                </button>
                <div className="errorMessage">
                    {message && message.message}
                </div>
                <Suspense>
                    <RegistrationSearchParams />
                </Suspense>
            </Form>
        </>
    )
}