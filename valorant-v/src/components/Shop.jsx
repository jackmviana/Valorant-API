import { Link } from "react-router-dom"
import rv from '../Assets/reaver-vandal.png'
import iS from '../Assets/ion-sheriff.png'
import eo from '../Assets/elderflame-op.png'
import rk from '../Assets/reaver-karambit.png'
import vp from '../Assets/Valorant-Points.png'

export default function Shop () {


    if (!Shop) {
        return <h2 className="loading">LOADING</h2>
    } else {
    return (
        <div className="shop-main">
            
            <div className="button-div">
                <Link to='/'>
                <button className="button">BACK</button>
                </Link>
            </div>

            <div className="shop-container">

                <div className="item1">

                    <div className="vp">

                        <img className="vp-image" src={vp}/>
                        <h3  className="vp-price">1775</h3>

                    </div>

                    <img className="itemImage1" src={rv}/>

                    <div className="bottom-card1">
                        
                        <div className="shop-text">
                            <h2 className="si1h1">REAVER</h2>
                            <h2 className="si1h2">VANDAL</h2>
                        </div>

                    </div>

                </div>

                <div className="item2">

                    <div className="vp">

                        <img className="vp-image" src={vp}/>
                        <h3  className="vp-price">1775</h3>

                    </div>

                    <img className="itemImage2" src={iS}/>

                    <div className="bottom-card2">
                        
                        <div className="shop-text">
                            <h2 className="si2h1">ION</h2>
                            <h2 className="si2h2">SHERIFF</h2>
                        </div>

                    </div>

                </div>

                <div className="item3">

                    <div className="vp">

                        <img className="vp-image" src={vp}/>
                        <h3  className="vp-price">2475</h3>

                    </div>

                    <img className="itemImage3" src={eo}/>

                    <div className="bottom-card3">
                        
                        <div className="shop-text">
                            <h2 className="si3h1">ELDERFLAME</h2>
                            <h2 className="si3h2">OPERATOR</h2>
                        </div>

                    </div>

                </div>

                <div className="item4">

                    <div className="vp">

                        <img className="vp-image" src={vp}/>
                        <h3 className="vp-price">4350</h3>

                    </div>

                    <img className="itemImage4" src={rk}/>

                    <div className="bottom-card4">
                        
                        <div className="shop-text">
                            <h2 className="si4h1">REAVER</h2>
                            <h2 className="si4h2">KARAMBIT</h2>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}}