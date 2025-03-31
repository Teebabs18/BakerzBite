import { gallery } from "../Constant";
function Gallery() {
  return (
    <div className="gallery-container">
        <div className="gallery-body">
            {gallery.map((items) => (
                <div key ={items.id} className="galler-items">
                    <img src={items.image} alt={items.alt} className="gallery-img"/>

                </div>
            ))}

        </div>
    
    </div>
  )
}

export default Gallery;
