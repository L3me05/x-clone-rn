import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <>
            <h1>HomePage</h1> 
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </>
    )
}