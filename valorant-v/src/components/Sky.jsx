import { Link } from "react-router-dom"

export default function Sky () {
    return (
        <div> 
            <Link to='/agents'>
                <button>Back</button>
            </Link>

            <div>
                <h2> Sky</h2>
            </div>

        </div>
    )
}