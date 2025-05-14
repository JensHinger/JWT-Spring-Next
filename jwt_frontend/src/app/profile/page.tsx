import ProfileInteractive from "./ProfileInteractive"
import { getUserLoggedIn } from "@/JWT/jwtService"

interface SearchParamsType {
    status: string
}

export default async function Page({searchParams}: {searchParams: Promise<SearchParamsType>}) {
    // using a route handler this might work!
    const registrationSuccess = (await searchParams).status
    // User logged in check is in middleware
    const loggedUser = await getUserLoggedIn()

    return (
        <div>
            Welcome to the Profile Page!
            <>
            {registrationSuccess === "success" && (
                <h2 style={{color: "green"}}>Registration Successful! Welcome aboard!</h2>
            )}
            </>
            {loggedUser && <ProfileInteractive loggedUser={loggedUser}></ProfileInteractive>}
        </div>
    )
}