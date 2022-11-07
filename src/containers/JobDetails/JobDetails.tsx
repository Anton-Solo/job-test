import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DetailsHeader from '../../components/JobDetails/DetailsHeader/DetailsHeader';
import UiButton from '../../components/Ui/UiButton/UiButton';
import Contacts from '../../components/Contacts/Contacts';
import Spinner from '../../components/Spinner/Spinner';
import { ROOT, JOBS } from '../../constants/api';
import { useHttp } from '../../hooks/http.hook';
import styles from './JobDetails.module.scss';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import employees from './img/employees.png';
import clinic from './img/clinic.png';
import directors from './img/directors.png';

import { IJob } from '../../types/models';

interface JobDetailsPageParams {
    id: string
}

const JobDetails = () => {
    const params = useParams<JobDetailsPageParams>();
    const history = useNavigate();
    const {request} = useHttp();
    const [job, setJob] = useState<IJob | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    function fetchJob() {
        setLoading(true);
        request(`${ROOT}${JOBS}/${params.id}`)
            .then(job => {
                setLoading(false);
                setJob(job)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchJob()
    },[]);

    const backHandler = () => {
        history("/");
    }

    return (
            <div className={styles.details}>
                {loading && <Spinner />}
                {!loading && <div className='container'>
                    <div className={styles.details__wrapper}>
                        <div className={styles.details__left}>
                            <DetailsHeader />
                            <div className={styles.btn__wrapper}>
                                <UiButton 
                                    text={'Apply now'}
                                />
                            </div>
                            
                            <div className={styles.info}>
                                <div className={styles.title__wrapper}>
                                    <p className={styles.title}>{job?.name}</p>
                                    <div className={styles.date}>
                                        <span>Posted {job?.date}</span>
                                        <div className={cn(styles.brutto, styles.brutto__mobile)}>
                                            <span className={styles.brutto__price}>€ {job?.brutto}</span>
                                            <span className={styles.brutto__txt}>Brutto, per year</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.brutto}>
                                    <span className={styles.brutto__price}>€ {job?.brutto}</span>
                                    <span className={styles.brutto__txt}>Brutto, per year</span>
                                </div>
                            </div>
                            <div className={styles.description}>
                                {job?.description}
                            </div>
                            <div className={styles.description}>
                                <h3 className={styles.h3}>Responsopilities</h3>
                                {job?.responsopilities}
                            </div>
                            { job?.descriptionBenefits &&<div className={styles.description}>
                                <h3 className={styles.h3}>Compensation & Benefits:</h3>
                                <ul className={styles.benefit__list}>
                                    {
                                        job.descriptionBenefits.map((benefit:string) => <li key={uuidv4()}>{benefit}</li>)
                                    }
                                </ul>
                            </div>
                            }
                            <UiButton 
                                text={'Apply now'}
                            />
                            <div className={styles.additional}>
                                <h2 className={styles.title}>Additional info</h2>
                                { job?.type && <div className={styles.wrapper}>
                                    <p>Employment type</p>
                                    <ul className={styles.additional__type}>
                                        {
                                            job.type.map((type:string) => <li key={uuidv4()}>{type}</li>)
                                        }
                                    </ul>
                                </div>
                                }
    
                                { job?.benefits && <div className={styles.wrapper}>
                                    <p>Benefits</p>
                                        <ul className={cn(styles.additional__type, styles.additional__benefits)}>
                                            {
                                                job.benefits.map((benefit:string) => <li key={uuidv4()}>{benefit}</li>)
                                            }
                                        </ul>
                                    </div>
                                }
                                <div className={styles.images}>
                                    <h2 className={styles.title}>Attached images</h2>
                                    <ul className={styles.images__list}>
                                        <li>
                                            <img src={employees} alt="employees" />
                                        </li>
                                        <li>
                                            <img src={directors} alt="directors" />
                                        </li>
                                        <li>
                                            <img src={clinic} alt="clinic" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className={styles.btn__wrapper}>
                                <UiButton 
                                    text={'Return to the board'}
                                    onClick={backHandler}
                                    classes={styles.light}
                                />
                            </div>
                        </div>
    
                        <div className={styles.details__right}>
                            <h2 className={styles.title}>Contacts</h2>
                            <Contacts />
                        </div>
                    </div>
                </div>
                }
            </div>        
    )
}

export default JobDetails;