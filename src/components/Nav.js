import React from "react"

export default function Nav(props) {
    return (
        <>
            <nav>
                <div className="navItems">
                    <img src="/logo.svg" className="navLogo" alt="company logo"/>
                    <div className="navTextItems">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="https://amazon-na.fountain.com/amazon-delivery-service-partner/apply/delivery-associate-zenzen-logistics-canada-incorporated-dmw1-zlci" target="_blank" rel="noreferrer">Portal</a>
                    </div>
                </div>
                <a href="mailto:zenzenlogistics@gmail.com" className="contactButton" target="_blank" rel="noreferrer">
                    <p>Contact Us</p>
                </a>
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.dropdown ? "hamburgerMenu hamburgerMenuOpen" : "hamburgerMenu hamburgerMenuClosed"} onClick={props.changeDropdownState}>
                    <rect width="35" height="4" rx="2"/>
                    <rect y="13" width="35" height="4" rx="2"/>
                    <rect y="26" width="35" height="4" rx="2"/>
                </svg>
            </nav>
            <div className={props.dropdown ? "dropdown dropdownOpen" : "dropdown dropdownClosed"}>
                <div className="dropdownElements" onClick={props.changeDropdownState}>
                    <a href="#home" className="dropdownElement">
                        <p>Home</p>
                    </a>
                    <a href="#about" className="dropdownElement" onClick={props.changeDropdownState}>
                        <p>About</p>
                    </a>
                    <a href="https://amazon-na.fountain.com/amazon-delivery-service-partner/apply/delivery-associate-zenzen-logistics-canada-incorporated-dmw1-zlci" target="_blank" rel="noreferrer" className="dropdownElement">
                        <p>Portal</p>
                    </a>
                    <a className="dropdownContactButtonAlign">
                        <a href="mailto:zenzenlogistics@gmail.com" className="dropdownContactButton" target="_blank" rel="noreferrer">
                            <p>Contact Us</p>
                        </a>
                    </a>
                </div>
            </div>
        </>
    )
}