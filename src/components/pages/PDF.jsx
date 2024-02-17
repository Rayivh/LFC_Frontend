import React, {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import {Button, Typography} from "@mui/material";
import axios from 'axios';
import Cookies from 'js-cookie';

const PDF = () => {

    const apply = async () => {

    }
    return (
        <>
            <iframe
                src="/pdf/LFC_Forms_Edit_Version.pdf"
                width="100%"
                height="600px"
                loading="lazy"
                title="PDF-file"
            ></iframe>

            <Button onClick={() => apply()}>Apply</Button>
        </>
    );
};

export default PDF;
