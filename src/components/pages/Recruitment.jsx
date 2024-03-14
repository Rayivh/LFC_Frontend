import './Recruitment.css'


const Recruitment = () => {
    return (
        <div>
            <div id="modal-overlay">
                <div id="modal">
                    <div className="modal-box-1">
                        <i className="fas fa-desktop"></i>
                        <h1>LFC</h1>
                    </div>
                    <form action="/auth/apply-email-recruitment" method="POST" id="apply-form" className="modal-box-2">
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

            <section id="recruitment-carousel-showcase" className="fade">
                <div className="overlay">
                    <div className="container">
                        <div className="subcontainer recruitment-carousel-section">
                            <div className="recruitment-carousel-showcase-header">
                                <h1>Learn</h1>
                                <h1>About</h1>
                                <h1>LFC's</h1>
                                <h1>Volunteers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="recruitment-positions">
                <div className="professors">
                    <div className="recruitment-position">
                        <div className="recruitment-position-content">
                            <div className="recruitment-img professor"></div>
                            <div className="recruitment-paragraph" >
                                <h1><i className="fas fa-user-tie"></i> PROFESSORS</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere quos ipsum,
                                    consequatur saepe sit error
                                    voluptatem eos a. Inventore magnam vitae temporibus soluta mollitia hic, est tenetur
                                    ex, ullam explicabo eum
                                    veritatis iste voluptatem vel neque accusantium quis blanditiis atque velit aliquid
                                    fugit quisquam eaque! Dicta, in.
                                    Nihil, ea?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="college-students">
                    <div className="recruitment-position">
                        <div className="recruitment-position-content rp">
                            <div className="recruitment-paragraph">
                                <h1><i className="fas fa-university"></i> COLLEGE STUDENTS</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere quos ipsum,
                                    consequatur saepe sit error
                                    voluptatem eos a. Inventore magnam vitae temporibus soluta mollitia hic, est tenetur
                                    ex, ullam explicabo eum
                                    veritatis
                                    iste voluptatem vel neque accusantium quis blanditiis atque velit aliquid fugit
                                    quisquam eaque! Dicta, in. Nihil,
                                    ea?
                                </p>
                            </div>
                            <div className="recruitment-img college-student"></div>
                        </div>
                    </div>
                </div>
                <div className="highschool-students">
                    <div className="recruitment-position">
                        <div className="recruitment-position-content">
                            <div className="recruitment-img highschool-student"></div>
                            <div className="recruitment-paragraph">
                                <h1><i className="fas fa-school"></i> HIGH SCHOOL STUDENTS</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere quos ipsum,
                                    consequatur saepe sit error
                                    voluptatem eos a. Inventore magnam vitae temporibus soluta mollitia hic, est tenetur
                                    ex, ullam explicabo eum veritatis
                                    iste voluptatem vel neque accusantium quis blanditiis atque velit aliquid fugit
                                    quisquam eaque! Dicta, in. Nihil, ea?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="referrals">
                    <div className="recruitment-position">
                        <div className="recruitment-position-content rp">
                            <div className="recruitment-paragraph" >
                                <h1><i className="fas fa-hard-hat"></i> REFERRALS</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere quos ipsum,
                                    consequatur saepe sit error
                                    voluptatem eos a. Inventore magnam vitae temporibus soluta mollitia hic, est tenetur
                                    ex, ullam explicabo eum
                                    veritatis
                                    iste voluptatem vel neque accusantium quis blanditiis atque velit aliquid fugit
                                    quisquam eaque! Dicta, in. Nihil,
                                    ea?
                                </p>
                            </div>
                            <div className="recruitment-img referral"></div>
                        </div>
                    </div>
                </div>
                <div className="recruitment-position  join">
                    <div className="recruitment-container-content">
                        <h1>JOIN OUR TEAM OF VOLUNTEERS!</h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                            assumenda quos iste vel minima exercitationem
                            recusandae eligendi, corrupti soluta dolore expedita voluptatum delectus eum iusto
                            doloribus, in consequatur porro!
                            Eum, saepe doloremque et nihil officia fugit cupiditate. Amet, esse praesentium labore
                            ratione totam commodi unde
                            itaque eligendi sapiente doloribus asperiores.</p>
                        <div className="button-box" id="show-modal-button"><i className="fas fa-user-plus"></i> APPLY
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Recruitment