import React from 'react'
import OnlyImageHorizontalPro from './OnlyImageHorizontalPro.js'
import './SecondLineHorizontal.css'

function SecondLineHorizontal() {
                    
        const SecondHLProarray =[
            {
          
                slhImages:"https://m.media-amazon.com/images/I/315AO4OdIZL._AC_SY200_.jpg",
               },
         {
                  
             slhImages: "https://m.media-amazon.com/images/I/419o4a13+LL._AC_SY200_.jpg",
                           },
                {
                    slhImages: "https://m.media-amazon.com/images/I/318NxiXG24L._AC_SY200_.jpg",
                                  },
                
                {
                    slhImages: "https://m.media-amazon.com/images/I/31OCZqdW2RL._AC_SY200_.jpg",
                   
                },
                

                {
                    slhImages: "https://m.media-amazon.com/images/I/4111BwD1juL._AC_SY200_.jpg",
                                  },
                {
                    slhImages: "https://m.media-amazon.com/images/I/51-w3QFtt4L._AC_SY200_.jpg",
                                   },
                {
                    slhImages: "https://m.media-amazon.com/images/I/31jbRNUbd7L._AC_SY200_.jpg",
                                   },
           
    ]


    const SecondHLProarraycard = SecondHLProarray.map((SecondHLProavatarcardapp, i) => {
        return <SecondLineHorizontal
             slhtitle={SecondHLProarray[i].slhtitle}
             linkN={SecondHLProarray[i].linkN}
                slhImages={SecondHLProarray[i].slhImages}
                srate={SecondHLProarray[i].srate}
                erate={SecondHLProarray[i].erate}
                time={SecondHLProarray[i].time}
               
            />
    }
      )

    return (


        <div>
            <div className="fisrt_H_L_main">
                <span className="title_first_word">Best Sellers in Home & Kitchen</span>

    <div className="shlpros">
                    <div className="shlfp">
            <OnlyImageHorizontalPro 
                slhImages={SecondHLProarray[0].slhImages}
                 /> 
                    </div>
        <div className="shlap">
            <OnlyImageHorizontalPro
                
                slhImages={SecondHLProarray[1].slhImages}/> 
        </div>
    <div className="shlap">
        <OnlyImageHorizontalPro

            slhImages={SecondHLProarray[2].slhImages} />
    </div>
                    <div className="shlap">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[3].slhImages} />
                    </div>

                    <div className="shlap">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[4].slhImages} />
                    </div>
                    <div className="shlap">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[5].slhImages} />
                    </div>
                    <div className="shlap slhlastpro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[6].slhImages} />
                    </div>




</div>
          </div>
        </div>
    )
}

export default SecondLineHorizontal
