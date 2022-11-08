import { useState, useEffect } from "react"
import axios from "axios"

export default function Secondary (props) {

    const [secondary, setSecondary] = useState(null)
    const [selected, setSelected] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/weapons')
             console.log(response.data)
            setSecondary(response.data) 
        }
        
        getData()
    
    }, [])

    return secondary?(
    
    <div className="lo-container">

        <div className="selected-title">

            <h2 className="selected-h2">SECONDARY WEAPON</h2>

        </div>

        <div className="lo-items">

           <div className="lo-item-box2" onClick={() => {props.setSelectedSecondary(secondary.data[8])}}>

               <img src={secondary.data[8].displayIcon} className="lo-item-image1"></img>

            </div>

            <div className="lo-item-box2" onClick={() => {props.setSelectedSecondary(secondary.data[9])}}>

               <img src={secondary.data[9].displayIcon} className="lo-item-image1"></img>

            </div>

            <div className="lo-item-box2" onClick={() => {props.setSelectedSecondary(secondary.data[7])}}>

               <img src={secondary.data[7].displayIcon} className="lo-item-image1"></img>

            </div>

            <div className="lo-item-box2" onClick={() => {props.setSelectedSecondary(secondary.data[10])}}>

               <img src={secondary.data[10].displayIcon} className="lo-item-image1"></img>

            </div>

            <div className="lo-item-box2" onClick={() => {props.setSelectedSecondary(secondary.data[11])}}>

               <img src={secondary.data[11].displayIcon} className="lo-item-image1"></img>

            </div>

        </div>

    </div>
    ): <div></div>
}