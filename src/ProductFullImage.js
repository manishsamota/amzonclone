import React from 'react'
import './ProductFullImage.css'

function ProductFullImage({title1,image5}) {
    return (
        <div className="productfullimge_main">
            <h2>{title1}</h2>
            <img src={image5} alt="" class="real_image"/>
        </div>
    )
}

export default ProductFullImage
