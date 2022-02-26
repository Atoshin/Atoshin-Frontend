// import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// import 'leaflet/dist/leaflet.css'
// import {useAppSelector} from "../../redux/hooks";
// import {selectCoordinates} from "../../redux/slices/artCenterMap";


export const Map = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4793439312516!2d51.427553546009975!3d35.81132204013603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0601112b802b%3A0xa90abe015668fbad!2sTehran%2C%20Saadati%2C%20Iran!5e0!3m2!1sen!2suk!4v1645722591650!5m2!1sen!2suk"
            width="100%" height="100%" style={{border: 0}} loading="lazy">
        </iframe>
    )
}