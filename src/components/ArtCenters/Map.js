import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {useAppSelector} from "../../redux/hooks";
import {selectCoordinates} from "../../redux/slices/artCenterMap";

export default function Map() {
    const coordinates = useAppSelector(selectCoordinates)


    return <MapContainer center={[coordinates.lat, coordinates.long]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.long]}>
            <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
}