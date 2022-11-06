import { Link } from "react-router-dom"

export default function Settings () {


    if (!Settings) {
        return <h2 className="loading">LOADING</h2>
    } else {
    return (
        <div>
            
            <div className="button-div">
                <Link to='/'>
                <button className="button">BACK</button>
                </Link>
            </div>

            <div className="theme">

                <div className="theme-header">
                    <h2 className="theme-h1"> THEME: </h2>
                </div>

                <div className="color-picker">

                    <button className="red"></button>
                    <button className="blue"></button>
                    <button className="purple"></button>
                    <button className="green"></button>

                </div>

            </div>

        </div>
    )
}}