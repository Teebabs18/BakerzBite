import React from 'react'
import Map from './Map'
import Gallery from './Gallery'
function About() {
  return (
    <>
        <div className='about'>
          <div className='abt-body'>
            <h5 className='abt-head'>ABOUT US</h5>
            <p>
                At Bakerz Bites, we believe that every bite should bring joy—because here, <em>"Where smiles are served daily"</em> is not just our motto, it is our mission.  

                Our passion for baking started with a simple love for homemade treats, and today, we are proud to share that love with our community. Using only the finest ingredients, we craft delicious cakes, pastries, pies, and donuts — all made fresh daily with a touch of warmth and creativity.  

                Whether you are celebrating a special occasion or just treating yourself, we are here to make every moment a little sweeter. Visit us in-store or order online to experience the magic of fresh-baked goodness.  
            </p>
          </div>
        
        </div>
        <Gallery/>
    </>
    
  )
}

export default About