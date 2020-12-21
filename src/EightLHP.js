import React from 'react'
import OnlyImageHorizontalPro from './OnlyImageHorizontalPro.js'
import './SecondLineHorizontal.css'


function EightLHP() {
    const SecondHLProarray = [
        {

            slhImages: "https://m.media-amazon.com/images/I/412xwkkxTsL._AC_SY200_.jpg",
        },
        {

            slhImages: "https://m.media-amazon.com/images/I/51ufe-rSduL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/41NgoA+YS7L._AC_SY200_.jpg",
        },

        {
            slhImages: "https://m.media-amazon.com/images/I/41XdRy2BxfL._AC_SY400_.jpg",

        },


        {
            slhImages: "https://m.media-amazon.com/images/I/51mIv4H149L._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/61f4lvZxBDL._AC_SY400_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/41nU4iqzBxL._AC_SY200_.jpg",
        },
        {
            slhImages: "https://m.media-amazon.com/images/I/41+sPT8vIwL._AC_SY200_.jpg",
        },

    ]


    const SecondHLProarraycard = SecondHLProarray.map((SecondHLProavatarcardapp, i) => {
        return <EightLHP
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
                <span className="title_first_word">Up to 70% off | Clothing, bags & more from Indian startups</span>


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
                    <div className="shlap sixhsip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[5].slhImages} />
                    </div>
                    <div className="shlap sixhsip">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[6].slhImages} />
                    </div>
                    <div className="shlap">
                        <OnlyImageHorizontalPro

                            slhImages={SecondHLProarray[7].slhImages} />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default EightLHP
