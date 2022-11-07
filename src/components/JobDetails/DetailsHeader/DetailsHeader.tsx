import styles from './DetailsHeader.module.scss';

const save: string = require("./img/save.svg").default;
const share: string = require("./img/Share.svg").default;

const DetailsHeader = () => {
    return (
        <div className={styles.head}>
            <h2 className={styles.title}>Job Details</h2>
            <div className={styles.head__btns}>
                <a href="#" className={styles.favorite}>
                    <img src={save} alt="Save job" />
                    <span>Save to my list</span>
                </a>
                <a href="#" className={styles.share}>
                    <img src={share} alt="Share job" />
                    <span>Share</span>
                </a>
            </div>
        </div>
    )
}

export default DetailsHeader;