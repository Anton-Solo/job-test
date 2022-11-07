import React, {FC} from 'react';
import { useEffect, useState } from 'react';
import styles from './JobList.module.scss';
import { ROOT, JOBS } from '../../constants/api';
import { useHttp } from '../../hooks/http.hook';
import JobItem from '../../components/JobItem/JobItem';
import usePagination from '../../hooks/usePagination';
import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../../types/models';

const arrowLeft: string = require("./img/arrow-left.svg").default;
const arrowRight: string = require("./img/arrow-right.svg").default;

const JobList: FC = () => {
    const {request} = useHttp();
    const [jobs, setJobs] = useState<IJob[]>([]);

    useEffect(() => {
        request(ROOT+JOBS)
            .then(jobs => setJobs(jobs))
            .catch(error => console.log(error))
    }, []);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 15,
        count: jobs.length,
    });

    return (
        <div className={styles.jobs}>
            <div className='container'>
                <>
                {
                    jobs
                    .slice(firstContentIndex, lastContentIndex)
                    .map(job => (
                        <JobItem key={job.id} job={job}/>
                    ))
                }
                <div className={styles.pagination}>
                    <button onClick={prevPage} className={styles.page__prev}>
                        <img src={arrowLeft} alt="arrow-left" />
                    </button>
                    {/* @ts-ignore */}
                    {[...Array(totalPages).keys()].map((el) => {
                        if(el < 4) {
                            return <button
                                    onClick={() => setPage(el + 1)}
                                    key={el}
                                    className={page === el+1 ? styles.active : styles.page}
                                    >
                                    {el + 1}
                                </button>
                        } else {
                            return <div key={uuidv4()}>
                                <button className={styles.page}>...</button>
                                {/* @ts-ignore */}
                                <button onClick={() => setPage([...Array(totalPages).keys()].length)} className={page === el+1 ? styles.active : styles.page}>{totalPages}</button>
                            </div>
                        }
                        
                    })}
                    <button onClick={nextPage} className={styles.page__next}>
                        <img src={arrowRight} alt="arrow-right" />
                    </button>
                </div>
                </>
            </div>
        </div>
    )
}

export default JobList;