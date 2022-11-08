import { useState, useEffect } from "react"
import axios from "axios"

export default function Melee (props) {

    const [melee, setMelee] = useState(null)
    const [selected, setSelected] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/weapons')
             console.log(response.data.data[17].skins[1].displayName)
            setMelee(response.data) 
        }
        
        getData()
    
    }, [])

    return melee?(
    
    <div className="lo-container">

        <div className="selected-title">

            <h2 className="selected-h2">MELEE</h2>

        </div>

        <div className="lo-items">

           <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[1])}}>

               <img src={melee.data[17].skins[1].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[4])}}>

               <img src={melee.data[17].skins[4].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[18])}}>

               <img src={melee.data[17].skins[18].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[20])}}>

               <img src={melee.data[17].skins[20].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[22])}}>

               <img src={melee.data[17].skins[22].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[28])}}>

               <img src={melee.data[17].skins[28].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[32])}}>

               <img src={melee.data[17].skins[32].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[36])}}>

               <img src={melee.data[17].skins[36].displayIcon} className="lo-item-image3"></img>

            </div>

            <div className="lo-item-box3" onClick={() => {props.setSelectedMelee(melee.data[17].skins[43])}}>

               <img src={melee.data[17].skins[43].displayIcon} className="lo-item-image3"></img>

            </div>

        </div>

    </div>
    ): <div></div>
}