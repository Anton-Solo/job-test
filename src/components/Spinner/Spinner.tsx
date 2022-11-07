import styles from './Spinner.module.scss';

import loader from './img/Gear.gif';

const Spinner = () => {
    return (
        <div className={styles.loading} role="status">
            <img src={loader} alt="loading" />
        </div>
    )
}

export default Spinner;