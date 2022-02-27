// import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// import 'leaflet/dist/leaflet.css'
// import {useAppSelector} from "../../redux/hooks";
// import {selectCoordinates} from "../../redux/slices/artCenterMap";


export const Map = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5940.078889814968!2d51.42282445942481!3d35.81652883442961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e08a91d9820ef%3A0xd76ef0f9348cba84!2sSaadabad%20Historical%20Complex!5e0!3m2!1sen!2sfr!4v1645867377194!5m2!1sen!2sfr"
            width="100%" height="100%" style={{border: 0}} loading="lazy">
        </iframe>
    )
}