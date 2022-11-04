import { Link } from "react-router-dom";

export default function Header () {

    return (
        <div>
            {/* <Link to="/">Home</Link> */}
            <Link to="/play"> PLAY</Link>
            <Link to="/agents">AGENTS</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/settings">SETTINGS</Link>
        </div>
    )
}