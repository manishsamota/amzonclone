import React from 'react';
import HorizontalProduct from './HorizontalProduct.js';
import './FirstLineHorizontal.css';



function FirstLineHorizontal() {
   
            const HorizontalProductlistarray =[
            {
          
            image10:"https://m.media-amazon.com/images/I/31Y4580jrOL.__AC_SY200_.jpg",
            srate:"75.00",
            erate:"6699.00",
            time:"46:18",
        },
         {
                  
                    image10: "https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg",
                    srate: "291.00",
                    erate: "9,098.00",
                    time: "46:18",
        },
                {
                    image10: "https://m.media-amazon.com/images/I/41ImsZy3u5L.__AC_SY200_.jpg",
                    srate: "79.00",
                    erate: "1,499.00",
                    time: "46:18",
                },
                
                {
                    image10: "https://m.media-amazon.com/images/I/311yieSWmXL.__AC_SY200_.jpg",
                    srate: "2,499.00",
                    erate: "13,499.00",
                    time: "46:18",
                },
                

                {
                    image10: "https://m.media-amazon.com/images/I/51MVmvhSaKL.__AC_SY200_.jpg",
                    srate: "81.00",
                    erate: "539.00",
                    time: "46:18",
                },
                {
                    image10: "https://m.media-amazon.com/images/I/41truuy1aSL.__AC_SY200_.jpg",
                    srate: "199.00",
                    erate: "669.00",
                    time: "46:18",
                },
                {
                    image10: "https://m.media-amazon.com/images/I/41Jvm9S2KiL.__AC_SY200_.jpg",
                    srate: "159.00",
                    erate: "974.00",
                    time: "46:18",
                },
                {
                    image10: "https://m.media-amazon.com/images/I/311yieSWmXL.__AC_SY200_.jpg",
                    srate: "75.00",
                    erate: "6699.00",
                    time: "46:18",
                },
    ]


      const HorizontalProductarraycard = HorizontalProductlistarray.map((HorizontalProductavatarcardapp, i) => {
        return  <HorizontalProduct
             title={HorizontalProductlistarray[i].title}
             linkN={HorizontalProductlistarray[i].linkN}
                image10={HorizontalProductlistarray[i].image10}
                srate={HorizontalProductlistarray[i].srate}
                erate={HorizontalProductlistarray[i].erate}
                time={HorizontalProductlistarray[i].time}
               
            />
    }
      )

    return (<div>
                
        <div className="fisrt_H_L_main">
                {/* first row is started */}

           
            <span className="title_first_word">Today’s Deals</span>

            <span>
                <a className="title_second_word_a" target="_blank" href="https://www.amazon.in:443/gp/redirect.html/ref=nav_topnav_deals?ie=UTF8&amp;location=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fgoldbox%3Fref%3Dnav_topnav_deals&amp;source=standards&amp;token=424D76FECCE2750383DF164C0AFF493CF1988B05&amp;pf_rd_m=A1VBAL9TL5WCBF&amp;pf_rd_s=&amp;pf_rd_r=K3J3A2M3Y0Q5HPF4CQY4&amp;pf_rd_t=36701&amp;pf_rd_p=5c669f94-aee5-4b22-81f8-1d301ca2c6a3&amp;pf_rd_i=desktop">
                    See more</a>
            </span>
        
        <div className="this_flex">
                   <div className="F_H_Lfirst_product">
                    <HorizontalProduct 
                       

                            image10={HorizontalProductlistarray[0].image10}
                            srate={HorizontalProductlistarray[0].srate}
                            
                            erate={HorizontalProductlistarray[0].erate}
                            time={HorizontalProductlistarray[0].time}
                           
                        />  
                </div>
                <div>
                    <HorizontalProduct
                        image10={HorizontalProductlistarray[1].image10}
                        srate={HorizontalProductlistarray[1].srate}

                        erate={HorizontalProductlistarray[1].erate}
                        time={HorizontalProductlistarray[1].time}
                    />                
                </div>
            <div>
                <HorizontalProduct
                    image10={HorizontalProductlistarray[2].image10}
                    srate={HorizontalProductlistarray[2].srate}

                    erate={HorizontalProductlistarray[2].erate}
                    time={HorizontalProductlistarray[2].time}
                />
            </div>
            <div>
                <HorizontalProduct
                    image10={HorizontalProductlistarray[3].image10}
                    srate={HorizontalProductlistarray[3].srate}

                    erate={HorizontalProductlistarray[3].erate}
                    time={HorizontalProductlistarray[3].time}
                />
            </div>
            <div>
                <HorizontalProduct
                    image10={HorizontalProductlistarray[4].image10}
                    srate={HorizontalProductlistarray[4].srate}

                    erate={HorizontalProductlistarray[4].erate}
                    time={HorizontalProductlistarray[4].time}
                />
            </div>
            <div>
                <HorizontalProduct
                    image10={HorizontalProductlistarray[5].image10}
                    srate={HorizontalProductlistarray[5].srate}

                    erate={HorizontalProductlistarray[5].erate}
                    time={HorizontalProductlistarray[5].time}
                />
            </div>
            <div>
                <HorizontalProduct
                    image10={HorizontalProductlistarray[6].image10}
                    srate={HorizontalProductlistarray[6].srate}

                    erate={HorizontalProductlistarray[6].erate}
                    time={HorizontalProductlistarray[6].time}
                />
            </div>
         
            
            


            </div>
      </div>
    </div>
    )
}

    export default FirstLineHorizontal
