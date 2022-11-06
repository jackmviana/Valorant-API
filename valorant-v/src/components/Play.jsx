import { Link } from "react-router-dom"

export default function Play () {


    if (!Play) {
        return <h2 className="loading">LOADING</h2>
    } else {
    return (
        <div>
            
            <div className="button-div">
                <Link to='/'>
                <button className="button">BACK</button>
                </Link>
            </div>

            <div className="playVal">

            <form className="play-val-div" action="https://playvalorant.com/en-us/?gclid=CjwKCAjwtp2bBhAGEiwAOZZTuF_dOQdnHsELOKC3mr1nkR_deE5un3tLTkLKy0g1kP9pZNWSs6De9RoCi-UQAvD_BwE&gclsrc=aw.ds">
                <input 
                className="play-val"
                type="submit" value="PLAY VALORANT" />
            </form>

            </div>

        </div>
    )
}}