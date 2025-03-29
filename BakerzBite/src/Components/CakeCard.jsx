import Cards from "./Cards"
import {cakes} from "../Constant/index"
import { useState } from "react"

const CakeCard = () => {
  const  [selectedCake, setSelectedCake] = useState(null)
  return (
    
    <>
      

        <div className="header">
            <h5>CAKES</h5>
            <h6>indulge in freshly baked goodness</h6>
        </div>

        <div className="bakery-page">
            {cakes.map((cake, index) => (
                <Cards
                key={index}
                name={cake.name}
                price={cake.price}
                desc={cake.description}
                img={cake.image}
                info={cake.details}
                onClick={() => setSelectedCake(cake)
                }
                />
            ))}
        </div>


        { selectedCake && (
          <div className="modal">

            <div className="modal-background">

              <div className="modal-img">
                <img src={selectedCake.image} alt="" className="cake-img"/>
              </div>

              <div className="modal-details">
                <span className="head"><h2>{selectedCake.name}</h2><h3 onClick={() => setSelectedCake(null)}>x</h3></span>
                
                <p>{selectedCake.details}</p>
                <button>Buy Now!</button>
              </div>

            </div>
            
          </div>
          )
        }
        



    </>
    
    
  )
}

export default CakeCard
