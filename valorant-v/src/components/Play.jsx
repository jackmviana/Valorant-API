import { Link } from "react-router-dom"

export default function Play () {

    return (
        <div>
            
            <div className="button-div">
                <Link to='/'>
                <button className="button">BACK</button>
                </Link>
            </div>

            <div className="playVal">

                <button className="valbutton">PLAY VALORANT</button>

            </div>

        </div>
    )
}