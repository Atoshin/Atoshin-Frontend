import styles from "../../styles/ShowAsset/ShowAsset.module.scss";
import {useEffect, useState} from "react";

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

        if (timeDifference.days < 10) {
            day = `0${timeDifference.days}`
        } else {
            day = `${timeDifference.days}`
        }

        if (timeDifference.hours < 10) {
            hour = `0${timeDifference.hours}`
        } else {
            hour = `${timeDifference.hours}`
        }

        if (timeDifference.minutes < 10) {
            min = `0${timeDifference.minutes}`
        } else {
            min = `${timeDifference.minutes}`
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


    return <div className={styles.timeCounterSec}>
        <div className={styles.counterSec}>
            <div className={styles.counterNum}>
                {calculatedTime.day}
            </div>
            <div className={styles.counterTitle}>
                Days
            </div>
        </div>
        <div className={styles.counterSec}>
            <div className={styles.counterNum}>
                {calculatedTime.hour}
            </div>
            <div className={styles.counterTitle}>
                Hours
            </div>
        </div>
        <div className={styles.counterSec}>
            <div className={styles.counterNum}>
                {calculatedTime.min}
            </div>
            <div className={styles.counterTitle}>
                Minutes
            </div>
        </div>
    </div>
}