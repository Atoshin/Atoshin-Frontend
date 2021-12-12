import {Fade, Slide} from "@mui/material";
import {useEffect, useState} from "react";


export function Animation({children, containerRef, idx, currentSlide}) {
    const [fade, setFade] = useState(true)
    const [slide, setSlide] = useState(false)
    const [isFade, setIsFade] = useState(idx === currentSlide)

    const initiateSlide = async () => {
        setFade(false)
        setTimeout(() => {
            setSlide(true)
        }, 500)
    }

    useEffect(() => {
        if (currentSlide !== 0) {
            initiateSlide()
        }
    }, [currentSlide])

    if (isFade) {
        return <Fade unmountOnExit={true} appear={false} in={fade} timeout={1000}>
            {children}
        </Fade>
    } else {
        return <Slide unmountOnExit={true} appear={false} in={isFade ? true : slide} direction="left">
            {children}
        </Slide>
    }
}