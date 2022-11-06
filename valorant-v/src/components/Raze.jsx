import { useState, useEffect } from "react"
import axios from "axios"
import '../App.css';
import agentBackground from '../Assets/agents-background.png'


import { Link } from "react-router-dom"

export default function Raze () {

    const [agents, setAgents] = useState(null)


    
    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/agents/f94c3b30-42be-e959-889c-5aa313dba261')
             console.log(response.data)
            setAgents(response.data) 
        }
        
        getData()
    
    }, [])


    const [show,setShow]=useState(false)
    const [show2, setShow2]=useState(false)
    const [show3, setShow3]=useState(false)
    const [show4, setShow4]=useState(false)
    
    
    if (!Raze) {
        return <h2 className="loading">LOADING</h2>
    } else {
    return !agents ? (

        <div> 
            <h2 className="loading">Loading</h2>
            
        </div>

    ): 
    <div className="main-agent">
        
        <div className="button-div">

            <Link to='/agents'>
                <button className="button">BACK</button>
            </Link>

        </div>
        
        <div className="container">

                <div className="image-section">

                    <img className="agent-image" src={agents.data.fullPortrait} alt='' />

                </div>

                <div className="info-section">

                    <h2 className="agent-h">{agents.data.displayName}</h2>
                    <h2 className="agent-bio">{agents.data.description}</h2>

                    <div className="ability-icons">

                        <div className="icon1">
                            <img className="iconImage1" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} src={agents.data.abilities[0].displayIcon} alt="" />
                        </div>

                        <div className="icon2">
                            <img className="iconImage2" onMouseOver={() => setShow2(true)} onMouseOut={() => setShow2(false)} src={agents.data.abilities[1].displayIcon} alt="" />
                        </div>

                        <div className="icon3">
                            <img className="iconImage3" onMouseOver={() => setShow3(true)} onMouseOut={() => setShow3(false)} src={agents.data.abilities[2].displayIcon} alt="" />
                        </div>

                        <div className="icon4">
                            <img className="iconImage4" onMouseOver={() => setShow4(true)} onMouseOut={() => setShow4(false)} src={agents.data.abilities[3].displayIcon} alt="" />
                        </div>

                    </div>

                    <div className="ability-info">
                        {show ? <h2 className="ability-h1">{agents.data.abilities[0].slot}</h2> : null}
                        {show ? <h2 className="ability-h2">{agents.data.abilities[0].displayName}</h2> : null}
                        {show ? <h2 className="ability-p">{agents.data.abilities[0].description}</h2> : null}
                        {show2 ? <h2 className="ability-h1">{agents.data.abilities[1].slot}</h2> : null}
                        {show2 ? <h2 className="ability-h2">{agents.data.abilities[1].displayName}</h2> : null}
                        {show2 ? <h2 className="ability-p">{agents.data.abilities[1].description}</h2> : null}
                        {show3 ? <h2 className="ability-h1">{agents.data.abilities[2].slot}</h2> : null}
                        {show3 ? <h2 className="ability-h2">{agents.data.abilities[2].displayName}</h2> : null}
                        {show3 ? <h2 className="ability-p">{agents.data.abilities[2].description}</h2> : null}
                        {show4 ? <h2 className="ability-h1">{agents.data.abilities[3].slot}</h2> : null}
                        {show4 ? <h2 className="ability-h2">{agents.data.abilities[3].displayName}</h2> : null}
                        {show4 ? <h2 className="ability-p">{agents.data.abilities[3].description}</h2> : null}
                    </div>

                </div>

        </div>
    </div>
    
}}

