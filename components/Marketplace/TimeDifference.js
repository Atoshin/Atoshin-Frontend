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
        const timeDifference = msToTime(time - now)
        let day;
        let hour;
        let min;

        day = `${timeDifference.days}`
        hour = `${timeDifference.hours}`
        min = `${timeDifference.minutes}`

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