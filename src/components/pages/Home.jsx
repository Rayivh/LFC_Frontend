import React from 'react';
import HomeCarousel from "../Carousel.jsx";
import {Box, Button, Modal, Stack, Typography} from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
}
const modalbox1 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    bgcolor: '#7da3a1'
}

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <HomeCarousel/>

            <Box sx={{
                width: '85%',
                margin: 'auto',
                display: 'flex',
            }}>
                <Stack
                    paddingY={3}
                    spacing={2}
                    justifyContent="flex-start"
                >
                    <Typography variant="h4" >
                        OUR MISSION!
                    </Typography>
                    <Typography variant="h5" >
                        LFC volunteers and trains volunteers to serve in one of LFC’s departments. We serve as a
                        liaison between the organization and those serving.
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{
                width: '85%',
                margin: 'auto',
                display: 'flex',
            }}>
                <Button onClick={handleOpen}>APPLY</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Stack direction="row" sx={style}>
                        <Box sx={modalbox1}>
                            <h1>LFC</h1>
                        </Box>
                        <form action="/auth/apply-email-home" method="POST" id="apply-form" className="modal-box-2">
                            <div className="flex">
                                <h1>APPLY TODAY!</h1>
                                <i className="fas fa-times" id="close-modal-btn"></i>
                            </div>
                            <p>Send us your information and a staff member will contact you soon.</p>
                            <input type="text" name="full_name" id="full-name" placeholder="Full name" maxLength="30"
                                   required/>
                            <input type="text" name="phone" id="phone" placeholder="Phone" maxLength="12" required/>
                            <input type="email" name="email" id="email" placeholder="Email" maxLength="100" required/>
                        </form>
                    </Stack>
                </Modal>

            </Box>
        </>
    )
}


export default Home