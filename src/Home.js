import React from 'react';
import './Home.css';
import Product from './Product.js';
import ProductFullImage from './ProductFullImage.js';
import SignInSecurely from './SignInSecurely.js';
import FirstLineHorizontal from './FirstLineHorizontal'
import SecondLineHorizontal from './SecondLineHorizontal';
import SixLineHorizontal from './SixLineHorizontal';
import SevenHorizontalPro from './SevenHorizontalPro';
import EightLHP from './EightLHP';
import NineLHP from './NineLHP';
import TwelfthLHPro from './TwelfthLHPro';
import FooterPilo from './FooterPilo';
import FBackToHomeIB from './FBackToHomeIB';
import FooterPaFistpro from './FooterPaFistpro';


function Home() {
    const prductlistarray =[
        { 
            id:0,
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

        {   id:1,
            title:"Top picks for your home",
          image1:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg",
          image2:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg",
          image3:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg",
          image4:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg",
          subt1: "ACs",
          subt2: "Washing machines",
          subt3: "Televisions",
          subt4: "Refrigerators",
        
          },
        
         { id:2,
           title:"20%-70% off | Daily essentials",
           image1:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_2._SY116_CB433219942_.jpg",
           image2:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_3._SY116_CB433219942_.jpg",
           image3:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_1._SY116_CB433219942_.jpg",
           image4:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_4._SY116_CB433219942_.jpg",
           subt1: "Grocery essentials",
           subt2: "Masks & personal hygiene",
           subt3: "Household supplies & personal carex",
           subt4: "Baby essentials & pet supplies",       
        
          },

      {  id:3,
        title: "Professional tools, testing & more",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/Testing_186x116._SY116_CB406506816_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Jan_san1_186x116._SY116_CB406505878_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg",
        subt1: "Professional tools",
        subt2: "Measuring instruments",
        subt3: "Cleaning supplies",
        subt4: "Medical supplies",

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
        <div className='home' id="home_top">
            <div className="home_container" >
                <img className="home_image" src="https://m.media-amazon.com/images/G/31/img20/Shoes/December/SSW/3000x770-PC_ENGLISH._CB413166242_.jpg" alt="" />
            </div>
             </div>

  {/* first row is started */}

<div className="home_row" > 
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
        title ={prductlistarray[1].title}
        image1={prductlistarray[1].image1}
        image2={prductlistarray[1].image2}
        image3={prductlistarray[1].image3}
        image4={prductlistarray[1].image4}
        subt1={prductlistarray[1].subt1}
        subt2={prductlistarray[1].subt2}
        subt3={prductlistarray[1].subt3}
        subt4={prductlistarray[1].subt4}
        />
         <Product 
        title ={prductlistarray[2].title}
        image1={prductlistarray[2].image1}
        image2={prductlistarray[2].image2}
        image3={prductlistarray[2].image3}
        image4={prductlistarray[2].image4}
        subt1={prductlistarray[2].subt1}
        subt2={prductlistarray[2].subt2}
        subt3={prductlistarray[2].subt3}
        subt4={prductlistarray[2].subt4}
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
        title ={prductlistarray[3].title}
        image1={prductlistarray[3].image1}
        image2={prductlistarray[3].image2}
        image3={prductlistarray[3].image3}
        image4={prductlistarray[3].image4}
        subt1={prductlistarray[3].subt1}
        subt2={prductlistarray[3].subt2}
        subt3={prductlistarray[3].subt3}
        subt4={prductlistarray[3].subt4}
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

<div>
         <SecondLineHorizontal />
</div>

{/* Horizontal line five  start*/}
<div className="hlfive">
          <div className="hlfivefirstpro">
          <ProductFullImage
            title1={prductlistarray[4].title1}
            image5={prductlistarray[4].image5}
          />
          </div>

          <div className="hlfiveallpro">
            <Product
              title={prductlistarray[0].title}
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

          <div className="hlfiveallpro">
            <Product
              title={prductlistarray[0].title}
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

          <div className="last_box_product">
            <Product
              title={prductlistarray[0].title}
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

        {/* Horizontal line five  end*/}

       {/* Horizontal line six start  */}

           <SixLineHorizontal />
        {/*Horizontal line six end  */}

        {/* Horizontal line seven start  */}
<SevenHorizontalPro />

        {/*Horizontal line seven end  */}
        

        {/* Horizontal line eight start  */}
        <div className="eightlhpd">
          <div className="hlfive">
            <div className="hlfivefirstpro">
              <Product
                title={prductlistarray[0].title}
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

            <div className="hlfiveallpro">
              <Product
                title={prductlistarray[0].title}
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

            <div className="hlfiveallpro">
              <Product
                title={prductlistarray[0].title}
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

            <div className="last_box_product">
              <Product
                title={prductlistarray[0].title}
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
        </div>
        {/*Horizontal line eight end  */}   
          
        {/* Horizontal line nine start  */}
         
         <EightLHP />
        {/*Horizontal line nine end  */}

        {/* Horizontal line 10 start  */}
        <NineLHP />
        {/*Horizontal line 10 end  */}

        {/* Horizontal line 11 start  */}
        <div className="ninelhpd">
          <div className="elevenlhpro">
            <div className="elevefirstpro">
              <Product
                title={prductlistarray[0].title}
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

            <div className="hlnineallpro">
              <Product
                title={prductlistarray[0].title}
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

            <div className="hlnineallpro">
              <ProductFullImage
                title1={prductlistarray[4].title1}
                image5={prductlistarray[4].image5}
              />
            </div>

            <div className="hlnineallpro">
              <ProductFullImage
                title1={prductlistarray[4].title1}
                image5={prductlistarray[4].image5}
              />
            </div>
      </div>
        </div>

       {/*Horizontal line 11 end  */}


        {/* Horizontal line TwelfthLHPro start  */}
        <div className="twelfthpro">
          <TwelfthLHPro />
        </div>

        {/*Horizontal line 12 end  */}


          {/* footer pilo start */}

        <FooterPilo />

          {/* footer pilo end */}
       
{/* Back to home start */}

<FBackToHomeIB />
        
{/* Back to home end */}

  {/* FooterPaFistpro  start*/}
  
        <FooterPaFistpro />

 {/* FooterPaFistpro end */}

       
</div>

    )
}

export default Home
