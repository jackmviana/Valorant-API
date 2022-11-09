import { useState, useEffect } from "react"
import axios from "axios"

export default function PlayerCard (props) {

    const [playerCard, setPlayerCard] = useState(null)
    

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/playercards')
             console.log(response.data)
            setPlayerCard(response.data) 
        }
        
        getData()
    
    }, [])

    return playerCard?(
    
    <div className="lo-container">

        <div className="selected-title">

            <h2 className="selected-h2">PLAYER CARD</h2>

        </div>

        <div className="lo-items">

           <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[147])}}>

               <img src={playerCard.data[147].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[212])}}>

               <img src={playerCard.data[212].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[114])}}>

               <img src={playerCard.data[114].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[160])}}>

               <img src={playerCard.data[160].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[213])}}>

               <img src={playerCard.data[213].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[200])}}>

               <img src={playerCard.data[200].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[284])}}>

               <img src={playerCard.data[284].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[315])}}>

               <img src={playerCard.data[315].displayIcon} className="lo-item-image6"></img>

            </div>

            <div className="lo-item-box6" onClick={() => {props.setSelectedPlayerCard(playerCard.data[80])}}>

               <img src={playerCard.data[80].displayIcon} className="lo-item-image6"></img>

            </div>

        </div>

    </div>
    ): <div></div>
}