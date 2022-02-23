import classes from "../../styles/Marketplace/Marketplace.module.scss";
import {Slide} from "react-slideshow-image";
import {useEffect, useRef, useState} from "react";

export default function Slider({assets, asset, setHovered, hovered}) {
    // const [hovered, setHovered] = useState(false)



    const slideRef = useRef();

    useEffect(() => {
        console.log(!hovered[asset.id]);
        if (!hovered[asset.id]) {
            goto()
        }
    }, [hovered[asset.id]])

    // const mouseOver = () => {
    //     console.log('in:');
    //     setHovered(true)
    // }
    // const mouseOut = () => {
    //     console.log('out:');
    //     setHovered(false)
    //     goto()
    // }


    const goto = () => {
        slideRef.current.goTo(0);
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
                    duration={2000}
                    transitionDuration={150}
                    arrows={false}
                    autoplay={hovered[asset.id]}
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
                                <div>{id}</div>
                            </>
                        )
                    })}
                </Slide>
            </div>
        </div>
    );
}