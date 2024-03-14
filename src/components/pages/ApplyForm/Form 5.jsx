import FormHeader from "./FormHeader";
import TextFormField from "./Custom_Controller_Text";
import DateFormField from "./Custom_Controller_Date";
import React from "react";
import {useFormContext} from "react-hook-form";
import RadioFormField from "./Custom_Controller_Radio";

const Form5 = () => {
    const {control} = useFormContext();

    return (
        <>
            <div className="page">
                <div className="page-contents">
                    <div>
                        <h2>Multimedia Release and Waiver Form</h2>
                    </div>
                    <div className="volunteer-form">
                        <p>I grant permission to Loaves, Fishes & Computers Inc., It’s employees and agents, to take and
                            use visual images of me. Visual images are any type of recording including but not limited
                            to
                            photographs, digital images, drawings, renderings, voices, sounds, video recordings, audio
                            clips,
                            or written descriptions of recordings. I agree that LFC owns the images and all rights
                            related to
                            them. The images may be used in any manner or media without notifying me, such as
                            company-sponsored websites, publications, promotions, broadcast, advertisements, posters,
                            and theater slides, as well as non-university publications or broadcast, electronic or
                            otherwise. I
                            waive any right to inspect or approve the finished images or any printed or electronic
                            matter
                            that may be used with them.
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '150px'
                    }}>
                        <RadioFormField name={"form5_volunteer_yes_no"} label={""} control={control}/>

                    </div>
                    <div>
                        <p>I release LFC and its employees and agents including any firm authorized to publish and/or
                            distribute a finished product containing the images, from any claims, damages or liability
                            arising
                            from the use of the images.
                        </p>
                    </div>
                    <div>
                        <p>I am 18 years of age or older and competent to sign this release. I have read this release
                            before
                            signing, I understand it’s contents, meaning, and impact and freely accept the terms.
                        </p>
                    </div>
                    <div className="volunteer-form">
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form5_volunteer_name"} label={"Name"} control={control}/>
                            <TextFormField name={"form5_volunteer_phone"} label={"Phone"} control={control}/>
                            <DateFormField name={"form5_volunteer_date"} label={"Date"} control={control}/>

                        </div>
                    </div>

                    <div className="volunteer-form">
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form5_volunteer_signature"} label={"Signature"} control={control}/>
                            <TextFormField name={"form5_parent_signature"}
                                           label={"Parent/Guardian Signature under 18 year of age"} control={control}/>
                        </div>
                    </div>

                    <div className="volunteer-form">
                        <TextFormField name={"form5_volunteer_address"} label={"Address"} control={control}/>
                        <TextFormField name={"form5_staff_notes"} label={"Staff or Photographer Notes:"}
                                       control={control}/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Form5;