import { Link } from "react-router-dom"

export default function Harbor () {
    return (
        <div> 
            <Link to='/agents'>
                <button>Back</button>
            </Link>

            <div>
                <h2> Harbor</h2>
            </div>

        </div>
    )
}