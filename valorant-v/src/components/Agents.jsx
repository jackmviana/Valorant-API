import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from 'axios'


export default function Agents () {

    //we need to create a state for our data
    const [agents, setAgents] = useState(null)


    //we need to call an axios function
    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6')
             console.log(response.data)
            setAgents(response.data) 
        }

        getData()
    
    }, [])

    console.log(agents)
    //we need to set state fo our datat


    //we need to see the data


    //lets also make a gaurd operator
    //so if data takes a few seconds
    //our site doesnt break
    const [index, setIndex] = useState(0);

    const mod = (n, m) => {
      let result = n % m;
  
      // Return a positive value
      return result >= 0 ? result : result + m;
    };
  
    const cards = [
      {
        id: "0",
        id2: "raze",
        image: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
      },
      {
        id: "1",
        id2: "sky",
        image: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
      },
      {
        id: "2",
        id2: "harbor",
        image: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png",
      },
      {
        id: "3",
        id2: "chamber",
        image: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
      },
      {
        id: "4",
        id2: "jett",
        image: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
      }
    ];
  
    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1) % cards.length);
        console.log(index);
      }, 3000);
    }, [index]);
  
    let navigate = useNavigate()

  const showAgent = () => {
    navigate(`${index}`)
  }



if (!agents) {
    return <h2>Loading</h2>
} else {
    return (
        <div className="card-carousel">

            <Link to='/'>
              <button>Back</button>
            </Link>
            
            <div onClick={(e) => showAgent(index)} className="carousel">
                {cards.map((item, i) => {
                const indexLeft = mod(index - 1, cards.length);
                const indexRight = mod(index + 1, cards.length);

                let className = "card";

                if (i === index) {
                    className = "card card--active";
                } else if (i === indexRight) {
                    className = "card card--right--one";
                } else if (i === indexLeft) {
                    className = "card card--left--one";
                } else if (i === indexRight) {
                    className = "card card--right--two";
                } else if (i === indexLeft) {
                    className = "card card--left--two";
                } else className = "card";

                return (
                    <img
                    key={item.id}
                    className={className}
                    src={item.image}
                    alt="Agent"
                    ></img>
                );
                })}
            </div>
            
        </div>
    )
}

}