import { Link } from "react-router-dom"

export default function Jett () {
    return (
        <div> 
            <Link to='/agents'>
                <button>Back</button>
            </Link>

            <div>
                <h2> Jett</h2>
            </div>

        </div>
    )
}