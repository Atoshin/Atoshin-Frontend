import {useEffect} from "react";
import {setScroll} from '../../redux/slices/functionalitySlice'
import {useDispatch} from 'react-redux'

export default function useScrollHeader() {
    // const dispatch = useDispatch()

    function changeHeader(e) {
        if (window.scrollY > 50) {

        } else {

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeHeader)


        return function cleanup() {
            window.removeEventListener('scroll', changeHeader)
        }
    }, [])
}