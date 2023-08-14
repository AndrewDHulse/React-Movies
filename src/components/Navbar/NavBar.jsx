import { Link } from 'react-router-dom'

export default function NavBar({ user }){
    return(
        <nav>
            {user && <p>Welcome, {user}  </p>}
            <Link to="/"> Movie List</Link>
            &nbsp; | &nbsp;
            <Link to="/actors"> Actor List </Link>
        </nav>
    )
}