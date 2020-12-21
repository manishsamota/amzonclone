import React from 'react'
import OnlyImageHorizontalPro from './OnlyImageHorizontalPro.js'
import './SecondLineHorizontal.css'


function TwelfthLHPro() {
    const SecondHLProarray = [
        {

            slhImages: "https://m.media-amazon.com/images/I/41jldAMZ88L._AC_SY200_.jpg",
        },
        {

            slhImages: "https://m.media-amazon.com/images/I/513JvgObcRL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/51VUgJ0YfML._AC_SY200_.jpg",
        },

        {
            slhImages: "https://m.media-amazon.com/images/I/41SXtN+q-kL._AC_SY200_.jpg",

        },


        {
            slhImages: "https://m.media-amazon.com/images/I/41-EzCThdWL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/51iuOyenr5L._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/31+g4PMbTiL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/41ZvgLJtJ2L._AC_SY200_.jpg",
        },

    ]


    const SecondHLProarraycard = SecondHLProarray.map((SecondHLProavatarcardapp, i) => {
        return <TwelfthLHPro
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
                <span className="title_first_word">Up to 30% off | Health & wellness from Indian startups</span>


                <a className="link" src="">See all offers</a>

                <div className="shlpros">
                    <div className="shlfp">
                        <OnlyImageHorizontalPro
                            slhImages={SecondHLProarray[0].slhImages}
                        />
                    </div>
                    <div className="shlap TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[1].slhImages} />
                    </div>
                    <div className="shlap TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[2].slhImages} />
                    </div>
                    <div className="shlap TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[3].slhImages} />
                    </div>

                    <div className="shlap TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[4].slhImages} />
                    </div>
                    <div className="shlap TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[5].slhImages} />
                    </div>
                    <div className="shlap TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[6].slhImages} />
                    </div>

                    <div className="TwelfthLHPro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[7].slhImages} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TwelfthLHPro
