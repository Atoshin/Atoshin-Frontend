import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function YoutubeVideoModal({open, setOpen}) {
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={open}
            onClick={handleClose}
        >
            <iframe width="1350" height="480" src="https://www.youtube.com/embed/pxX1E6ohM7Q"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </Backdrop>
    );
}
