import React from 'react';
import './Product.css';

function Product({title, image1, image2, image3,image4, subt1, subt2,subt3,subt4}) {
    return (
        <div className="main">
<div className="product">
    <div className="product_info">
        <div className="product_main_title">
            <h2>{title}</h2>
        </div>



<div className="product_imgages_line_one">

        <div className="product_images">
          <img src={image1} alt="" class="real_image"/> <br/>
          <span className="product_detais">
            {subt1}
          </span>
        </div>

        <div className="product_images">
          <img src={image2} alt="" class="real_image"/> <br/>
          <span className="product_detais">
              {subt2}
          </span>
        </div>
        
        </div>
        <div className="product_imgages_line_two">

        <div className="product_images">
          <img src={image3} alt="" class="real_image"/> <br/>
          <span className="product_detais">
             {subt3}
          </span>
        </div>
        
        <div className="product_images">
          <img src={image4} alt="" class="real_image"/> <br/>
          <span className="product_detais">
              {subt4}
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
