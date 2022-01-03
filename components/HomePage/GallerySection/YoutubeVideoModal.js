import {useRef} from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function YoutubeVideoModal({open, setOpen}) {
    const ref = useRef();
    const handleClose = () => {
        setOpen(false);
        ref.current.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    };


    return (
        <Backdrop
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: 'rgba(0,0,0,0.75)'}}
            open={open}
            onClick={handleClose}
        >
            <iframe ref={ref} width="853" height="480"
                    src="https://www.youtube.com/embed/pxX1E6ohM7Q?enablejsapi=1&version=3&playerapiid=ytplayer"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </Backdrop>
    );
}
