import {Link} from "@mui/material";

const StyledIcon = ({ href, icon: IconComponent, sx }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
        <IconComponent sx={{
            padding: 1.5,
            color: "#000",
            borderColor: '#000',
            border: 1.5,
            borderRadius: '50%',
            transition: 'color 0.3s, borderColor 0.3s',
            '&:hover': {
                color: '#86ac41', // Change color on hover
                borderColor: '#86ac41'
            },
            ...sx,
        }}/>
    </Link>
);

export default StyledIcon;