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
            id:16,
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
       
        {  id:4,
            title1:"For a productive home office",
            image5:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg"
         },

      {
        id: 5,
        title: "Automotive essentials | Up to 60% off",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY116_CB405083904_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Tyre_372x232._SY116_CB405083904_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Pressurewasher_372x232._SY116_CB405083904_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Protective_gear_372x232._SY116_CB405083904_.jpg",
        subt1: "Helmets",
        subt2: "Tyres",
        subt3: "Pressure washers",
        subt4: "Protective gear",

      },

      {
        id: 6,
        title1: "Chocolates, sweets & more",
        image5: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
      },
     
      {
        id: 7,
        title1: "For efficient home working",
        image5: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
      },
      {
        id: 8,
        title: "For the perfect birthday celebration",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/gifts-by-interest_1x._SY116_CB415005894_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/most-gifted_1x._SY116_CB415005895_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/gift-cards_1x._SY116_CB415005895_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/decorations_1x._SY116_CB415005894_.jpg",
        subt1: "Gifts by interest",
        subt2: "Most-gifted",
        subt3: "Gift Cards",
        subt4: "Decorations",

      },
      {
        id: 9,
        title: "Amazon Fashion | Top Brands",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/PC/5._SY116_CB416800329_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/PC/6._SY116_CB416800329_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/PC/1._SY116_CB416800329_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/GW-BAU/QC/af._SY116_CB416766228_.jpg",
        subt1: "Clothing",
        subt2: "Footwear",
        subt3: "Bags, watches & more",
        subt4: "View all fashion",

      },

        {
          id: 10,
          title1: "Luxury ayurveda products",
          image5: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Luxury-Category-card-1x._SY304_CB448731790_.jpg"
        },
      {
        id: 11,
        title: "Kitchen & home appliances",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards__2_1573726444_jpg_LOWER_QL85_._SY116_CB446704968_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards__1573726444_jpg_LOWER_QL85_._SY116_CB446704971_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards__3_1573726444_jpg_LOWER_QL85_._SY116_CB446704968_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198911XCM_Manual_1198911_991932_IN_Kitchen_PC_Dashboard_cards_372x232_4_1573726444_jpg_LOWER_QL85_._SY116_CB446704960_.jpg",
        subt1: "Geysers",
        subt2: "Water purifiers",
        subt3: "Mixer grinders",
        subt4: "Air purifiers",

      },
      {
        id:12,
        title: "Up to 60% off | Kitchen & home essentials",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/GW/a-186._SY116_CB416753468_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/GW/C-186._SY116_CB416753468_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/GW/D-186._SY116_CB416753468_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/GW/B-186._SY116_CB416753468_.jpg",
        subt1: "Cooking essentials",
        subt2: "Kitchen appliances",
        subt3: "Home appliances",
        subt4: "Dinnerware & serveware",

      },
      {
        id:13,
        title: "Women's ethnic wear | Up to 60% off",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS_PC_June16/Womensethnic_PC_QC_June16/1x_Desktop_Quad_card_w_title_-_Card_1_copy_3._SY116_CB429610642_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/1x_Desktop_Quad_card_w_title_-_Card_2_copy_3._SY116_CB428340806_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/1x_Desktop_Quad_card_w_title_-_Card_3_copy_3._SY116_CB428340801_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EOSS_June/PC_QC/1x_Desktop_Quad_card_w_title_-_Card_4_copy_3._SY116_CB428340801_.jpg",
        subt1: "Clothing",
        subt2: "Footwear",
        subt3: "Fashion jewellery",
        subt4: "Precious jewellery",

      },
      {
        id:14,
        title: "Pick from these types of masks",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X1._SY116_CB429488905_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X2._SY116_CB429488904_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X3._SY116_CB429488904_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X4._SY116_CB429488904_.jpg",
        subt1: "N95 Masks & respirators",
        subt2: "Cloth masks",
        subt3: "Face coverings",
        subt4: "View the mask store ",

      },
      {
        id:15,
        title: "Computing essentials for multi-tasking at home",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/MSO/V201712426_IN_CEPC_GW_essentials_May20_rush_dbqc0.5x_1._SY116_CB417295138_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/MSO/V201712426_IN_CEPC_GW_essentials_May20_rush_dbqc0.5x._SY116_CB417295138_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/MSO/V201712426_IN_CEPC_GW_essentials_May20_rush_dbqc0.5x_3._SY116_CB417295138_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/MSO/V201712426_IN_CEPC_GW_essentials_May20_rush_dbqc0.5x_2._SY116_CB417295138_.jpg",
        subt1: "Monitors",
        subt2: "Hard drives",
        subt3: "Routers & hotspots",
        subt4: "Components",

      },
      {
        id:16,
        title: "Beauty products",
        image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/Beauty_BAY-186x116_QC-Makeup._SY116_CB431333301_.jpg",
        image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/BeautyBAY-186x116QC-Haircare._SY116_CB448752655_.jpg",
        image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/BeautyBAY-186x116QC-Makeup._SY116_CB448752655_.jpg",
        image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/Beauty_BAY-186x116_QC--Makeup._SY116_CB431333301_.jpg",
        subt1: "Skin care",
        subt2: "Hair care",
        subt3: "Makeup",
        subt4: "Luxury beauty",

      },

      {
        id: 17,
        title1: "Up to 45% off | Air conditioners",
        image5: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/GWdesktopcards/Desktop-category-card-adapt_379x304._SY304_CB448536033_.jpg"
      },
      {
        id:18,
        title1: "Masks, sanitizers & more",
        image5: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg"
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
        title ={prductlistarray[5].title}
        image1={prductlistarray[5].image1}
        image2={prductlistarray[5].image2}
        image3={prductlistarray[5].image3}
        image4={prductlistarray[5].image4}
        subt1={prductlistarray[5].subt1}
        subt2={prductlistarray[5].subt2}
        subt3={prductlistarray[5].subt3}
        subt4={prductlistarray[5].subt4}
        />  

   <div className="last_box_product"> 

            <ProductFullImage
              title1={prductlistarray[6].title1}
              image5={prductlistarray[6].image5}
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
            title1={prductlistarray[7].title1}
            image5={prductlistarray[7].image5}
          />
          </div>

          <div className="hlfiveallpro">
            <Product
              title={prductlistarray[8].title}
              image1={prductlistarray[8].image1}
              image2={prductlistarray[8].image2}
              image3={prductlistarray[8].image3}
              image4={prductlistarray[8].image4}
              subt1={prductlistarray[8].subt1}
              subt2={prductlistarray[8].subt2}
              subt3={prductlistarray[8].subt3}
              subt4={prductlistarray[8].subt4}
            /> 
          </div>

          <div className="hlfiveallpro">
            <Product
              title={prductlistarray[9].title}
              image1={prductlistarray[9].image1}
              image2={prductlistarray[9].image2}
              image3={prductlistarray[9].image3}
              image4={prductlistarray[9].image4}
              subt1={prductlistarray[9].subt1}
              subt2={prductlistarray[9].subt2}
              subt3={prductlistarray[9].subt3}
              subt4={prductlistarray[9].subt4}
            />
          </div>

          <div className="last_box_product">
            <ProductFullImage
              title1={prductlistarray[10].title1}
              image5={prductlistarray[10].image5}
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
                title={prductlistarray[11].title}
                image1={prductlistarray[11].image1}
                image2={prductlistarray[11].image2}
                image3={prductlistarray[11].image3}
                image4={prductlistarray[11].image4}
                subt1={prductlistarray[11].subt1}
                subt2={prductlistarray[11].subt2}
                subt3={prductlistarray[11].subt3}
                subt4={prductlistarray[11].subt4}
              />
            </div>

            <div className="hlfiveallpro">
              <Product
                title={prductlistarray[12].title}
                image1={prductlistarray[12].image1}
                image2={prductlistarray[12].image2}
                image3={prductlistarray[12].image3}
                image4={prductlistarray[12].image4}
                subt1={prductlistarray[12].subt1}
                subt2={prductlistarray[12].subt2}
                subt3={prductlistarray[12].subt3}
                subt4={prductlistarray[12].subt4}
              />
            </div>

            <div className="hlfiveallpro">
              <Product
                title={prductlistarray[13].title}
                image1={prductlistarray[13].image1}
                image2={prductlistarray[13].image2}
                image3={prductlistarray[13].image3}
                image4={prductlistarray[13].image4}
                subt1={prductlistarray[13].subt1}
                subt2={prductlistarray[13].subt2}
                subt3={prductlistarray[13].subt3}
                subt4={prductlistarray[13].subt4}
              />
            </div>

            <div className="last_box_product">
              <Product
                title={prductlistarray[14].title}
                image1={prductlistarray[14].image1}
                image2={prductlistarray[14].image2}
                image3={prductlistarray[14].image3}
                image4={prductlistarray[14].image4}
                subt1={prductlistarray[14].subt1}
                subt2={prductlistarray[14].subt2}
                subt3={prductlistarray[14].subt3}
                subt4={prductlistarray[14].subt4}
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
                title={prductlistarray[15].title}
                image1={prductlistarray[15].image1}
                image2={prductlistarray[15].image2}
                image3={prductlistarray[15].image3}
                image4={prductlistarray[15].image4}
                subt1={prductlistarray[15].subt1}
                subt2={prductlistarray[15].subt2}
                subt3={prductlistarray[15].subt3}
                subt4={prductlistarray[15].subt4}
              />
            </div>

            <div className="hlnineallpro">
              <Product
                title={prductlistarray[16].title}
                image1={prductlistarray[16].image1}
                image2={prductlistarray[16].image2}
                image3={prductlistarray[16].image3}
                image4={prductlistarray[16].image4}
                subt1={prductlistarray[16].subt1}
                subt2={prductlistarray[16].subt2}
                subt3={prductlistarray[16].subt3}
                subt4={prductlistarray[16].subt4}
              />
            </div>

            <div className="hlnineallpro">
              <ProductFullImage
                title1={prductlistarray[17].title1}
                image5={prductlistarray[17].image5}
              />
            </div>

            <div className="hlnineallpro">
              <ProductFullImage
                title1={prductlistarray[18].title1}
                image5={prductlistarray[18].image5}
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
