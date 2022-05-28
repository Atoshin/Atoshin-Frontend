import {useEffect} from "react";

export default function useScrollHeader() {

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