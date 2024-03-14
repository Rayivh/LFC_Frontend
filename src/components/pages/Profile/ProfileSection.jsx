import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button} from '@mui/material';
import './Profile.css'
import DynamicDetailDate from "./DynamicDetailDate";
import DynamicDetail from "./DynamicDetail";
import DynamicDetailList from "./DynamicDetailArray";

const ProfileSection = ({ volunteer, user, setVolunteer}) => {
    const motivationField = [{label: 'Motivation', name: "motivation"}]
    const identityFields = [
        {label: 'First Name', name: 'first_name'},
        {label: 'Last Name', name: 'last_name'},
        {label: 'Gender', name: 'gender'},
        {label: 'Birthday', name: 'birthday', type: 'date'},
        {label: 'Place of Birth', name: 'place_of_birth'}
    ];
    const addressFields = [
        {label: 'Street', name: 'street'},
        {label: 'City', name: 'city'},
        {label: 'State', name: 'state'}
    ];
    const contactFields = [
        { label: 'First Name', name: 'first_name' },
        { label: 'Last Name', name: 'last_name' },
        { label: 'Phone', name: 'phone' },
        { label: 'Relation', name: 'relation' },
    ];
    const workFields = [
        { label: 'Company', name: "company"},
        { label: 'Title', name: "title"},
        { label: 'Years', name: "years"},
        { label: 'Duties', name: "duties"},
    ];

    const languagesField = [{label: 'Language', name: "languages"}]
    const skillsField = [{label: 'Skills', name: "skills"}]

    useEffect(() => {
        if (volunteer.volunteer_id && volunteer.address_id && volunteer.em_contact_id) {
            console.log("Profile Component Mounted", volunteer.volunteer_id, volunteer.address_id, volunteer.em_contact_id)
        }
    }, [volunteer.volunteer_id, volunteer.address_id, volunteer.em_contact_id]);

    return (
        <Box className="profile-info-container">
            <DynamicDetailDate data={volunteer} onChange={setVolunteer} title="Motivation" fields={motivationField}/>
            <DynamicDetailDate data={volunteer} onChange={setVolunteer} title="Identity" fields={identityFields}/>

            <DynamicDetail id={volunteer.address_id} url="address" title="Address" fields={addressFields}/>
            <DynamicDetail id={volunteer.em_contact_id} url="contact" title="Emergency Contact" fields={contactFields}/>
            <DynamicDetailList id={volunteer.volunteer_id} url="prevwork" title="Experience" fields={workFields}/>

            <DynamicDetailDate data={volunteer} onChange={setVolunteer} title="Skills" fields={skillsField}/>
            <DynamicDetailDate data={volunteer} onChange={setVolunteer} title="Languages" fields={languagesField}/>
        </Box>
    )

};

export default ProfileSection;
