import styles from './Contacts.module.scss';

import mapp from './img/Map.png';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__info}>
                <p className={styles.head}>Department name. University Hospital Giessen.</p>
                <span>AKH Wien, 1090 Wien, Währinger </span>
                <span>Gürtel 18-20 </span>
                <span>+43 (01) 40400-12090,</span>
                <span>post_akh_diz@akhwien.at</span>
            </div>
            <div className={styles.map}>
                <img src={mapp} alt="google map" />
            </div>
        </div>
    )
}

export default Contacts;