import FormHeader from "./FormHeader";
import TextFormField from "./Custom_Controller_Text";
import DateFormField from "./Custom_Controller_Date";
import React from "react";
import {useFormContext} from "react-hook-form";

const Form3 = () => {
    const {control} = useFormContext();
    return (
        <>
            <div className="page">
                <div className="page-contents">
                    <FormHeader/>
                    <div>
                        <h2 style={{textAlign: 'left'}}>Volunteer Commitment Form: Hours</h2>
                    </div>
                    <div>
                        <p>By choosing Loaves, Fishes & Computers (LFC) as your site for
                            volunteering it is important to understand how much your time means to
                            us. LFC is a volunteer-based organization and therefore you are very valuable to our
                            success!
                            Whether or not
                            you think you’ll be a long- or short-term volunteer we want to know what your goal number of
                            hours is. This
                            refers to how many hours you’d like to volunteer at LFC total, and by providing this number
                            you
                            will not be
                            subjected to serve that many hours. This data will be used for retention rate data and to
                            find
                            out if you have
                            reached your goal! Thank you for participating.
                        </p>
                    </div>
                    <div className="volunteer-form">
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form3_volunteer_name"} label={"Name"} control={control}/>
                            <DateFormField name={"form3_volunteer_date"} label={"Date"} control={control}/>
                            <TextFormField name={"form3_volunteer_signature"} label={"Signature"} control={control}/>
                        </div>
                        <div className="volunteer-form-subcontainer">
                            <div>
                                <TextFormField name={"form3_volunteer_goal"} label={"Desired Number of Hours (Total)"} control={control}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Loaves, Fishes & Computers is a nonprofit organization dedicated to helping local individuals
                            and
                            families
                            overcome the digital and economic divides. LFC provides low-to-no-cost computer systems,
                            digital
                            literacy
                            classes, hands-on technology workshops, and technical assistance/computer repair for people
                            who
                            qualify as
                            low-income including individuals, families, seniors, veterans, children, people with
                            disabilities and nonprofit
                            organizations. We also provide volunteers an encouraging and gratifying place to learn about
                            Computer Science
                            and Information Technology.
                        </p>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
}

export default Form3;