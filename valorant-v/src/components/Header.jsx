import { Link } from "react-router-dom";

export default function Header () {

    return (
        <div className="links">
            {/* <Link to="/">Home</Link> */}
            <Link className="playLink" to="/play"> PLAY</Link>
            <Link className="agentLink" to="/agents">AGENTS</Link>
            <Link className="shopLink" to="/shop">SHOP</Link>
            <Link className="settingsLink" to="/settings">SETTINGS</Link>
        </div>
    )
}