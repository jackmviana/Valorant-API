import { useState, useEffect } from "react"
import axios from "axios"

export default function Buddy (props) {

    const [buddy, setBuddy] = useState(null)
    const [selected, setSelected] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/buddies')
            setBuddy(response.data) 
        }
        
        getData()
    
    }, [])

    return buddy?(
    
    <div className="lo-container">

        <div className="selected-title">

            <h2 className="selected-h2">BUDDY</h2>

        </div>

        <div className="lo-items">

           <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[3])}}>

               <img src={buddy.data[3].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[7])}}>

               <img src={buddy.data[7].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[35])}}>

               <img src={buddy.data[35].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[32])}}>

               <img src={buddy.data[32].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[25])}}>

               <img src={buddy.data[25].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[80])}}>

               <img src={buddy.data[80].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[86])}}>

               <img src={buddy.data[86].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[93])}}>

               <img src={buddy.data[93].displayIcon} className="lo-item-image4"/>

            </div>

            <div className="lo-item-box4" onClick={() => {props.setSelectedBuddy(buddy.data[96])}}>

               <img src={buddy.data[96].displayIcon} className="lo-item-image4"/>

            </div>

        </div>

    </div>
    ): <div></div>
}