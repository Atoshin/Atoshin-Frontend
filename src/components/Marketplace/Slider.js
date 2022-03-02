import classes from "../../styles/Marketplace/Marketplace.module.scss";
import {Slide} from "react-slideshow-image";
import {useEffect, useRef, useState} from "react";

export default function Slider({assets, asset, setHovered, hovered}) {
    // const [hovered, setHovered] = useState(false)



    const slideRef = useRef();

    useEffect(() => {
        if (!hovered) {
            goto()
        }
    }, [hovered])

    const goto = () => {
        setTimeout(()=>{
            slideRef.current.goTo(0);
        }, 500)
    }

    return (
        <div
            // onMouseEnter={() => mouseOver()}
            // onMouseLeave={() => mouseOut()}
        >
            <div>
                <Slide
                    slidesToShow={1}
                    easing={"ease"}
                    infinite={true}
                    pauseOnHover={false}
                    // duration={2000}
                    duration={1000}
                    // transitionDuration={150}
                    transitionDuration={300}
                    arrows={false}
                    autoplay={hovered}
                    ref={slideRef}
                >
                    {asset.medias.map((media, id) => {
                        return (
                            <>
                                <div
                                    key={id}
                                    className={classes.cardImg}
                                    style={{
                                    backgroundImage: `url("${media.url}")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                                />
                            </>
                        )
                    })}
                </Slide>
            </div>
        </div>
    );
}