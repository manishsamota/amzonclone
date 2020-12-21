import React from 'react'
import OnlyImageHorizontalPro from './OnlyImageHorizontalPro.js'
import './SecondLineHorizontal.css'

function NineLHP() {
    const SecondHLProarray = [
        {

            slhImages: "https://m.media-amazon.com/images/I/3152mgC5cjL._AC_SY200_.jpg",
        },
        {

            slhImages: "https://m.media-amazon.com/images/I/41jzjo0hDwL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/51mytH7t-cL._AC_SY200_.jpg",
        },

        {
            slhImages: "https://m.media-amazon.com/images/I/416dD5gUvOL._AC_SY200_.jpg",

        },


        {
            slhImages: "https://m.media-amazon.com/images/I/51haPSFIjZL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/51fSFm3VIBL._AC_SY200_.jpg",
        },
       

    ]


    const SecondHLProarraycard = SecondHLProarray.map((SecondHLProavatarcardapp, i) => {
        return <NineLHP
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
                <span className="title_first_word">Up to 60% off | Products from Indian startups</span>


                <a className="link" src="">See all offers</a>

                <div className="shlpros">
                    <div className="shlfp">
                        <OnlyImageHorizontalPro
                            slhImages={SecondHLProarray[0].slhImages}
                        />
                    </div>
                    <div className="shlap ninhaip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[1].slhImages} />
                    </div>
                    <div className="shlap ninhaip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[2].slhImages} />
                    </div>
                    <div className="shlap ninhaip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[3].slhImages} />
                    </div>

                    <div className="shlap ninhaip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[4].slhImages} />
                    </div>
                    <div className="shlap ninhsip ninhaip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[5].slhImages} />
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default NineLHP
