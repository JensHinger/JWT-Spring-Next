import { deleteAuthCookie } from "@/JWT/jwtHandler";
import Form from "next/form";

export default function ProfileInteractive(
    { loggedUser }: 
    { loggedUser: User }
) {

    return (
        <>
            <h1>
                Welcome, {loggedUser.firstname + " " + loggedUser.lastname}!
            </h1>
            <p>
                You are currently logged in as {loggedUser.email}
            </p>         
            <Form action={deleteAuthCookie}>
                <button type="submit">Logout</button>
            </Form>  
        </>
    )
}