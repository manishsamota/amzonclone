import React from 'react'
import './ProductFullImage.css'

function ProductFullImage(title,image1) {
    return (
        <div className="productfullimge_main">
            <h2>{title}</h2>
            <img src={image1} alt="" class="real_image"/>
        </div>
    )
}

export default ProductFullImage
