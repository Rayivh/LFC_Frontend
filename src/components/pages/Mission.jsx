import './Mission.css'

const Mission = () => {
    return (
        <div>
            <div id="modal-overlay">
                <div id="modal">
                    <div className="modal-box-1">
                        <i className="fas fa-desktop"></i>
                        <h1>LFC</h1>
                    </div>
                    <form action="/auth/apply-email-mission" method="POST" id="apply-form" className="modal-box-2">
                        <div className="flex">
                            <h1>APPLY TODAY!</h1>
                            <i className="fas fa-times" id="close-modal-btn"></i>
                        </div>
                        <p>Send us your information and a staff member will contact you soon.</p>
                        <input type="text" name="full_name" id="full-name" placeholder="Full name" maxLength="30"
                               required/>
                        <input type="text" name="phone" id="phone" placeholder="Phone" maxLength="12" required/>
                        <input type="email" name="email" id="email" placeholder="Email" maxLength="100" required/>
                        <button type="submit" className="g-recaptcha"
                                data-sitekey="6LfNj-keAAAAACbPznMW6DDIxOGjMpOB6IgCAU39"
                                data-callback="applyFormRequest">SUBMIT
                        </button>
                    </form>
                </div>
            </div>

            <section id="mission" className="fade">
                <div className="overlay">
                    <div className="container">
                        <div className="subcontainer mission-section">
                            <div className="mission-header">
                                <h1>OUR MISSION</h1>
                            </div>
                            <div className="mission-statement-box-container">
                                <div className="mission-box"
                                     data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                    <i className="fas fa-hands-helping"></i>
                                    <h2>Support LFC</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p>Learn More</p>
                                </div>
                                <div className="mission-box"
                                     data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                    <i className="fas fa-user-shield"></i>
                                    <h2>Provide Safe</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p>Learn More</p>
                                </div>
                                <div className="mission-box"
                                     data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                    <i className="far fa-lightbulb"></i>
                                    <h2>Promote STEM</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p>Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="who-we-are">
                <div className="container">
                    <div className="subcontainer who-we-are-section">
                        <div className="who-we-are-img"></div>
                        <div className="who-we-are-info">
                            <h1>WHO WE ARE</h1>
                            <p>The LFC Volunteers is the volunteer branch of Loaves, Fishes, and Computers. We are based
                                in Salinas, CA, with around
                                XXX members at any given time and over XXX volunteers. Since our founding, LFC
                                volunteers have donated over 110,000
                                hours of time. LFC volunteers comprise 95% of the workforce at LFC.</p>
                            <div className="button-box" id="show-modal-button" ><i
                                className="fas fa-user-plus"></i> APPLY
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="positions">
                <div className="container">
                    <div className="subcontainer positions-section">
                        <div className="positions-header">
                            <h1>POSITIONS</h1>
                        </div>
                        <div className="positions-boxes">
                            <div className="position-box"
                                 data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                <div className="position-img refurbish">
                                    <h2>Refurbish</h2>
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <div className="position-box tec"
                                 data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                <div className="position-img technician">
                                    <h2>Technician</h2>
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <div className="position-box des"
                                 data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                <div className="position-img desk">
                                    <h2>Front Desk</h2>
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <div className="position-box"
                                 data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor voluptas est sint earum. Praesentium illo">
                                <div className="position-img expert">
                                    <h2>Expert Positions</h2>
                                    <p>Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mission