import Gallery from 'react-grid-gallery';


export default function ArtworksGridGallery({artworks}) {

    const images = artworks.filter(artwork => artwork.main !== 1).map(artwork => {
            return {
                src: artwork.url,
                thumbnail: artwork.url,
                thumbnailWidth: artwork.size.width * 10,
                thumbnailHeight: artwork.size.height * 10
            }
    })

    return <Gallery images={images} enableImageSelection={false} backdropClosesModal/>
}