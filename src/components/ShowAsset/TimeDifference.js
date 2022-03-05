import styles from "../../styles/ShowAsset/ShowAsset.module.scss";
import {useEffect, useState} from "react";

export function TimeDifference({time, setIsOver}) {
    const [rendered, setRendered] = useState(false)
    const [calculatedTime, setCalculatedTime] = useState({
        day: '',
        hour: '',
        min: ''
    })


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

        if (min === '00' && hour === '00' && day === '00') {
            setIsOver(true)
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