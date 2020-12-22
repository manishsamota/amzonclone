import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


function Header() {
    return (
          
         <div className='header'>
           
           <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
           

           <div className="globle_location">
                    <div>
                        <a href="" className="global_loc_a">
                        <LocationOnOutlinedIcon 
                         style={{zIndex:2,}}

                        />
                    <span className="inline-gri">
                            <span classname="global_loc_w1" 
                            style={

                                {
                                    fontSize:12,
                                    fontWeight:400,
                                }
                            }>
                            Hello
                        </span><br/>
                            <span classname="global_loc_w2"
                            
                            style={{fontSize:15,
                                    fontWeight:700,
                                  paddingLeft:10,
                                  paddingRight:10,
                    
                            }}

                            >
                            Select you address
                        </span>
                        </span>
                        </a>
                    </div>
           </div>


{/* Drop down start */}

<div>

<div className="dropdown_main">
    <div className="drop_cat_things">
       
<select id="cars" className="drop_op1" >
 <option value="volvo" className="drop_op2" > All </option>
    <option value="saab"> Deals </option>
    <option value="opel"> Alexa Skills </option>
    <option value="audi"> Amazon Devices </option>
 <option value="audi"> Amazon Fashion </option>
 <option value="audi"> Amazon Pantry </option>
 <option value="audi"> Appiances </option>
 <option value="audi"> Apps & Games </option>
 <option value="audi"> Baby </option>
 <option value="audi"> Beauty </option>
 <option value="audi"> Books  </option>
 <option value="audi"> Car & Motorbike </option>
  <option value="audi"> Clothing & Accessories </option>
   <option value="audi"> collectibles  </option>
 <option value="audi"> Computer & Accessories </option>
 <option value="audi"> Electronics  </option>
</select>

  </div>
</div>

</div>


{/*  Drop down end */}
            <div className='header_search'>
                          
                <input className='header_searchInput'
                type='text'/>
                <SearchIcon className="header_searchIcon" />
            </div>
          
        {/* Lan drop down start */}


            <div class="HLdropdown">
                <button class="HLdropbtn">
                
                    <img src="https://user-images.githubusercontent.com/59643473/102814069-fca74f00-43ef-11eb-8083-5387fc466843.jpg"
                        className="HLbfI" /><span className="HL_drop_sine">⌄</span>

                </button>
               
               
                <div class="HLdropdown-content">
                    <a href="">English - EN </a>
                    <hr className="hr_tag_drp_l_F" />
                    <a href=""> हिंदी - HI </a>
                    <a href=""> தமிழ் - TA </a>
                    <a href=""> తెలుగు - TE </a>
                    <a href=""> తెలుగు - TE </a>
                    <a href=""> മലയാളം - ML </a>

                    <hr className="hr_tag_drp_l_F" />

                    <div className="dis_l_W_I">

                        <div className="drop_c1_1">

                            <img src="https://user-images.githubusercontent.com/59643473/102814069-fca74f00-43ef-11eb-8083-5387fc466843.jpg"
                                className="Ind_Flg_drp_l_F" /> <span style={{ paddingTop: '10px', fontSize: '13px', lineHeight: '90%' }}>You are shopping on</span>

                        </div>

                    </div>

                    <div className="drop_c1_2">
                        Amazon.in.
       </div>
                    <a id="drop_HL_C_a" href="">Change country/region </a>
                </div>

                
            </div>

        {/* Lanng drop down end */}

                {/* logo */}
         

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello, Sing In</span>
                    <span className='header_optionLineTwo'>Account & Lists</span>
                </div>
                 <div className='header_option'>
                     <span className='header_optionLineOne'>Returns</span>
                      <span className='header_optionLineTwo'>& Orders</span>
                </div>
                    

                <div className="SHdispay-flex">
                  
                    <div className="header_optionBasket_opt">
                   <div className="header_optionLineTwo SH_header_basketCount">0</div>
                    <div className="Sho_bas"><ShoppingCartOutlinedIcon /></div>
                   
                   </div>
                   
                    <div className='Header_shpping_Cart_W'>Cart</div>
                </div>        
            </div>
       
    
    
    </div>
                
    )
}
 
export default Header
            
            
