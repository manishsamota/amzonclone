import React from 'react'
import OnlyImageHorizontalPro from './OnlyImageHorizontalPro.js'
import './SecondLineHorizontal.css'

function SixLineHorizontal() {
 
    const SecondHLProarray = [
        {

            slhImages: "https://m.media-amazon.com/images/I/31XpEzz8oVL._AC_SY200_.jpg",
        },
        {

            slhImages: "https://m.media-amazon.com/images/I/41tGEvMDdLL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/31+d4s0JREL._AC_SY200_.jpg",
        },

        {
            slhImages: "https://m.media-amazon.com/images/I/317lyvPC6vL._AC_SY200_.jpg",

        },


        {
            slhImages: "https://m.media-amazon.com/images/I/31WbYQd8PbL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/41CW6vdWqmL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/31vTxfl86kL._AC_SY200_.jpg",
        },

    ]


    const SecondHLProarraycard = SecondHLProarray.map((SecondHLProavatarcardapp, i) => {
        return <SixLineHorizontal
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
                <span className="title_first_word">Up to 60% off | Unboxed & like-new </span>
                <a className="link" src="">See all deals</a>

                <div className="shlpros">
                    <div className="shlfp">
                        <OnlyImageHorizontalPro
                            slhImages={SecondHLProarray[0].slhImages}
                        />
                    </div>
                    <div className="shlap sixhsp">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[1].slhImages} />
                    </div>
                    <div className="shlap sixhtp">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[2].slhImages} />
                    </div>
                    <div className="shlap sixhfp">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[3].slhImages} />
                    </div>

                    <div className="shlap sixhsip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[4].slhImages} />
                    </div>
                    <div className="shlap sixhsep">
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

export default SixLineHorizontal
