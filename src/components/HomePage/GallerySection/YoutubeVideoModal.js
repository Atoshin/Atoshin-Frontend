import {useEffect, useRef} from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function YoutubeVideoModal({open, setOpen, video}) {
    const ref = useRef();
    const handleClose = () => {
        setOpen(false);
        const iframe = ref.current.children[0]
        iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    };

    useEffect(() => {
        const backdrop = document.getElementById('mui-backdrop-ytv')
        const iframe = backdrop.children[0]
        iframe.width = 853
        iframe.height = 480
        const iframeSrc = new URL(iframe.src)
        iframeSrc.searchParams.set('enablejsapi', '1')
        iframeSrc.searchParams.set("version", "3")
        iframeSrc.searchParams.set("playerapiid", "ytplayer")
        iframe.src = iframeSrc
    }, [])

    return (
        <Backdrop
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: 'rgba(0,0,0,0.75)'
            }}
            open={open}
            onClick={handleClose}
            dangerouslySetInnerHTML={{__html: video.link}}
            id="mui-backdrop-ytv"
            ref={ref}
        />
    );
}
