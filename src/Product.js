import React from 'react';
import './Product.css';

function Product({title, image1, image2, image3,image4, price, rating}) {
    return (
        <div className="main">
<div className="product">
    <div className="product_info">
        <div className="product_title">
            <h2>{title}</h2>
        </div>



<div className="product_imgages_line_one">

        <div className="product_images">
          <img src={image1} alt="" class="real_image"/> <br/>
          <span className="product_detais">
            Badsheets, curtains & more
          </span>
        </div>

        <div className="product_images">
          <img src={image2} alt="" class="real_image"/> <br/>
          <span className="product_detais">
              Cloth organizer, boxes & baskets
          </span>
        </div>
        
        </div>
        <div className="product_imgages_line_two">

        <div className="product_images">
          <img src={image3} alt="" class="real_image"/> <br/>
          <span className="product_detais">
             Top picks for your home
          </span>
        </div>
        
        <div className="product_images">
          <img src={image4} alt="" class="real_image"/> <br/>
          <span className="product_detais">
              Smart blubs & stating lights
          </span>
        </div>
    </div>
   
     <div>
        
            <a href="">See more</a>
        </div>
     </div>
    
 </div>
 </div>
    );
}

export default Product;
