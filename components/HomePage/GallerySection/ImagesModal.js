import Backdrop from '@mui/material/Backdrop';
import classes from '../../../styles/HomePage/HomePage.module.scss'

export default function ImagesModal({open, setOpen}) {


    const handleClose = () => {
        setOpen({
            toggle: false,
            imgSrc: null
        });
    };

    return <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open.toggle}
        onClick={handleClose}
    >
        <img src={open.imgSrc} alt="" className={classes.galleryImgModal}/>
    </Backdrop>
}