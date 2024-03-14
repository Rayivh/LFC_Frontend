import {useFormContext} from "react-hook-form";
import TextFormField from "./Custom_Controller_Text";
import DateFormField from "./Custom_Controller_Date";
import React from "react";

const Form4 = () => {
    const {control} = useFormContext();
    return (
        <>
            <div className="page green-page">
                <div className="page-contents green-page-contents">
                    <div>
                        <div>
                            <h2>Your Copy: Loaves, Fishes & Computers, Inc.<br/>Waiver and Release of Liability</h2>
                        </div>
                    </div>
                    <div className="green-form-contents">
                        <div>
                            <p>Waiver and Release of Liability: In connection with my voluntary involvement in
                                activities
                                undertaken for, and/or with the participation and support of Loaves, Fishes & Computers,
                                Inc.,
                                I, the undersigned, hereby agree, for myself, my heirs, executors, administrators or
                                assigns, to
                                release and discharge Loaves, Fishes & Computers, Inc., its officers and directors,
                                members,
                                partners, funders, employees, agents, and volunteers (Releasees) from all claims,
                                demands,
                                and actions from injuries sustained to my person and/or property as a result of my
                                involvement
                                in such activities, whether or not resulting from negligence.
                            </p>
                        </div>
                        <div>
                            <p>I agree to release and hold Loaves, Fishes & Computers, Inc. and its Releasees harmless
                                from any cause or action, claims or suit arising there from. I hereby attest that my
                                attendance
                                and involvement in such activities is voluntary, that I am participating at my own risk
                                and
                                that I
                                have read the foregoing terms and conditions of this release. I understand that I will
                                receive no
                                payment for my services at Loaves, Fishes & Computers, Inc. I agree that I will perform
                                activities that I am comfortable performing and will follow all instructions. I also
                                grant
                                full
                                permission to Loaves, Fishes & Computers, Inc. and their Releasees, to forever use
                                photographs, videos, audios or quotations from me in legitimate accounts and promotion
                                of
                                Loaves, Fishes & Computers, Inc. activities, without identification of me by name (or
                                with
                                name, at your discretion),and without compensation.

                            </p>
                        </div>
                        <div>
                            <p>I have read the above release and state that I have understood it and that I am
                                voluntarily
                                signing it without any inducement or representation from any member of the staff. I
                                understand
                                that I will not be held liable for any action, wrongdoing, or unintended damage to
                                property
                                of
                                Loaves, Fishes & Computers, Inc. I further understand that I am free to stop all
                                volunteering at
                                my discretion and that I can be dismissed of my volunteering opportunity at any time for
                                any
                                reason or for no reason whatsoever.

                            </p>
                        </div>
                        <div>
                            <p>I have read all the above and agree to abide by the policies of Loaves, Fishes &
                                Computers
                            </p>
                        </div>
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form4_volunteer_initials"} label={"Initials"} control={control}/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>

            <div className="page green-page">
                <div className="page-contents green-page-contents">
                    <div>
                        <div>
                            <h2>LFC Copy: Loaves, Fishes & Computers, Inc.<br/>Waiver and Release of Liability</h2>
                        </div>
                    </div>
                    <div className="green-form-contents">
                        <div>
                            <p>Waiver and Release of Liability: In connection with my voluntary involvement in
                                activities
                                undertaken for, and / or with the participation and support of Loaves, Fishes &
                                Computers,
                                Inc., I, the undersigned, hereby agree, for myself, my heirs, executors, administrators
                                or
                                assigns, to release and discharge Loaves, Fishes & Computers, Inc., its officers and
                                directors,
                                members, partners, funders, employees, agents, and volunteers (Releasees) from all
                                claims,
                                demands, and actions from injuries sustained to my person and/or property as a result of
                                my
                                involvement in such activities, whether or not resulting from negligence.
                            </p>
                        </div>
                        <div>
                            <p>I agree to release and hold Loaves, Fishes & Computers, Inc. and its Releasees harmless
                                from any cause or action, claims or suit arising there from. I hereby attest that my
                                attendance
                                and involvement in such activities is voluntary, that I am participating at my own risk
                                and
                                that I
                                have read the foregoing terms and conditions of this release. I understand that I will
                                receive no
                                payment for my services at Loaves, Fishes & Computers, Inc. I agree that I will perform
                                activities that I am comfortable performing and will follow all instructions. I also
                                grant
                                full
                                permission to Loaves, Fishes & Computers, Inc. and their Releasees, to forever use
                                photographs, videos, audios or quotations from me in legitimate accounts and promotion
                                of
                                Loaves, Fishes & Computers, Inc. activities, without identification of me by name (or
                                with
                                name, at your discretion),and without compensation.
                            </p>
                        </div>
                        <div>
                            <p>I have read the above release and state that I have understood it and that I am
                                voluntarily
                                signing it without any inducement or representation from any member of the staff. I
                                understand
                                that I will not be held liable for any action, wrongdoing, or unintended damage to
                                property
                                of
                                Loaves, Fishes & Computers, Inc. I further understand that I am free to stop all
                                volunteering at
                                my discretion and that I can be dismissed of my volunteering opportunity at any time for
                                any
                                reason or for no reason whatsoever.
                            </p>
                        </div>
                        <div className="volunteer-form">
                            <div className="volunteer-form-subcontainer">
                                <TextFormField name={"form4_volunteer_name"} label={"Name"} control={control}/>
                                <DateFormField name={"form4_volunteer_date"} label={"Date"} control={control}/>
                                <TextFormField name={"form4_volunteer_signature"} label={"Signature"} control={control}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>

            <div className="page">
                <div className="page-contents">
                    <div>
                        <p id="volunteer-border"></p>
                        <p>Parent/ Guardians of Minors</p>
                        <p>I, the undersigned am the parent or guardian of a minor volunteer, under eighteen(18) of
                            age. I consent to my child volunteering at Loaves, Fishes & Computers, Inc. and agree to the terms and conditions as stated above.
                        </p>
                    </div>
                    <div className="volunteer-form">
                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form4_child_name"} label={"Child Name"} control={control}/>
                        </div>

                        <div className="volunteer-form-subcontainer">
                            <TextFormField name={"form4_parent_name"} label={"Parent Name"} control={control}/>
                            <DateFormField name={"form4_parent_date"} label={"Date"} control={control}/>
                            <TextFormField name={"form4_parent_signature"} label={"Parent Signature"} control={control}/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
}

export default Form4;