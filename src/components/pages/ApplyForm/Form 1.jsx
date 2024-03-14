// Page 1 - Volunteer Commitment Form_ COVID-19
import './webform.css'
import FormHeader from "./FormHeader";
import {useFormContext} from 'react-hook-form';
import React from "react";
import TextFormField from "./Custom_Controller_Text";
import DateFormField from "./Custom_Controller_Date";

const Form1 = () => {
    const { control } = useFormContext();


    return (
        <>

            <div className="page">
                <div className="page-contents">
                    <FormHeader/>
                    <div>
                        <h2>Volunteer Commitment Form: COVID-19</h2>
                    </div>
                    <div>
                        <p>First and foremost, <strong>welcome to LFC</strong> and <strong>welcome back</strong> to
                            some! We
                            are so
                            happy to have you volunteer
                            with us. Since the COVID-19 pandemic, there have been changes in the way LFC looks as well
                            as
                            new
                            practices and protocols regarding the volunteer program. We understand that these changes
                            may be
                            difficult and we are here to support you. Our goal is to collaboratively ensure you feel
                            safe
                            and secure
                            so
                            together we can navigate the complexities of our “new normal”.
                        </p>
                    </div>

                    <div>
                        <p>Here are some things we are implementing to help keep LFC safe and to support you:</p>
                        <li>Must wear a face mask while volunteering</li>
                        <li>Practice social distancing at all times.</li>
                        <li>Clock in through the Humanity app on your phone, if you sign in through our
                            computer then please sanitize the keyboard after every use.
                        </li>
                        <li>Receive your assigned volunteer position and station at the beginning of every shift:
                            volunteers are only allowed to sit at the labeled “workstation”.
                        </li>
                        <li>More frequent cleaning and sanitizing at all volunteer stations: you must clean your work
                            station before starting, throughout your shift, and before leaving LFC.
                        </li>
                        <li>More frequent hand washing and hand sanitizing throughout your shift: you must wash
                            and/or sanitize your hands after using the bathroom, after using the snack closet/fridge,
                            after using the coffee table, and multiple times throughout your shift.
                        </li>
                        <li>Access to hand sanitizer throughout LFC: one hand sanitizing station across from the
                            bathroom, one hand sanitizing station before entering the refurb/burn-in department, and
                            one hand sanitizing station in the back room.
                        </li>
                        <li><strong>You may not come to LFC unless you have an approved scheduled shift or you are
                            interested in purchasing from us: volunteers will not be able to come in whenever
                            they’d like.</strong>
                        </li>
                        <li>New limits on the number of people allowed to gather in LFC: no more than 17 volunteers
                            allowed in the building at any given time, 7-refurb, 3-burn in, 2-repairs, 2-front
                            desk, 3-Chromebooks/backroom
                        </li>
                    </div>
                </div>
            </div>
            <br/>
            <div className="page">
                <div className="page-contents">
                    <div>
                        <p>Here are some things we expect you to implement to help keep LFC safe:</p>
                        <li><strong>Stay/go home if you feel sick. If you have any symptoms of COVID-19, please stay
                            home for 14 days after your symptoms have cleared up.</strong></li>
                        <li>Wash your hands often, and for the recommended 20 seconds.</li>
                        <li>Stay at least 6 feet apart when moving through LFC and while speaking to others.
                        </li>
                        <li>You may, but are not required to, wear gloves while volunteering.
                        </li>
                        <li>Be considerate of others (remember, we’re all in this together).
                        </li>
                    </div>
                    <div>
                        <li>Call, email, message, or video conference LFC: do not arrive unannounced.
                        </li>
                        <li>Tell others to participate in these safety measures if they are not.</li>
                    </div>
                    <div>
                        <strong>Speak with any of the staff members if you have any questions or concerns:</strong>
                    </div>

                    <div>
                        <p>*Staff Members:</p>
                        <li><strong>Gabriela López Chávez - Executive Director</strong><br/><a href="#">gabriela@loavesfishescomputers.org
                        </a>
                        </li>
                        <li><strong>Evens Lanot-Program Delivery and Operations Manager</strong><br/><a href="#">evens@loavesfishescomputers.org

                        </a>
                        </li>
                        <li><strong>Azalea Power-Digital Fluency Project Manager</strong><br/><a href="#">azalea@loavesfishescomputers.org

                        </a>
                        </li>
                        <li><strong>Junior Muñoz- Refurbishing Manager</strong><br/><a href="#">juniormunoz@loavesfishescomputers.org

                        </a>
                        </li>
                        <li><strong>Andrea Cruz Montes- Computer Literacy Instructor & Coordinator</strong><br/><a
                            href="#">andrea@loavesfishescomputers.org

                        </a>
                        </li>
                        <li><strong>Marci Yeater-AmeriCorps VIP Fellow (Volunteer Coordinator)
                        </strong><br/><a href="#">volunteer@loavesfishescomputers.org
                        </a>
                        </li>
                    </div>
                    <div>
                        <p>By signing below you are acknowledging that you have read, understand, and commit to
                            implementing
                            the above guidelines to the best of your ability while at LFC.</p>
                    </div>
                    <div className="volunteer-form">
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form1_volunteer_name"} label={"Name"} control={control}/>
                            <DateFormField name={"form1_volunteer_date"} label={"Date"} control={control}/>
                            <TextFormField name={"form1_volunteer_signature"} label={"Signature"} control={control}/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="page">
                <div className="page-contents">
                    <div>
                        <p>Parent/Guardians of Minors</p>
                    </div>
                    <div>
                        <p>I, the undersigned, am the parent or guardian of a minor volunteer, under eighteen years of
                            age.
                            I consent to my child volunteering at Loaves, Fishes & Computers post COVID-19 under the
                            guidelines stated
                            above.
                        </p>
                    </div>
                    <div className="volunteer-form">
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form1_parent_name"} label={"Parent Name"} control={control}/>
                            <DateFormField name={"form1_parent_date"} label={"Date"} control={control}/>
                            <TextFormField name={"form1_parent_signature"} label={"Parent Signature"} control={control}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form1;