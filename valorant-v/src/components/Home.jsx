import Header from "./Header"
import mmBackground from "../Assets/Jett.mp4"

export default function Home () {

    return (
        <div className="home">
            <video src={mmBackground} autoPlay loop muted />

            <div className="header">
                <Header />
            </div>

        </div>
    )
}
