import React from "react"

export default function Main() {
    return (
        <main>
            <section className="home" id="home">
                <img src="/decorationalSlant.svg" className="decorationalSlant" alt="decorational slant graphic"/>
                <img src="/decorationalCircle.svg" alt="decorational circle graphic" className="decorationalCircle" />
                <div className="mainContentAlign">
                    <h1>We are an Exclusive Delivery Service Partner of Amazon Canada</h1>
                    <p className="main-description">Our Employees are a big part of the customer base we serve and our customers are our most important asset and our number one priority.  We reverse engineer from that standpoint to ensure we exceed our customers last mile delivery expectations</p>
                    <a className="contactUsButtonHome" href="mailto:zenzenlogistics@gmail.com" target="_blank" rel="noreferrer">Contact Us</a>
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
                    <p className="aboutDescription">
                        Zzenzen Logistics Canada was founded in 2021 with the objective of to a national leader in the Last Mile Delivery Industry.
                        <br /><br />
                        Our goal is to serve our customers with the highest quality of customer care and safety possible. In addition, we strive to be the best corporate citizen that we can be by providing ample ongoing employment opportunities for the areas that we serve. We believe in a diverse and inclusive workforce and we are always looking for dynamic customer centric individuals to join our team!</p>
                    <a href="mailto:zenzenlogistics@gmail.com" target="_blank" rel="noreferrer">
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
                <a className="joinUsButton" href="https://amazon-na.fountain.com/amazon-delivery-service-partner/apply/delivery-associate-zenzen-logistics-canada-inc-dvv2-zlci" target="_blank" rel="noreferrer">
                    <p>Join Us</p>
                </a>
            </div>
            <div className="gallery-align">
                <section className="gallery">
                    <img src="/gallery/gallery_4.jpg" alt="Gallery Image" />
                    <img src="/gallery/gallery_2.jpg" alt="Gallery Image" />
                    <img src="/gallery/gallery_3.jpg" alt="Gallery Image" />
                    <img src="/gallery/gallery_1.png" alt="Gallery Image" />
                    <img src="/gallery/gallery_5.jpg" alt="Gallery Image" />
                    <img src="/gallery/gallery_6.jpg" alt="Gallery Image" />
                </section>
            </div>  
        </main>
    )
}