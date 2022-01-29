import classes from '../../styles/ArtCenter/artCenter.module.scss'
import dynamic from "next/dynamic";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setCoordinates} from "../../redux/slices/artCenterMap";
import extractContent from "../../functions/getHtmlInnerText";
import shortenWords from "../../functions/shortenWords";

export default function ArtCenter({artCenter}) {
    const [rendered, setRendered] = useState(false)


    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const Map = useMemo(() => dynamic(() => {
        return import('../../components/ArtCenters/Map')
    }, {ssr: false}), [])
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const matches1 = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));
    const gallerySliderRef = useRef()
    const relatedSliderRef = useRef()
    const dispatch = useDispatch()
    if (artCenter.location) {
        const location = artCenter.location
        dispatch(setCoordinates({
            lat: location.lat,
            long: location.long,
        }))
    }

    useEffect(() => {
        if (!rendered) {
            setTimeout(() => {
                setRendered(true)
            }, 1000)
        } else {
            // let marker = document.getElementsByClassName('leaflet-marker-icon')[0];
            // marker.src = marker.src.slice(0, 65)
        }
    }, [rendered])

    return (
        <>
            <div className={classes.mainImgSec}>
                <img src={artCenter.medias.find(media => media.galleryLargePicture === 1).url}
                     className={classes.mainImg}/>
            </div>
            <div className={classes.headerSection}>
                <div className={classes.title}>
                    <img src={artCenter.medias.find(media => media.main === 1).url} className={classes.logoImg}
                         alt=""/>
                    {artCenter.name}</div>
                <div className={classes.socialMediaSec}>
                    {artCenter.website &&
                        <div style={{cursor: "pointer"}} onClick={() => window.open(artCenter.website, '_blank')}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12H14.36ZM12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56V17.56ZM12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14V14ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03V2.03ZM16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z"
                                    fill="black"/>
                            </svg>
                        </div>
                    }
                    {artCenter.linkedin &&
                        <div style={{cursor: "pointer"}} onClick={() => window.open(artCenter.linkedin, '_blank')}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.868 0.625H2.13203C1.3 0.625 0.625 1.3 0.625 2.13203V17.868C0.625 18.7 1.3 19.375 2.13203 19.375H17.868C18.7 19.375 19.375 18.7 19.375 17.868V2.13203C19.375 1.3 18.7 0.625 17.868 0.625ZM17.868 17.875C7.37266 17.8727 2.125 17.8703 2.125 17.868C2.12734 7.37266 2.12969 2.125 2.13203 2.125C12.6273 2.12734 17.875 2.12969 17.875 2.13203C17.8727 12.6273 17.8703 17.875 17.868 17.875ZM3.40469 7.65391H6.18672V16.6023H3.40469V7.65391ZM4.79688 6.43047C5.68516 6.43047 6.40937 5.70859 6.40937 4.81797C6.40937 4.60621 6.36767 4.39653 6.28663 4.20089C6.2056 4.00525 6.08682 3.82749 5.93709 3.67776C5.78735 3.52802 5.60959 3.40925 5.41395 3.32821C5.21831 3.24718 5.00863 3.20547 4.79688 3.20547C4.58512 3.20547 4.37544 3.24718 4.1798 3.32821C3.98416 3.40925 3.8064 3.52802 3.65667 3.67776C3.50693 3.82749 3.38815 4.00525 3.30712 4.20089C3.22608 4.39653 3.18437 4.60621 3.18437 4.81797C3.18203 5.70859 3.90391 6.43047 4.79688 6.43047ZM10.7102 12.175C10.7102 11.0078 10.9328 9.87812 12.3789 9.87812C13.8039 9.87812 13.825 11.2117 13.825 12.25V16.6023H16.6047V11.6945C16.6047 9.28516 16.0844 7.43125 13.2695 7.43125C11.9172 7.43125 11.0102 8.17422 10.6375 8.87734H10.6V7.65391H7.93047V16.6023H10.7102V12.175Z"
                                    fill="black"/>
                            </svg>
                        </div>
                    }
                    {artCenter.instagram &&
                        <div style={{cursor: "pointer"}}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z"
                                      fill="black"/>
                            </svg>
                        </div>
                    }
                </div>
            </div>

            <div className={classes.paragraphSec}>
                <div className={classes.firstTextPart}>
                    <div className={classes.textImg}>
                        {/*<svg className={classes.svg} width="120" height="72" viewBox="0 0 120 72" fill="none"*/}
                        {/*     xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <rect width="120" height="72" rx="12" fill="#E0E7EC"/>*/}
                        {/*</svg>*/}
                    </div>

                    <div className={classes.text} dangerouslySetInnerHTML={{__html: artCenter.bio}}/>
                </div>


                {/*<p className={classes.text2}>*/}
                {/*    Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of*/}
                {/*    Iran. He grew up in a great black tent on the top of a mountain, among horses and fields of blue and*/}
                {/*    yellow wild flowers. Reza moved from the study of constellations of light made by moonlight shining*/}
                {/*    through tiny holes*/}
                {/*</p>*/}
            </div>


            <div className={matches1 || matches2 ? classes.sliderSec1 : classes.sliderSec}
            >
                <Slide ref={gallerySliderRef}
                       autoplay={true}
                       cssClass={classes.slider}
                       easing={"ease"}
                       slidesToShow={matches1 ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5}
                       infinite={true}
                       arrows={false}
                       slidesToScroll={1}
                       transitionDuration={500}
                       duration={5000}>
                    {artCenter.medias.filter(media => media.homeapagePicture === 1).map((img, key) => {
                        return <div key={key} style={{
                            backgroundImage: `url("${img.url}")`,
                            height: 220,
                            width: 220,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    })}
                </Slide>
            </div>

            <div className={classes.detailsSec}>
                <div className={classes.detailsHeader}>
                    Details
                </div>
                <div className={classes.table}>
                    <tr className={classes.row}>
                        <td className={classes.td1}>Gallery Owner</td>
                        <td className={classes.td2}>DD Owner</td>
                    </tr>
                    <tr>
                        <td className={classes.td1}>Address</td>
                        <td className={classes.td2}>{artCenter.location && artCenter.location.address}</td>
                    </tr>
                    <tr>
                        <td className={classes.td1}>Location</td>
                        <td></td>
                    </tr>
                </div>
                <div className={classes.map}>
                    <Map/>
                </div>
            </div>
            <div className={classes.relatedSec}>
                <div className={classes.relatedTitle}>
                    Related to gallery
                </div>
                <div className={classes.slider2}>
                    <Slide
                        ref={relatedSliderRef}
                        autoplay={true}
                        easing={"ease"}
                        slidesToShow={matches1 ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 5 : 5}
                        infinite={true}
                        arrows={false}
                        slidesToScroll={1}
                        transitionDuration={500}
                        duration={5000}
                    >
                        {artCenter.assets.map(asset => {
                            return <div className={(matches1 || matches2) ? classes.card2 : classes.card}>
                                <div
                                    className={(matches1 || matches2) ? classes.relatedImg2 : classes.relatedImg}
                                    style={{
                                        backgroundImage: `url("${asset.medias.find(media => media.main === 1).url}")`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}/>
                                <div className={classes.relatedDescription}>
                                    <p className={(matches1 || matches2) ? classes.relatedDescTitle2 : classes.relatedDescTitle}>
                                        {asset.title}
                                    </p>
                                    {(new Date(asset.endDate) > new Date()) &&
                                        <div
                                            className={matches1 || matches2 ? classes.date : classes.date1}>
                                            Sale ends
                                            in {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDay()}, {new Date(asset.endDate).getFullYear()}
                                        </div>
                                    }
                                    <p
                                        className={(matches1 || matches2) ? classes.relatedDescDesc2 : classes.relatedDescDesc}
                                    >
                                        {shortenWords(extractContent(asset.bio), 60) + '...'}
                                    </p>
                                </div>
                            </div>
                        })}
                    </Slide>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const artCenterId = query.id

    const {
        data: {
            artCenter
        }
    } = await axios.get(`${process.env.BASE_URL}/api/art-center/${artCenterId}`)

    return {
        props: {
            artCenter
        }
    }

}