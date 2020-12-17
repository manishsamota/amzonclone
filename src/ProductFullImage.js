import React from 'react'
import './ProductFullImage.css'

function ProductFullImage({title1,image5}) {
    return (
        <div className="productfullimge_main">
            <div className="main_title">
                <h2>{title1}</h2>
            </div>
            
         <div>
            <img src={image5} alt="" class="real_big_image"/>
         </div>
          <br/>    
            <div>    
            <a className="full_Img_a" href="">See more</a>
        </div>
        </div>
    )
}

export default ProductFullImage
