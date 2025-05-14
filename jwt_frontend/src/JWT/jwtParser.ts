export function parseJwtToUser(token: string){
    try {
        if (!token) { return null; }
        const base64 = token.split(".")[1]
        const decodedJwt = JSON.parse(Buffer.from(base64, 'base64').toString("utf-8"))
        
        const loggedUser: User = {
            id: decodedJwt.sub,
            email: decodedJwt.email,
            firstname: decodedJwt.firstname,
            lastname: decodedJwt.lastname,
        }
        return loggedUser;
        
    } catch (error) {
        console.error(error)
        return null
    }
}
