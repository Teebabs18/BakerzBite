import React from "react";
import cookie from "../assets/cookies.png"
import donut from "../assets/doughnut.png"
import cake from "../assets/cake.png"
import cupcake from "../assets/cupcake.png"

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Left Side Text */}
                <div className="hero-text">
                    <h1 id="h1">FRESHLY BAKED DELIGHTS AT BAKERZ BITE</h1>
                    <h2 id="h2">At Bakerz Bite, we craft every cake, pastry, and sweet treat with love and the finest ingredients. From decadent chocolate cakes to fluffy donuts and savory quiches, our creations are made to bring joy to every bite. Discover your new favorite today!</h2>
                </div>

                {/* Right Side Image */}
                <div className="hero-image-container">
                    <img src={cake} alt="" title="Cake" className="hero-image" />
                    <img src={cookie} alt="Cookie" title="Cookie" className="cookie"/>
                    <img src={donut} alt="Donut" title="Donut" className="donut"/>
                    <img src={cupcake} alt="Cake" title="Cup Cake" className="cake"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;