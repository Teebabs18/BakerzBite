import Pastry from "./Pastry"
import { pastry } from "../Constant/index"
import { useState } from "react"

const PastryCard = () => {
    const  [selectedPastry, setSelectedPastry] = useState(null)
    return (
    <>
        <div className="header2">
              <h5>PASTRY</h5>
              <h6>Savor the crisp, buttery layers of our freshly baked pastries.</h6>
        </div>
  
        <div className="pastry-page">
              {pastry.map((pastry, index) => (
                  <Pastry
                  key={index}
                  name={pastry.name}
                  price={pastry.price}
                  desc={pastry.description}
                  img={pastry.image}
                  onClick={() => setSelectedPastry(pastry)}
                  />
              ))}
        </div>



        { selectedPastry && (
          <div className="modal">

            <div className="modal-background">

              <div className="modal-img">
                <img src={selectedPastry.image} alt="" className="cake-img"/>
              </div>

              <div className="modal-details">
                    <span className="head"><h2>{selectedPastry.name}</h2><h3 onClick={() => setSelectedPastry(null)}>x</h3></span>
                    
                    <p>{selectedPastry.details}</p>
                    <button>Buy Now!</button>
              </div>

            </div>
            
          </div>
          )
        }
        
    </>
      
      
    )
}
export default PastryCard;