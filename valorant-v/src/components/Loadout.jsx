import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Primary from "./Primary"
import Secondary from "./Secondary"
import Melee from "./Melee"
import Buddy from "./Buddy"
import Spray from "./Spray"
import rv from '../Assets/reaver-vandal.png'
import iS from '../Assets/ion-sheriff.png'
import rk from '../Assets/reaver-karambit.png'
import b from "../Assets/buddy-image.png"
import s from "../Assets/spray-image.png"


export default function Loadout () {

    const [selectedPrimary, setSelectedPrimary] = useState({displayIcon: rv})
    const [selectedSecondary, setSelectedSecondary] = useState({displayIcon: iS})
    const [selectedMelee, setSelectedMelee] = useState({displayIcon: rk})
    const [selectedBuddy, setSelectedBuddy] = useState({displayIcon: b})
    const [selectedSpray, setSelectedSpray] = useState({displayIcon: s})



    const [showComponent, setShowComponent] = useState(false)
    const [showComponent2, setShowComponent2] = useState(false)
    const [showComponent3, setShowComponent3] = useState(false)
    const [showComponent4, setShowComponent4] = useState(false)
    const [showComponent5, setShowComponent5] = useState(false)
    const [showComponent6, setShowComponent6] = useState(false)

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/weapons')
             console.log(response.data.data[3].displayName)
            
        }
        
        getData()
    
    }, [])

    const handleClick1 = () =>{
        if(showComponent === true){
        setShowComponent(false)
        } else {
        setShowComponent(true)
        }}

    const handleClick2 = () =>{
         if(showComponent2 === true){
        setShowComponent2(false)
        } else {
        setShowComponent2(true)
        }}

    const handleClick3 = () =>{
        if(showComponent3 === true){
        setShowComponent3(false)
        } else {
        setShowComponent3(true)
        }}

    const handleClick4 = () =>{
        if(showComponent4 === true){
        setShowComponent4(false)
        } else {
        setShowComponent4(true)
        }}

    const handleClick5 = () =>{
        if(showComponent5 === true){
        setShowComponent5(false)
        } else {
        setShowComponent5(true)
        }}

    

    if (!Loadout) {
        return <h2 className="loading">LOADING</h2>
    } else {
    return (

        <div className="loadout-page">

            <div className="button-div">
                <Link to='/'>
                <button className="button">BACK</button>
                </Link>
            </div>

            <div className="loadout-container">

                    <div className="player-card">

                        <img></img>

                    </div>

                    <div className="player-title">

                        <h2>Living Nightmare</h2>

                    </div>

                    <div className="loadout-boxes">

                        <div className="lo-secondary" 
                            onClick={handleClick2}>
                            <img  className="lo-secondary-image" src={selectedSecondary.displayIcon}/>
                        </div>

                        <div className="lo-primary"
                            onClick={handleClick1}>

                            <img className="lo-primary-image" src={selectedPrimary.displayIcon}/>

                        </div>

                        <div className="lo-melee"
                            onClick={handleClick3}>
                            <img  className="lo-melee-image" src={selectedMelee.displayIcon}/>
                        </div>

                        <div className="lo-buddy"
                            onClick={handleClick4}>
                            <img  className="lo-buddy-image" src={selectedBuddy.displayIcon}/>
                        </div>

                        <div className="lo-spray"
                            onClick={handleClick5}>
                            <img  className="lo-spray-image" src={selectedSpray.displayIcon}/>
                        </div>

                    </div>

                    <div className="loadout-item-list">
                        {showComponent && <Primary setSelectedPrimary={setSelectedPrimary}/>}
                        {showComponent2 && <Secondary setSelectedSecondary={setSelectedSecondary}/>}
                        {showComponent3 && <Melee setSelectedMelee={setSelectedMelee}/>}
                        {showComponent4 && <Buddy setSelectedBuddy={setSelectedBuddy}/>}
                        {showComponent5 && <Spray setSelectedSpray={setSelectedSpray}/>}
                    </div>
            </div>

        </div>
    )}}