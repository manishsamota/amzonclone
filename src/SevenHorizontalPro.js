import React from 'react'
import OnlyImageHorizontalPro from './OnlyImageHorizontalPro.js'
import './SecondLineHorizontal.css'

function SevenHorizontalPro() {
    const SecondHLProarray = [
        {

            slhImages: "https://m.media-amazon.com/images/I/61HAb7mz1-L._AC_SY200_.jpg",
        },
        {

            slhImages: "https://m.media-amazon.com/images/I/41TpEE0H7lL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg",
        },

        {
            slhImages: "https://m.media-amazon.com/images/I/31QRFk+9r0L._AC_SY200_.jpg",

        },


        {
            slhImages: "https://m.media-amazon.com/images/I/41SucQ6QKsL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/41CIWUHOXVL._AC_SY200_.jpg",
        },
      

    ]


    const SecondHLProarraycard = SecondHLProarray.map((SecondHLProavatarcardapp, i) => {
        return <SevenHorizontalPro
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
                <span className="title_first_word">Up to 60% off | Home essentials from Indian startups</span>

            
                <a className="link" src="">See all offers</a>

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
                    <div className="shlap sixhsep slhlastpro">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[5].slhImages} />
                    </div>
                   


                </div>
            </div>
        </div>
    )
}

export default SevenHorizontalPro
