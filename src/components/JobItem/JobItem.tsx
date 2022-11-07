import StarRatings from 'react-star-ratings';
import styles from './JobItem.module.scss';
import { IJob } from '../../types/models';
import { Link } from 'react-router-dom';

interface JobProps {
    job: IJob
}

const favorites: string = require("./img/favorite.svg").default;
const location: string = require("./img/Location.svg").default;

const JobItem = ({job}: JobProps) => {
    return (
        <Link to={String(job.id)} className={styles.job}>
            <div className={styles.left__wrapper}>
                <img src={job.image} alt={job.name} />
                <div className={styles.job__info}>
                    <p className={styles.title}>{job.name}</p>
                    <p className={styles.departament}>{job.departament}</p>
                    <div className={styles.location}>
                       <img src={location} alt="location" /> <span>{job.city}, {job.country}</span>
                    </div>
                </div>
            </div>
            
            <div className={styles.right__wrapper}>
                <div className={styles.rating}>
                    { job.rating &&
                        <StarRatings
                            name="rating" 
                            numberOfStars={5}
                            starDimension={'18'}
                            starSpacing={'0'}
                            rating={Number(job.rating)}
                        />
                    }
                </div>
                    
                <div className={styles.favorites}>
                    <img src={favorites} alt="favorites" />
                    <div className={styles.date}>Posted {job.date}</div>
                </div>
            </div>
        </Link>
    )
}

export default JobItem;