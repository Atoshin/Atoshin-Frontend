import Gallery from 'react-grid-gallery';


export default function ArtworksGridGallery({artworks}) {

    console.log(artworks)
    const images = artworks.filter(artwork => artwork.main !== 1).map(artwork => {
            return {
                src: artwork.url,
                thumbnail: artwork.url,
                thumbnailWidth: artwork.size.width,
                thumbnailHeight: artwork.size.height
            }
    })

    return <Gallery images={images} enableImageSelection={false} backdropClosesModal/>
}