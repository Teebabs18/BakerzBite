const Cards = ({img, desc, price, name, onClick}) => {
  return (
    <>
        <div className="cake-card" onClick={onClick}>
            
            <img src={img} alt="" className="image" />
            

            <div className="cake-details">
                <h2>{name}</h2>
                <h6>{desc}</h6>

                <div className="add-cart">
                    <span id="price">#{price}</span>
                    <button className="cart">🛒</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards
