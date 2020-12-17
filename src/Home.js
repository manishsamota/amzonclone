import React from 'react';
import './Home.css';
import Product from './Product.js';
import ProductFullImage from './ProductFullImage.js';
import SignInSecurely from './SignInSecurely.js';

import FirstLineHorizontal from './FirstLineHorizontal'

function Home() {
    const prductlistarray =[
        { 
            title:"Home essentials | Amazon Brands & more",
           
            image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg",
            image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg",
            image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg",
            image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg",
           subt1:"Bedsheets, curtains & more",
           subt2:"Cloth organizers, boxes & baskets",
           subt3:"Wall stickers & clocks",
           subt4:"Smart blubes & string lights",

        },

        {
            title:"Top picks for your home",
            image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg",
            image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg",
            image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg",
            image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg"
        },
        
         {
            title:"Top picks for your home",
            image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg",
            image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg",
            image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg",
            image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg"
        },
         {
            title:"Top picks for your home",
            image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg",
            image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg",
            image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg",
            image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg"
        },
         {
            title1:"For a productive home office",
            image5:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg"
         },

    ]
    

      const productarraycard = prductlistarray.map((productavatarcardapp, i) => {
        return  <Product  
               title={prductlistarray[i].title} 
               title1={prductlistarray[i].title1} 
               image1={prductlistarray[i].image1} 
               image2={prductlistarray[i].image2}
               image3={prductlistarray[i].image3}
               image4={prductlistarray[i].image4}
               subt1={prductlistarray[i].subt1} 
               subt2={prductlistarray[i].subt2}
               subt3={prductlistarray[i].subt3}
               subt4={prductlistarray[i].subt4}
                            
  />
    } 
      )

    return (
        <div>     
               <div className='home'>
            <div className="home_container" >
                <img className="home_image" src="https://m.media-amazon.com/images/G/31/img20/Shoes/December/SSW/3000x770-PC_ENGLISH._CB413166242_.jpg" alt="" />
            </div>
             </div>

  {/* first row is started */}

<div className="home_row"> 
      <div className="first_box_product">       
        <Product 
        title ={prductlistarray[0].title}
        image1={prductlistarray[0].image1}
        image2={prductlistarray[0].image2}
        image3={prductlistarray[0].image3}
        image4={prductlistarray[0].image4}
        subt1={prductlistarray[0].subt1}
        subt2={prductlistarray[0].subt2}
        subt3={prductlistarray[0].subt3}
        subt4={prductlistarray[0].subt4}
        />                
      </div>
      <Product 
        title ={prductlistarray[0].title}
        image1={prductlistarray[0].image1}
        image2={prductlistarray[0].image2}
        image3={prductlistarray[0].image3}
        image4={prductlistarray[0].image4}
        subt1={prductlistarray[0].subt1}
        subt2={prductlistarray[0].subt2}
        subt3={prductlistarray[0].subt3}
        subt4={prductlistarray[0].subt4}
        />
         <Product 
        title ={prductlistarray[0].title}
        image1={prductlistarray[0].image1}
        image2={prductlistarray[0].image2}
        image3={prductlistarray[0].image3}
        image4={prductlistarray[0].image4}
        subt1={prductlistarray[0].subt1}
        subt2={prductlistarray[0].subt2}
        subt3={prductlistarray[0].subt3}
        subt4={prductlistarray[0].subt4}
        />

      <div className="last_box_product"> 

            <SignInSecurely />
      </div>
</div>
{/* first row is finished */}



{/* second row is started */}
<div className="home_row"> 
      <div className="first_box_product">       
        <Product 
        title ={prductlistarray[0].title}
        image1={prductlistarray[0].image1}
        image2={prductlistarray[0].image2}
        image3={prductlistarray[0].image3}
        image4={prductlistarray[0].image4}
        subt1={prductlistarray[0].subt1}
        subt2={prductlistarray[0].subt2}
        subt3={prductlistarray[0].subt3}
        subt4={prductlistarray[0].subt4}
        />                
      </div>

   <ProductFullImage
  title1 ={prductlistarray[4].title1} 
  image5 ={prductlistarray[4].image5} 
   />

   <Product 
        title ={prductlistarray[0].title}
        image1={prductlistarray[0].image1}
        image2={prductlistarray[0].image2}
        image3={prductlistarray[0].image3}
        image4={prductlistarray[0].image4}
        subt1={prductlistarray[0].subt1}
        subt2={prductlistarray[0].subt2}
        subt3={prductlistarray[0].subt3}
        subt4={prductlistarray[0].subt4}
        />  

   <div className="last_box_product"> 

            <Product 
        title ={prductlistarray[0].title}
        image1={prductlistarray[0].image1}
        image2={prductlistarray[0].image2}
        image3={prductlistarray[0].image3}
        image4={prductlistarray[0].image4}
        subt1={prductlistarray[0].subt1}
        subt2={prductlistarray[0].subt2}
        subt3={prductlistarray[0].subt3}
        subt4={prductlistarray[0].subt4}
        />  
      </div>
</div>
 
{/* Three row horizontal*/}
<div>
         < FirstLineHorizontal  />
</div>
       
</div>

    )
}

export default Home
