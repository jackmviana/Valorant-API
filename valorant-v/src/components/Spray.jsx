import { useState, useEffect } from "react"
import axios from "axios"

export default function Spray (props) {

    const [spray, setSpray] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/sprays')
             console.log(response.data.data[3].displayName)
            setSpray(response.data) 
        }
        
        getData()
    
    }, [])

    return spray?(
    
    <div className="lo-container">

        <div className="selected-title">

            <h2 className="selected-h2">SPRAY</h2>

        </div>

        <div className="lo-items">

           <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[10])}}>

               <img src={spray.data[10].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[24])}}>

               <img src={spray.data[24].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[45])}}>

               <img src={spray.data[45].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[54])}}>

               <img src={spray.data[54].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[41])}}>

               <img src={spray.data[41].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[100])}}>

               <img src={spray.data[100].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[120])}}>

               <img src={spray.data[120].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[130])}}>

               <img src={spray.data[130].displayIcon} className="lo-item-image5"></img>

            </div>

            <div className="lo-item-box5" onClick={() => {props.setSelectedSpray(spray.data[136])}}>

               <img src={spray.data[136].displayIcon} className="lo-item-image5"></img>

            </div>

        </div>

    </div>
    ): <div></div>
}