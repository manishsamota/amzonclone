import React from 'react'
import './HorizontalProduct.css'

function HorizontalProduct({title,linkN,image10, srate,erate, time}) {
    return (
        <div className="">

            <div className="hlh_main_title">

               
                {/* fist product start */}
                <div className="h_product">
                <div >

                    <img className="SubImg" src={image10} alt="" />

                   
                    <div class="dealPrice" >
                    <div>
                        
                                <span class="rs_text rs_text_l">₹</span><span class="C_r_rate">{srate}</span>
                         <span> -</span> 
                        <span class="rs_text"> ₹</span><span class="C_r_rate ">{erate}</span>
                    </div>
                    
                       
                    <div >                    
                            <span class="clock">Ends in {time}</span>
                        </div>

                    </div>
                </div>
                {/* first product end */}

                {/* fist product start */}
                
            </div>

               </div>
               </div>
         
    )
}

export default HorizontalProduct
