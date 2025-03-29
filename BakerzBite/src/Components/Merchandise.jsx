import React from 'react'

import cap from "../assets/cap.png"
import hat from "../assets/hat.png"
import sweater from "../assets/sweater.png"
import cup from "../assets/cup.png"
function Merchandise() {
  return (
    <div>
        <div className='merch-body'>
            <div className='header2'>
                 <h5>MERCHANDISE</h5>
                 <h6>Shop from our variety of branded mugs, caps, t-shirts, hoodies and tumblers at affordable price</h6>
            </div>
           

            <div className='merch-card'>

                <div className='card1' >
                    <img src={cap} alt="" className='merch-img' />
                    <div className='info'>SOLD OUT!</div>

                    <p>Branded Cap</p>
                    <button>BUY</button>
                </div>

                <div className='card2'>
                    <img src={hat} alt="" className='merch-img' />
                    <div className='info'>SOLD OUT!</div>

                    <p>Branded Baseball Cap</p>
                    <button>BUY</button>
                </div>
                
                <div className='card3'>
                    <img src={sweater} alt="" className='merch-img'/>
                    <div className='info'>SOLD OUT!</div>
                    <p>Branded Hoodie</p>
                    <button>BUY</button>
                </div>
                
                <div className='card4'>
                    <img src={cup} alt="" className='merch-img' />
                    <div className='info'>SOLD OUT!</div>
                    <p>Branded Mug</p>
                    <button>BUY</button>
                </div>
                

            </div>
            
        </div>

        
    </div>
   
  )
}

export default Merchandise;