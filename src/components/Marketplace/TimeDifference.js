import styles from "../../styles/ShowAsset/ShowAsset.module.scss";
import {useEffect, useState} from "react";
import classes from "../../styles/Marketplace/Marketplace.module.scss";

export function TimeDifference({time}) {
    const [rendered, setRendered] = useState(false)
    const [calculatedTime, setCalculatedTime] = useState({
        day: '',
        hour: '',
        min: ''
    })

    function msToTime(s) {

        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
        }

        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        let days = "00";
        hrs = pad(hrs)
        mins = pad(mins)

        if (hrs > 24) {
            days = (hrs / 24).toFixed(0)
            hrs = hrs - (24 * days)
        }

        return {
            days: days,
            hours: hrs,
            minutes: mins
        }
    }

    function calculateTimeDifference() {
        time = new Date(time)
        const now = new Date()
        const diffMs = (time - now);
        const diffDays = Math.floor(diffMs / 86400000);
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
        let day;
        let hour;
        let min;

        if (diffDays < 10) {
            day = `0${diffDays}`
        } else {
            day = `${diffDays}`
        }
        if (diffDays < 0) {
            day = `00`
        }

        if (diffHrs < 10) {
            hour = `0${diffHrs}`
        } else {
            hour = `${diffHrs}`
        }
        if (diffHrs < 0) {
            hour = `00`
        }

        if (diffMins < 10) {
            min = `0${diffMins}`
        } else {
            min = `${diffMins}`
        }
        if (diffMins < 0) {
            min = `00`
        }

        setCalculatedTime({
            day,
            hour,
            min
        })
    }

    useEffect(() => {
        if (!rendered) {
            calculateTimeDifference()
            setRendered(true)
        } else {
            setTimeout(() => {
                calculateTimeDifference()
            }, 1000)
        }
    }, [calculatedTime])


    return <p className={classes.leftNumbers}>{calculatedTime.day}d {calculatedTime.hour}h {calculatedTime.min}m</p>

}