const Pastry = ({img, desc, price, name, onClick}) => {
    return (
      <>
          <div className="cake-card" onClick={onClick}>
              
              <img src={img} alt="" className="img" />
              
  
              <div className="pastry-details">
                  <h2>{name}</h2>
                  <h6>{desc}</h6>
  
                  <div className="add-cart">
                      <span id="price-1">&#8358;{price}</span>
                      <button className="cart-1">🛒</button>
                  </div>
              </div>
          </div>
      </>
    )
  }

export default Pastry;
