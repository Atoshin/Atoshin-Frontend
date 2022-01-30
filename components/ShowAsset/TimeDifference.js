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
        const diffMs = (time - now);
        const diffDays = Math.floor(diffMs / 86400000);
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);


        let day;
        let hour;
        let min;

        if (diffDays < 10){
            day = `0${diffDays}`
        }else{
            day = `${diffDays}`
        }

        if (diffHrs < 10){
            hour = `0${diffHrs}`
        }else{
            hour = `${diffHrs}`
        }

        if (diffMins < 10){
            min = `0${diffMins}`
        }else{
            min = `${diffMins}`
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