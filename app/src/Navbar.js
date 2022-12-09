import { Link } from "react-router-dom";
import { useGlobalState } from "./context/GlobalState";
import {CgProfile} from 'react-icons'

function NavBar() {
    const [state, dispatch] = useGlobalState();

    return (
        <nav>
            <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    !state.currentUser && (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )
                }
                {
                    !state.currentUser && (
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    )
                }
                {
                    state.currentUser && (
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    )
                }
                {
                    state.currentUser && (
                        <li>
                            <Link to="/post">Post</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default NavBar;