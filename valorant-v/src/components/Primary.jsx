import { useState, useEffect } from "react"
import axios from "axios"

export default function Primary (props) {

    const [primary, setPrimary] = useState(null)
    const [selected, setSelected] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/weapons')
             console.log(response.data)
            setPrimary(response.data) 
        }
        
        getData()
    
    }, [])

    return primary?(
    
    <div className="lo-container">

        <div className="selected-title">

            <h2 className="selected-h2">PRIMARY WEAPON</h2>

        </div>

        <div className="lo-items">

           <div className="lo-item-box1" onClick={() => {props.setSelectedPrimary(primary.data[0])}}>

               <img src={primary.data[0].displayIcon} className="lo-item-image2"></img>

            </div>

            <div className="lo-item-box1" onClick={() => {props.setSelectedPrimary(primary.data[2])}}>

               <img src={primary.data[2].displayIcon} className="lo-item-image2"></img>

            </div>

            <div className="lo-item-box1" onClick={() => {props.setSelectedPrimary(primary.data[4])}}>

               <img src={primary.data[4].displayIcon} className="lo-item-image2"></img>

            </div>

            <div className="lo-item-box1" onClick={() => {props.setSelectedPrimary(primary.data[1])}}>

               <img src={primary.data[1].displayIcon} className="lo-item-image2"></img>

            </div>

            <div className="lo-item-box1" onClick={() => {props.setSelectedPrimary(primary.data[3])}}>

               <img src={primary.data[3].displayIcon} className="lo-item-image2"></img>

            </div>

            <div className="lo-item-box1" onClick={() => {props.setSelectedPrimary(primary.data[5])}}>

               <img src={primary.data[5].displayIcon} className="lo-item-image2"></img>

            </div>

        </div>

    </div>
    ): <div></div>
}