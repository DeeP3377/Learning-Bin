import React from "react";
const HomeKeader=()=>{
    return(
        <>
            <section id="about">
                <div className="about-wrapper container">
                    <div className="about-text">
                    <p className="small" style={{fontSize : '48px'}}>About Us</p>
                    <h2>We've beem making healthy food last for 10 years</h2>
                    <p style={{fontSize : '22px'}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
                        eos omnis, nobis dignissimos perferendis et officia architecto,
                        fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
                        maiores praesentium soluta alias asperiores saepe commodi
                        consequatur? Perferendis est placeat facere aspernatur!
                    </p>
                    </div>
                    <div className="about-img">
                    <img src={img1} alt="food" />
                    </div>
                </div>
            </section>
        </>
    )
}