import styles from "../styles/ShowAsset.module.css";
import Head from "next/head";
import HomePage from "../components/HomePage";


export default function ShowAsset() {
    return (
        <>
            <div className={styles.showAssetMain}>
                <div className={styles.topMainSec}>
                    <div className={styles.topLeftMainSec}>
                        <div className={styles.titleSec}>
                            <div className={styles.artworkTitle}>
                                Starry Night
                            </div>
                            <div className={styles.artistNameSec}>
                                <div className={styles.artistText}>
                                    Artist
                                </div>
                                <div className={styles.artistName}>
                                    Vincent Van Gogh
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}