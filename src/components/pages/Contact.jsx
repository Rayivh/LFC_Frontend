import './Contact.css'


const Contact = () => {
    return (
        <div>
            <section id="contact-map" className="fade">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.4750914153915!2d-121.66024298471399!3d36.663076579977066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808df8f1e6f0cc77%3A0xc4b899aabe123623!2sValley%20Center%20Shopping%20Center%2C%20938%20S%20Main%20St%2C%20Salinas%2C%20CA%2093901!5e0!3m2!1sen!2sus!4v1637120707811!5m2!1sen!2sus"
                    width="100%" height="100%" allowFullScreen="" loading="eager">
                </iframe>
            </section>

            <section id="contact-us">
                <div className="contact-us-container">
                    <div className="contact-us-content">
                        <div className="contact-us-info-boxes">
                            <div className="contact-us-info-box">
                                <div>
                                    <h1>Contact Info</h1>
                                </div>
                                <div className="contact-us-info-box-detail">
                                    <div >
                                        <strong>Address:</strong>
                                    </div>
                                    <div>
                                        <p>938 S Main Street</p>
                                        <p>Salinas, CA 93901</p>
                                        <p>United States</p>
                                    </div>
                                </div>
                                <div className="contact-us-info-box-detail">
                                    <div>
                                        <strong>Hours:</strong>
                                    </div>
                                    <div>
                                        <p>Tues - Sat 10AM - 4PM</p>
                                    </div>
                                </div>
                                <div className="contact-us-info-box-detail">
                                    <div >
                                        <strong>Phone:</strong>
                                    </div>
                                    <div>
                                        <p>(831) 393-9260</p>
                                    </div>
                                </div>
                                <div className="contact-us-info-box-detail">
                                    <div >
                                        <strong>Email:</strong>
                                    </div>
                                    <div>
                                        <p>volunteer@loavesfishescomputers.org</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-us-info-box">
                                <div>
                                    <h1>Get Social</h1>
                                </div>
                                <div className="contact-us-social-media">
                                    <a href="https://www.youtube.com/user/LoavesFishesComputer"
                                       className="fab fa-youtube" target="_blank"></a>
                                    <a href="https://www.facebook.com/loavesfishescomputers" className="fab fa-facebook"
                                       target="_blank"></a>
                                    <a href="https://www.instagram.com/lfc.salinasca/" className="fab fa-instagram"
                                       target="_blank"></a>
                                    <a href="https://www.linkedin.com/company/loaves-fishes-&-computers-inc-/about/"
                                       className="fab fa-linkedin" target="_blank"></a>
                                </div>
                            </div>
                        </div>
                        <form action="/auth/contact-us-email" method="POST" id="contact-us-form">
                            <div>
                                <h1>Get in Touch with Us</h1>
                            </div>
                            <div>
                                <p>Want to learn more about the work we do at Loaves Fishes Computers? Or perhaps you
                                    want to setup a meeting for a tour around the office? Contact us today!</p>
                            </div>
                            <div className="contact-us-form-detail">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" id="name" maxLength="30" required/>
                            </div>
                            <div className="contact-us-form-detail">
                                <label htmlFor="user_email">Your Email</label>
                                <input type="email" name="email" id="email" maxLength="100" required/>
                            </div>
                            <div className="contact-us-form-detail">
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="g-recaptcha"
                                        data-sitekey="6LfNj-keAAAAACbPznMW6DDIxOGjMpOB6IgCAU39"
                                        data-callback="contactFormRequest">SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact