import React from "react"

export default function Main() {
    return (
        <main>
            <section className="home" id="home">
                <img src="/decorationalSlant.svg" className="decorationalSlant" alt="decorational slant graphic"/>
                <img src="/decorationalCircle.svg" alt="decorational circle graphic" className="decorationalCircle" />
                <div className="mainContentAlign">
                    <h1>Your Last Mile Delivery Service For Growth</h1>
                    <p>Our customers are our number one priority and we reverse engineer from that standpoint to ensure that we exceed your last mile delivery expectations.</p>
                    <a className="contactUsButtonHome" href="mailto:zenzenlogistics@gmail.com">Contact Us</a>
                </div>
                <div className="mainImagesAlign">
                    <div className="mainImage1"></div>
                    <div className="mainImage2"></div>
                </div>
            </section>
            <section className="about" id="about">
                <div className="aboutAlignContent">
                    <p className="aboutMiniHeader">About Us</p>
                    <h1>Working With the Most Customer Obsessed Company in the World Has It’s Benefits</h1>
                    <p className="aboutDescription">Zzenzen Logistics was founded in 2021 with the sole objective to be a national leader in the last mile delivery industry. Our goal is to serve the city of Winnipeg with the highest quality of customer care and safety possible. At Zzenzen Logistics, our motto is "Details Matter". Within our company we promote the ideals of accountability and service. </p>
                    <a href="mailto:zenzenlogistics@gmail.com">
                        <p>Contact Us</p>
                    </a>
                </div>
                <img src="/aboutDecorationalSlant.svg" className="aboutDecorationalSlant" alt="aboutDecorationalSlant"/>
            </section> 
            <section className="culture">
                <div className="cultureCards">
                    <div className="cultureCard">
                        <div className="cultureCardIconContainer">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <p className="cultureCardHeader">People</p>
                        <p className="cultureCardDescription">Our focus on our customers is at the core of everything we say and do and our Employees are also our customers!</p>
                    </div>
                    <div className="cultureCard">
                        <div className="cultureCardIconContainer">
                            <i class="fa-solid fa-people-carry-box"></i>
                        </div>
                        <p className="cultureCardHeader">Teamwork and Respect</p>
                        <p className="cultureCardDescription">We support each other from the top down, encouraging employees to embrace the importance of team work!</p>
                    </div>
                    <div className="cultureCard">
                        <div className="cultureCardIconContainer">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        <p className="cultureCardHeader">Diversity</p>
                        <p className="cultureCardDescription">We believe that providing a diverse workforce benefits everyone and that our differences make us stronger!</p>
                    </div>
                </div>
                <img src="/cultureDecorationalBlob.svg" className="cultureDecorationalBlob" alt="culture decorational blob" />
            </section>
            <div className="joinUsButtonAlign">
                <a className="joinUsButton" href="https://amazon-na.fountain.com/amazon-delivery-service-partner/apply/delivery-associate-zenzen-logistics-canada-incorporated-dmw1-zlci" target="_blank" rel="noreferrer">
                    <p>Join Us</p>
                </a>
            </div>
        </main>
    )
}