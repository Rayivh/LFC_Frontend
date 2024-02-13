import React from "react";
import {ClickAwayListener, Grow, MenuList, Paper, Popper} from "@mui/material";


const CustomDropdown = ({ children, toggleButton }) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const clonedChildren = React.Children.map(children, (child) =>
        React.cloneElement(child, { onClick: handleClose })
    );

    // Clone the toggleButton to include handleClick
    const ToggleButton = React.cloneElement(toggleButton, {
        ref: anchorRef,
        id: "composition-button",
        'aria-controls': open ? 'composition-menu' : undefined,
        'aria-expanded': open ? 'true' : undefined,
        'aria-haspopup': "true",
        onClick: handleToggle
    });

    return (
        <>
            {ToggleButton}

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                >
                                    {clonedChildren}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};
export default CustomDropdown;