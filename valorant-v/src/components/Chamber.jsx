import { Link } from "react-router-dom"

export default function Chamber () {
    return (
        <div> 
            <Link to='/agents'>
                <button>Back</button>
            </Link>

            <div>
                <h2> Chamber</h2>
            </div>

        </div>
    )
}