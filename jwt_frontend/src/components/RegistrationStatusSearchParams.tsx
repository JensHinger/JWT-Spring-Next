'use client'

import { useSearchParams } from "next/navigation"

export default function RegistrationSearchParams() {
    const searchParams = useSearchParams();
    const registrationStatus = searchParams.get("statusText")
    
    return (
        <p>{registrationStatus}</p>
    )
}