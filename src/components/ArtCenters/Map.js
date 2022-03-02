// import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// import 'leaflet/dist/leaflet.css'
// import {useAppSelector} from "../../redux/hooks";
// import {selectCoordinates} from "../../redux/slices/artCenterMap";


export const Map = ({artCenter}) => {
    const lat = artCenter.location.lat;
    const long = artCenter.location.long;
    return (
        // <iframe
        //     // src={'https://maps.google.com/maps/embed?pb=%2B38%C2%B0+34%27+24.00%22,+-109%C2%B0+32%27+57.00&ie=UTF-8'}
        //     // src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5940.078889814968!2d51.42282445942481!3d35.81652883442961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e08a91d9820ef%3A0xd76ef0f9348cba84!2!5e0!3m2!1sen!2sfr!4v1645867377194!5m2!1sen!2sfr`}
        //     src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5940.078889814968!2d${artCenter.location.long}!3d${artCenter.location.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e08a91d9820ef%3A0xd76ef0f9348cba84!2seeee!5e0!3m2!1sen!2sfr!4v1645867377194!5m2!1sen!2sfr`}
        //     width="100%" height="100%" style={{border: 0}} loading="lazy">
        // </iframe>
        // <iframe id="map_frame" width="100%" height="100px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={"https://www.google.sk/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=sk&amp;geocode=&amp;q=https:%2F%2Fwww.google.sk%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="+ lat + "," + long + "&amp;spn=0.199154,0.399727&amp;t=m&amp;z=" + 25 + "\""}/>
        <iframe src={`https://embed.waze.com/iframe?zoom=12&lat=${lat}&lon=${long}&pin=1`}
                width="100%" height="100%"/>
    )
}